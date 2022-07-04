import { useDispatch, useSelector } from 'react-redux';
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
  MenuItem
} from '@mui/material';
import { Formik, Form } from 'formik';
import { saveAssignRole } from 'src/redux/slices/users/userSlice';
import { useNavigate } from 'react-router';
import BasicModal from 'src/components/common/Modals/index';
import { useState } from 'react';
import GoBackButton from 'src/components/common/Buttons/goBack';

const AssignRole = () => {
  const [modal, setModal] = useState(false);
  const { assignRole, message } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <BasicModal modal={modal} setModal={setModal} message={message} />
      <GoBackButton linkRoute="usuarios/mantenimiento" />
      <Container maxWidth="xs">
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
              <CardHeader title="Asignar Roles" />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="nom_per"
                      label="Trabajador"
                      variant="outlined"
                      fullWidth
                      value={`${assignRole.trabajador.nom_per} ${assignRole.trabajador.ape_pat_per} ${assignRole.trabajador.ape_mat_per}`}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Formik
                      onSubmit={(values, { setSubmitting }) => {
                        dispatch(saveAssignRole(values)).then(() => {
                          setModal(true);
                        });
                      }}
                      initialValues={{
                        id: assignRole.usuario?.id,
                        rol: assignRole.rolUsuario[0]?.name,
                        acceso: assignRole.accesoUsuario?.map(
                          (item) => `${item.id}`
                        )
                      }}
                    >
                      {({ values, handleChange }) => {
                        return (
                          <Form>
                            <TextField
                              select
                              id="rol"
                              label="Rol"
                              fullWidth
                              name="rol"
                              value={values.rol}
                              onChange={handleChange}
                              //   error={touched.cod_t_per && Boolean(errors.cod_t_per)}
                              //   helperText={errors.cod_t_per}
                            >
                              {assignRole.roles?.map((rol) => (
                                <MenuItem key={rol.id} value={rol.name}>
                                  {rol.name}
                                </MenuItem>
                              ))}
                            </TextField>
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
                              <FormLabel component="legend">Accesos</FormLabel>
                              <FormGroup>
                                {assignRole.accesos?.map((item) => (
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        checked={values?.acceso?.includes(
                                          `${item.id}`
                                        )}
                                        onChange={handleChange}
                                        key={item.id}
                                        value={item.id}
                                        name="acceso"
                                      />
                                    }
                                    label={item.name}
                                  />
                                ))}
                              </FormGroup>
                            </FormControl>
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
                                Asignar
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

export default AssignRole;
