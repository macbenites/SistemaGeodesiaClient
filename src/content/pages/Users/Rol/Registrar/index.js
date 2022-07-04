import {
  Container,
  Grid,
  TextField,
  CardContent,
  CardHeader,
  Divider,
  Box,
  Card,
  Button,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Snackbar,
  Typography
} from '@mui/material';
import { Formik, Form } from 'formik';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { saveRole, getRoleCreate } from 'src/redux/slices/roles/roleSlice';
import GoBackButton from 'src/components/common/Buttons/goBack';
import { validationRoleCreate } from 'src/utils/validation';
import BasicModal from 'src/components/common/Modals';

const RoleForm = () => {
  const dispatch = useDispatch();
  const { permissions, created } = useSelector((state) => state.role);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(getRoleCreate());
  }, [dispatch]);

  const sectionsRoles = [
    'ver',
    'registrar',
    'editar',
    'eliminar',
    'generar',
    'asignar'
  ];

  const objectPermissions = sectionsRoles.map((section) => {
    return {
      section,
      permissions: permissions.filter(
        (permission) => permission && permission.name.split('-')[0] === section
      )
    };
  });

  return (
    <>
      <BasicModal modal={modal} setModal={setModal} message={created} />
      <GoBackButton linkRoute="usuarios/rol" />
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
          mb={2}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Registra Rol" />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Formik
                      initialValues={{
                        name: '',
                        autorizar: 0,
                        permiso: []
                      }}
                      validationSchema={validationRoleCreate}
                      onSubmit={(values, { resetForm }) => {
                        dispatch(saveRole(values)).then(() => {
                          setModal(true);
                          resetForm();
                        });
                      }}
                    >
                      {({
                        values,
                        handleChange,
                        setFieldValue,
                        errors,
                        touched
                      }) => {
                        return (
                          <Form>
                            <Grid container spacing={2}>
                              <Grid item xs={12} md={6}>
                                <TextField
                                  type="search"
                                  id="roles"
                                  label="Nombre de Rol"
                                  fullWidth
                                  name="name"
                                  value={values.name}
                                  onChange={handleChange}
                                  error={touched.name && Boolean(errors.name)}
                                  helperText={errors.name}
                                />
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                md={6}
                                style={{
                                  display: 'flex',
                                  flexDirection: 'row',
                                  justifyContent: 'flex-end'
                                }}
                              >
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      name="autorizar"
                                      value={values.autorizar}
                                      checked={values.autorizar}
                                      onChange={async (e) => {
                                        if (e.target.checked) {
                                          setFieldValue('autorizar', 1);
                                        } else {
                                          setFieldValue('autorizar', 0);
                                        }
                                      }}
                                    />
                                  }
                                  label="Permiso de autorización"
                                />
                              </Grid>
                            </Grid>
                            <FormControl
                              component="fieldset"
                              style={{
                                display: 'flex',
                                border: '1px solid #e0e0e0',
                                padding: '1rem',
                                borderRadius: '0.5rem',
                                marginTop: '1.5rem'
                              }}
                            >
                              <Grid container spacing={2}>
                                {objectPermissions.map((section) => {
                                  return (
                                    <Grid item xs={12} md={3}>
                                      <FormGroup>
                                        <FormLabel component="legend">
                                          <Typography
                                            variant="h5"
                                            color="blueviolet"
                                            gutterBottom
                                          >
                                            {section.section.toUpperCase()}
                                          </Typography>
                                        </FormLabel>
                                        {section.permissions.map(
                                          (permission) => {
                                            return (
                                              <FormControlLabel
                                                control={
                                                  <Checkbox
                                                    key={permission.id}
                                                    name="permiso"
                                                    value={permission.id}
                                                    checked={values?.permiso?.includes(
                                                      `${permission.id}`
                                                    )}
                                                    onChange={handleChange}
                                                  />
                                                }
                                                label={permission.name}
                                              />
                                            );
                                          }
                                        )}
                                      </FormGroup>
                                    </Grid>
                                  );
                                })}
                              </Grid>
                            </FormControl>
                            {/* <h3>Values</h3>
                            <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                            {/* Message error MUI  */}
                            <Typography
                              variant="h4"
                              color="red"
                              gutterBottom
                              style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginTop: '1rem'
                              }}
                            >
                              {errors.permiso}
                            </Typography>
                            <Box
                              display="flex"
                              justifyContent="flex-end"
                              mt={2}
                            >
                              <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                              >
                                Guardar
                              </Button>
                            </Box>
                          </Form>
                        );
                      }}
                    </Formik>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default RoleForm;
