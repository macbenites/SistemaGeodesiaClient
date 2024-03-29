import {
  Divider,
  Card,
  Grid,
  Button,
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
  fetchArticlesSupplies,
  fetchAuthorizerOut,
  fetchApplicantOut,
  saveUpdateSalida
} from 'src/redux/slices/supplies/suppliesSlice';

import { validationCheckoutForm } from 'src/utils/validation';
import BasicModal from 'src/components/common/Modals/index';

const emptyArticle = {
  cod_art: '',
  cant_art: '',
  obs_sal: ''
};

const EditSupply = ({ modal, setModal }) => {
  const [update, setUpdate] = useState(false);
  const {
    updateSupplyOut,
    articlesSupplies,
    selectApplicantOut,
    selectAuthorizerOut,
    msgUpdateOut
  } = useSelector((state) => state.supplies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchArticlesSupplies(updateSupplyOut.salida_cabecera.cod_almacen)
    );
    dispatch(fetchApplicantOut(updateSupplyOut.salida_cabecera.cod_almacen));
    dispatch(fetchAuthorizerOut(updateSupplyOut.salida_cabecera.cod_almacen));
  }, [dispatch]);

  return (
    <>
      <BasicModal modal={modal} setModal={setModal} message={msgUpdateOut} />
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
              <CardHeader title="Actualizar Salida de Insumos" />
              <Divider />
              <CardContent>
                <Formik
                  initialValues={{
                    cod_reg_sal: updateSupplyOut.salida_cabecera.cod_reg_sal,
                    cod_solicitador:
                      updateSupplyOut.salida_cabecera.cod_solicitador,
                    cod_autorizador:
                      updateSupplyOut.salida_cabecera.cod_autorizador,
                    cod_almacen: updateSupplyOut.salida_cabecera.cod_almacen,
                    cod_t_transf: updateSupplyOut.salida_cabecera.cod_t_transf,
                    cod_t_doc: updateSupplyOut.salida_cabecera.cod_t_doc,
                    nro_doc: updateSupplyOut.salida_cabecera.nro_doc,
                    fec_doc: updateSupplyOut.salida_cabecera.fec_doc,
                    articles: updateSupplyOut.salida_detalles.map((article) => {
                      return {
                        cod_art: article.cod_art,
                        cant_art: article.cant_art,
                        obs_sal: article.obs_sal,
                        stock_almacen: article.stock_almacen
                      };
                    })
                  }}
                  validationSchema={validationCheckoutForm}
                  onSubmit={async (values, { resetForm }) => {
                    dispatch(saveUpdateSalida(values)).then(() => {
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
                        <Grid item xs={12} md={4}>
                          <TextField
                            select
                            id="cod_almacen"
                            label="Almacén"
                            fullWidth
                            name="cod_almacen"
                            value={values.cod_almacen}
                            error={
                              touched.cod_almacen && Boolean(errors.cod_almacen)
                            }
                            helperText={errors.cod_almacen}
                          >
                            {updateSupplyOut.almacen?.map(
                              (supply) =>
                                supply.cod_almacen === values.cod_almacen && (
                                  <MenuItem
                                    key={supply.cod_almacen}
                                    value={supply.cod_almacen}
                                  >
                                    {supply.des_almacen}
                                  </MenuItem>
                                )
                            )}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            id="cod_solicitador" /* nombre */
                            label="Solicitador"
                            fullWidth
                            select
                            name="cod_solicitador" /* nombre */
                            value={values.cod_solicitador}
                            onChange={handleChange}
                            error={
                              touched.cod_solicitador &&
                              Boolean(errors.cod_solicitador)
                            }
                            helperText={errors.cod_solicitador}
                          >
                            {selectApplicantOut.solicitante?.map((supply) => (
                              <MenuItem
                                key={supply.cod_trabajador}
                                value={supply.cod_trabajador}
                              >
                                {supply.documento}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            id="cod_autorizador" /* nombre */
                            label="Autorizador"
                            fullWidth
                            select
                            name="cod_autorizador" /* nombre */
                            value={values.cod_autorizador}
                            onChange={handleChange}
                            error={
                              touched.cod_autorizador &&
                              Boolean(errors.cod_autorizador)
                            }
                            helperText={errors.cod_autorizador}
                          >
                            {selectAuthorizerOut.autorizador?.map((supply) => (
                              <MenuItem
                                key={supply.cod_trabajador}
                                value={supply.cod_trabajador}
                              >
                                {supply.documento}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <TextField
                            select
                            id="cod_t_transf"
                            label="Transferencia"
                            fullWidth
                            name="cod_t_transf"
                            value={values.cod_t_transf}
                            onChange={handleChange}
                            error={
                              touched.cod_t_transf &&
                              Boolean(errors.cod_t_transf)
                            }
                            helperText={errors.cod_t_transf}
                          >
                            {updateSupplyOut.tipo_transf?.map((supply) => (
                              <MenuItem
                                key={supply.cod_t_transf}
                                value={supply.cod_t_transf}
                              >
                                {supply.des_transf}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <TextField
                            select
                            id="cod_t_doc"
                            label="Tipo Documento"
                            fullWidth
                            name="cod_t_doc"
                            value={values.cod_t_doc}
                            onChange={handleChange}
                            error={
                              touched.cod_t_doc && Boolean(errors.cod_t_doc)
                            }
                            helperText={errors.cod_t_doc}
                          >
                            {updateSupplyOut.tipo_doc_reg?.map((supply) => (
                              <MenuItem
                                key={supply.cod_t_doc}
                                value={supply.cod_t_doc}
                              >
                                {supply.des_t_doc}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={3}>
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
                        <Grid item xs={12} md={3}>
                          <TextField
                            id="fec_doc"
                            label="Fecha Documento"
                            fullWidth
                            type="date"
                            name="fec_doc"
                            autoComplete="off"
                            InputLabelProps={{
                              shrink: true,
                              required: true
                            }}
                            value={values.fec_doc}
                            onChange={handleChange}
                            error={touched.fec_doc && Boolean(errors.fec_doc)}
                            helperText={errors.fec_doc}
                          />
                        </Grid>
                        <FieldArray name="articles">
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
                                      Articulos
                                    </Typography>
                                  </Grid>
                                  <Grid item>
                                    <Button
                                      variant="contained"
                                      color="secondary"
                                      size="large"
                                      onClick={() => push(emptyArticle)}
                                    >
                                      Agregar
                                    </Button>
                                  </Grid>
                                </Grid>
                              </Grid>
                              {values.articles.map((_, index) => (
                                <Grid container item key={index} spacing={2}>
                                  <Grid item xs={12} md={3}>
                                    <TextField
                                      select
                                      id="cod_art"
                                      label="Articulo"
                                      fullWidth
                                      name={`articles.${index}.cod_art`}
                                      value={values.articles[index].cod_art}
                                      onChange={async (e) => {
                                        const { value } = e.target;
                                        setFieldValue(
                                          `articles.${index}.cod_art`,
                                          value
                                        );
                                        setFieldValue(
                                          `articles.${index}.stock_almacen`,
                                          articlesSupplies.filter(
                                            (article) =>
                                              article.cod_art === value
                                          )[0].stock_almacen
                                        );
                                      }}
                                    >
                                      {articlesSupplies.map((supply) => (
                                        <MenuItem
                                          key={supply.cod_art}
                                          value={supply.cod_art}
                                        >
                                          {supply.articulo}
                                        </MenuItem>
                                      ))}
                                    </TextField>
                                  </Grid>
                                  <Grid item xs={12} md={2}>
                                    <TextField
                                      type="number"
                                      id="cant_art"
                                      label="Cantidad"
                                      fullWidth
                                      name={`articles.${index}.cant_art`}
                                      value={values.articles[index].cant_art}
                                      onChange={handleChange}
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={3}>
                                    <TextField
                                      type="search"
                                      id="obs_sal"
                                      label="Glosa"
                                      fullWidth
                                      name={`articles.${index}.obs_sal`}
                                      value={values.articles[index].obs_sal}
                                      onChange={handleChange}
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={2}>
                                    <TextField
                                      id="stock_almacen"
                                      name={`articles.${index}.stock_almacen`}
                                      value={
                                        values.articles[index].cod_art
                                          ? values.articles[index]
                                              .stock_almacen +
                                            parseInt(
                                              values.articles[index].cant_art
                                            )
                                          : 0
                                      }
                                      label="Stock"
                                      fullWidth
                                    />
                                  </Grid>
                                  <Grid item xs={12} md={2}>
                                    <Button
                                      disabled={
                                        values.articles.length === 1
                                          ? true
                                          : false
                                      }
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
                              ))}
                              <Grid item xs={12} md={12}>
                                {errors?.articles?.length > 0 ? (
                                  <Typography color="error">
                                    {errors?.articles?.map((error, index) => (
                                      <List key={index}>
                                        {error !== null && (
                                          <>
                                            {error?.cod_art && (
                                              <li>
                                                {`Articulo ${index + 1} : `}{' '}
                                                {error.cod_art}
                                              </li>
                                            )}
                                            {error?.cant_art && (
                                              <li>
                                                {`Articulo ${index + 1} : `}{' '}
                                                {error.cant_art}
                                              </li>
                                            )}
                                            {error?.obs_sal && (
                                              <li>
                                                {`Articulo ${index + 1} : `}{' '}
                                                {error.obs_sal}
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
export default EditSupply;
