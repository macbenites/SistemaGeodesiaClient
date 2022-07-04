import {
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
  Typography
} from '@mui/material';
import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { saveUpdateRole } from 'src/redux/slices/roles/roleSlice';

import { validationRoleCreate } from 'src/utils/validation';
import BasicModal from 'src/components/common/Modals';

const RoleFormEdit = () => {
  const dispatch = useDispatch();
  const { showRole, update } = useSelector((state) => state.role);
  const [modal, setModal] = useState(false);

  const sectionsRoles = [
    'ver',
    'registrar',
    'editar',
    'eliminar',
    'generar',
    'iteraciones'
  ];

  const objectPermissions = sectionsRoles.map((section) => {
    return {
      section,
      permissions: showRole.permisos?.filter(
        (permission) => permission && permission.name.split('-')[0] === section
      )
    };
  });

  return (
    <>
      <BasicModal modal={modal} setModal={setModal} message={update} />
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Registra Rol" />
          <Divider />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Formik
                  initialValues={{
                    id: showRole.rol.id,
                    name: showRole.rol.name,
                    autorizar: showRole.autorizar,
                    permiso: showRole.permisos_rol?.map(
                      (permission) => `${permission.id}`
                    )
                  }}
                  validationSchema={validationRoleCreate}
                  onSubmit={(values, { resetForm }) => {
                    dispatch(saveUpdateRole(values)).then(() => {
                      setModal(true);
                      //resetForm();
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
                                    {section.permissions.map((permission) => {
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
                                    })}
                                  </FormGroup>
                                </Grid>
                              );
                            })}
                          </Grid>
                        </FormControl>
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
                        <Box display="flex" justifyContent="flex-end" mt={2}>
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                          >
                            Actualizar
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
    </>
  );
};

export default RoleFormEdit;
