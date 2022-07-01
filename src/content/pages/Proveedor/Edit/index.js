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
import {
  fetchProviderProvince,
  fetchProviderDistrict,
  saveUpdateProvider
} from 'src/redux/slices/providers/providerSlice';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FieldArray, Form, Field, Formik } from 'formik';
import { validationProvider } from 'src/utils/validation';
import BasicModal from 'src/components/common/Modals/index';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const emptyTelephones = {
  nro_telf: ''
};

const EditProvider = ({ modal, setModal }) => {
  const [update, setUpdate] = useState(false);
  const { updateProv, provincia, distrito, msgUpdate } = useSelector(
    (state) => state.provider
  );
  //const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProviderProvince(updateProv.proveedor.cod_dpt));
    dispatch(fetchProviderDistrict(updateProv.proveedor.cod_provi));
  }, [dispatch]);

  return (
    <>
      <BasicModal modal={modal} setModal={setModal} message={msgUpdate} />
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
              <CardHeader title="Actualizar Proveedor" />
              <Divider />
              <CardContent>
                <Formik
                  initialValues={{
                    cod_prov: updateProv.proveedor.cod_prov,
                    cod_t_per: updateProv.proveedor.cod_t_per,
                    razon_social: updateProv.proveedor.razon_social,
                    cod_t_doc: updateProv.proveedor.cod_t_doc,
                    nro_doc: updateProv.proveedor.nro_doc,
                    correo_per: updateProv.proveedor.correo_per,
                    dir_per: updateProv.proveedor.dir_per,
                    cod_dpt: updateProv.proveedor.cod_dpt,
                    cod_provi: updateProv.proveedor.cod_provi,
                    cod_dist: updateProv.proveedor.cod_dist,
                    dir_per: updateProv.proveedor.dir_per,
                    telephones: updateProv.telefonos.map((telephone) => {
                      return {
                        nro_telf: telephone.nro_telf
                      };
                    })
                  }}
                  validationSchema={validationProvider}
                  onSubmit={async (values, { resetForm }) => {
                    dispatch(saveUpdateProvider(values)).then(() => {
                      setModal(false);
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
                            {updateProv.tipo_persona?.map(
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
                        <Grid item xs={12} md={6}>
                          <TextField
                            id="razon_social"
                            label="Razón social"
                            fullWidth
                            type="search"
                            name="razon_social"
                            autoComplete="off"
                            value={values.razon_social}
                            onChange={handleChange}
                            error={
                              touched.razon_social &&
                              Boolean(errors.razon_social)
                            }
                            helperText={errors.razon_social}
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
                            {updateProv.tdoc_ide?.map((provider) => (
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
                        <Grid item xs={12} md={8}>
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
                              dispatch(fetchProviderProvince(value));
                              setFieldValue('cod_dpt', value);
                              setFieldValue('cod_provi', '');
                              setFieldValue('cod_provi', provincia);
                            }}
                          >
                            {updateProv.departamento?.map((provider) => (
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
                              dispatch(fetchProviderDistrict(value));
                              setFieldValue('cod_provi', value);
                              setFieldValue('cod_dist', '');
                              setFieldValue('cod_dist', distrito);
                            }}
                          >
                            {provincia?.map((provider) => (
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
                            {distrito?.map((provider) => (
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
                        <FieldArray name="telephones">
                          {({ push, remove }) => (
                            <>
                              <Grid item container spacing={2}>
                                <Grid item container spacing={2} xs={12}>
                                  <Grid item xs={12} md={3}>
                                    <Typography variant="h4">
                                      Telefonos
                                    </Typography>
                                  </Grid>

                                  <Grid item xs={12} md={3}>
                                    <Button
                                      disabled={isSubmitting}
                                      variant="contained"
                                      endIcon={<AddIcCallIcon />}
                                      color="secondary"
                                      size="large"
                                      onClick={() => push(emptyTelephones)}
                                    >
                                      Agregar
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                              {values.telephones.map((_, index) => (
                                <Grid container item key={index} spacing={2}>
                                  <Grid item container spacing={2} xs={12}>
                                    <Grid item xs={12} md={3}>
                                      <TextField
                                        type="search"
                                        label="Telefono o celular"
                                        fullWidth
                                        value={
                                          values.telephones[index].nro_telf
                                        }
                                        name={`telephones.${index}.nro_telf`}
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
                                {errors?.telephones?.length > 0 ? (
                                  <Typography color="error">
                                    {errors?.telephones?.map((error, index) => (
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
        <BasicModal />
      </Container>
    </>
  );
};

export default EditProvider;
