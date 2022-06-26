import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  Container,
  CardContent,
  MenuItem,
  Typography,
  TextField,
  CircularProgress,
  List,
  CardHeader
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FieldArray, Form, Field, Formik } from 'formik';
import {
  saveEmployee,
  fetchProvince,
  fetchDistrict
} from 'src/redux/slices/users/userSlice';
import { validationProvider } from 'src/utils/validation';
import BasicModal from 'src/components/common/Modals/index';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const EmployeeFormUpdate = () => {
  const [modal, setModal] = useState(false);
  const { updateUser, province, district } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProvince(updateUser.trabajador.cod_dpt));
    dispatch(fetchDistrict(updateUser.trabajador.cod_provi));
  }, [dispatch]);

  return (
    <>
      {/* <BasicModal modal={modal} setModal={setModal} message={message} /> */}
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
          mt={2}
          mb={2}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Actualizar Trajador" />
              <Divider />
              <CardContent>
                <Formik
                  initialValues={{
                    cod_t_per: updateUser.trabajador.cod_t_per,
                    nom_per: updateUser.trabajador.nom_per,
                    ape_pat_per: updateUser.trabajador.ape_pat_per,
                    ape_mat_per: updateUser.trabajador.ape_mat_per,
                    cod_t_doc: updateUser.trabajador.cod_t_doc,
                    nro_doc: updateUser.trabajador.nro_doc,
                    correo_per: updateUser.trabajador.correo_per,
                    dir_per: updateUser.trabajador.dir_per,
                    cod_dpt: updateUser.trabajador.cod_dpt,
                    cod_provi: updateUser.trabajador.cod_provi,
                    cod_dist: updateUser.trabajador.cod_dist,
                    dir_per: updateUser.trabajador.dir_per,
                    nro_telf: updateUser?.telefono.map((item) => item.nro_telf)
                  }}
                  onSubmit={async (values, { resetForm }) => {
                    dispatch(saveEmployee(values)).then(() => {
                      setModal(true);
                      resetForm();
                    });
                  }}
                >
                  {({
                    values,
                    errors,
                    isSubmitting,
                    handleChange,
                    touched,
                    setFieldValue
                  }) => (
                    <Form autoComplete="off">
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={3}>
                          <TextField
                            select
                            id="cod_t_per" /* codigo */
                            label="Tipo de persona"
                            fullWidth
                            name="cod_t_per" /* codigo */
                            value={values.cod_t_per} /* codigo */
                            onChange={handleChange}
                            error={
                              touched.cod_t_per && Boolean(errors.cod_t_per)
                            }
                            helperText={errors.cod_t_per}
                          >
                            {updateUser.tipo_persona?.map(
                              (
                                provider /* nombre de la variable que contiene los datos B*/
                              ) => (
                                <MenuItem
                                  key={provider.cod_t_per}
                                  value={provider.cod_t_per}
                                >
                                  {provider.des_t_per}
                                </MenuItem> /* NOMBRE DEL PARAMETRO A MOSTRAR */
                              )
                            )}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <TextField
                            id="nom_per" /* nombre */
                            label="Nombres"
                            fullWidth
                            type="search"
                            name="nom_per" /* nombre */
                            autoComplete="off"
                            value={values.nom_per}
                            onChange={handleChange}
                            error={touched.nom_per && Boolean(errors.nom_per)}
                            helperText={errors.nom_per}
                          />
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <TextField
                            id="ape_pat_per" /* nombre */
                            label="Apellido Paterno"
                            fullWidth
                            type="search"
                            name="ape_pat_per" /* nombre */
                            autoComplete="off"
                            value={values.ape_pat_per}
                            onChange={handleChange}
                            error={
                              touched.ape_pat_per && Boolean(errors.ape_pat_per)
                            }
                            helperText={errors.ape_pat_per}
                          />
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <TextField
                            id="ape_mat_per" /* nombre */
                            label="Apellido Materno"
                            fullWidth
                            type="search"
                            name="ape_mat_per" /* nombre */
                            autoComplete="off"
                            value={values.ape_mat_per}
                            onChange={handleChange}
                            error={
                              touched.ape_mat_per && Boolean(errors.ape_mat_per)
                            }
                            helperText={errors.ape_mat_per}
                          />
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <TextField
                            select
                            id="cod_t_doc"
                            label="Tipo de documento"
                            fullWidth
                            name="cod_t_doc"
                            value={values.cod_t_doc}
                            onChange={handleChange}
                            error={
                              touched.cod_t_doc && Boolean(errors.cod_t_doc)
                            }
                            helperText={errors.cod_t_doc}
                          >
                            {updateUser.tdoc_ide?.map((provider) => (
                              <MenuItem
                                key={provider.cod_t_doc}
                                value={provider.cod_t_doc}
                              >
                                {provider.dest_doc}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            id="nro_doc"
                            label="Nro. Documento"
                            fullWidth
                            type="search"
                            name="nro_doc"
                            autoComplete="off"
                            value={values.nro_doc}
                            onChange={handleChange}
                            error={touched.nro_doc && Boolean(errors.nro_doc)}
                            helperText={errors.nro_doc}
                          />
                        </Grid>
                        <Grid item xs={12} md={5}>
                          <TextField
                            id="correo_per"
                            label="Correo"
                            fullWidth
                            type="search"
                            name="correo_per"
                            value={values.correo_per}
                            onChange={handleChange}
                            error={
                              touched.correo_per && Boolean(errors.correo_per)
                            }
                            helperText={errors.correo_per}
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            select
                            id="cod_dpt"
                            label="Departamento"
                            fullWidth
                            name="cod_dpt"
                            value={values.cod_dpt}
                            onChange={async (e) => {
                              const { value } = e.target;
                              dispatch(fetchProvince(value));
                              setFieldValue('cod_dpt', value);
                              setFieldValue('cod_provi', '');
                              setFieldValue('cod_provi', province);
                            }}
                          >
                            {updateUser.departamento?.map((provider) => (
                              <MenuItem
                                key={provider.cod_dpt}
                                value={provider.cod_dpt}
                              >
                                {provider.des_dpt}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            select
                            id="cod_provi"
                            label="Provincia"
                            fullWidth
                            name="cod_provi"
                            value={values.cod_provi}
                            onChange={async (e) => {
                              const { value } = e.target;
                              dispatch(fetchDistrict(value));
                              setFieldValue('cod_provi', value);
                              setFieldValue('cod_dist', '');
                              setFieldValue('cod_dist', district);
                            }}
                          >
                            {province?.map((provider) => (
                              <MenuItem
                                key={provider.cod_provi}
                                value={provider.cod_provi}
                              >
                                {provider.des_provi}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            select
                            id="cod_dist"
                            label="Distrito"
                            fullWidth
                            name="cod_dist"
                            value={values.cod_dist}
                            onChange={handleChange}
                          >
                            {district?.map((provider) => (
                              <MenuItem
                                key={provider.cod_dist}
                                value={provider.cod_dist}
                              >
                                {provider.des_distrito}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={12}>
                          <TextField
                            id="dir_per"
                            label="Direccion"
                            fullWidth
                            type="search"
                            name="dir_per"
                            autoComplete="off"
                            value={values.dir_per}
                            onChange={handleChange}
                            error={touched.dir_per && Boolean(errors.dir_per)}
                            helperText={errors.dir_per}
                          />
                        </Grid>
                        <FieldArray name="nro_telf">
                          {({ push, remove }) => (
                            <>
                              <Grid item container spacing={2}>
                                <Grid
                                  item
                                  spacing={2}
                                  xs={12}
                                  container
                                  justifyContent="space-between"
                                  alignItems="center"
                                >
                                  <Grid item>
                                    <Typography variant="h4">
                                      Telefonos
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Button
                                      disabled={
                                        values.nro_telf.length <= 1
                                          ? false
                                          : true
                                      }
                                      variant="contained"
                                      endIcon={<AddIcCallIcon />}
                                      color="secondary"
                                      size="large"
                                      onClick={() => push('')}
                                    >
                                      Agregar
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                              {values.nro_telf.map((_, index) => (
                                <Grid container item key={index} spacing={2}>
                                  <Grid item container spacing={2} xs={12}>
                                    <Grid item xs={12} md={3}>
                                      <TextField
                                        type="search"
                                        label="Telefono o celular"
                                        fullWidth
                                        value={values.nro_telf[index]}
                                        name={`nro_telf.${index}`}
                                        onChange={handleChange}
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={1}>
                                      <Button
                                        disabled={isSubmitting}
                                        onClick={() => remove(index)}
                                        variant="outlined"
                                        size="large"
                                        color="error"
                                        fullWidth
                                      >
                                        Quitar
                                      </Button>
                                    </Grid>
                                  </Grid>
                                </Grid>
                              ))}
                              <Grid item xs={12} md={12}>
                                {errors?.nro_telf?.length > 0 ? (
                                  <Typography color="error">
                                    {errors?.nro_telf?.map((error, index) => (
                                      <List key={index}>
                                        {error !== null && (
                                          <>
                                            {error?.nro_telf && (
                                              <li>
                                                {`Telefono ${index + 1} : `}{' '}
                                                {error.nro_telf}
                                              </li>
                                            )}
                                          </>
                                        )}
                                      </List>
                                    ))}
                                  </Typography>
                                ) : null}
                              </Grid>
                            </>
                          )}
                        </FieldArray>
                        <Grid item xs={12} md={3}>
                          <Button
                            disabled={isSubmitting}
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            startIcon={
                              isSubmitting ? (
                                <CircularProgress size="0.9rem" />
                              ) : undefined
                            }
                          >
                            {isSubmitting ? 'Registrando' : 'Actualizar'}
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default EmployeeFormUpdate;
