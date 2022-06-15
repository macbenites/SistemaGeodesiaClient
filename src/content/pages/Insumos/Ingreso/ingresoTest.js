import {
  Container,
  Grid,
  Card,
  CardHeader,
  Divider,
  CardContent,
  Typography,
  TextField,
  CircularProgress,
  MenuItem,
  Button,
  List
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FieldArray, Form, Field, Formik } from 'formik';
import {
  fetchSuppliesCreate,
  saveSupplies
} from 'src/redux/slices/supplies/suppliesSlice';
import { validationSupplies } from 'src/utils/validation';
import BasicModal from 'src/components/common/Modals';

const emptyArticles = {
  cod_art: '',
  prec_unit: '',
  cant_art: '',
  prec_compr: '',
  obs_ing: ''
};

const IngresoTest = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const { selectedSupply, created } = useSelector((state) => state.supplies);

  useEffect(() => {
    dispatch(fetchSuppliesCreate());
  }, [dispatch]);

  return (
    <>
      <BasicModal modal={modal} setModal={setModal} message={created} />
      <Container maxWidth="lg">
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
              <CardHeader title="Registrar Insumo" />
              <Divider />
              <CardContent>
                <Formik
                  initialValues={{
                    cod_prov: '',
                    cod_trabajador: '',
                    cod_almacen: '',
                    cod_t_transf: '',
                    cod_t_doc: '',
                    nro_doc: '',
                    fec_doc: '',
                    cod_estado_reg: '1',
                    tot_pagar: '100.00',
                    articles: [emptyArticles]
                  }}
                  validationSchema={validationSupplies}
                  onSubmit={async (values, { resetForm }) => {
                    dispatch(saveSupplies(values)).then(() => {
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
                        <Grid item xs={12} md={4}>
                          <TextField
                            select
                            id="cod_prov"
                            label="Proveedor"
                            fullWidth
                            name="cod_prov"
                            value={values.cod_prov}
                            onChange={handleChange}
                            error={touched.cod_prov && Boolean(errors.cod_prov)}
                            helperText={errors.cod_prov}
                          >
                            {selectedSupply.proveedor?.map((supply) => (
                              <MenuItem
                                key={supply.cod_prov}
                                value={supply.cod_prov}
                              >
                                {supply.proveedor}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={5}>
                          <TextField
                            select
                            id="cod_almacen"
                            label="Almacén"
                            fullWidth
                            name="cod_almacen"
                            value={values.cod_almacen}
                            onChange={handleChange}
                            error={
                              touched.cod_almacen && Boolean(errors.cod_almacen)
                            }
                            helperText={errors.cod_almacen}
                          >
                            {selectedSupply.almacen?.map((supply) => (
                              <MenuItem
                                key={supply.cod_almacen}
                                value={supply.cod_almacen}
                              >
                                {supply.des_almacen}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <TextField
                            select
                            id="cod_trabajador"
                            label="Trabajador"
                            fullWidth
                            name="cod_trabajador"
                            value={values.cod_trabajador}
                            onChange={handleChange}
                            error={
                              touched.cod_trabajador &&
                              Boolean(errors.cod_trabajador)
                            }
                            helperText={errors.cod_trabajador}
                          >
                            {selectedSupply.trabajador?.map((supply) => (
                              <MenuItem
                                key={supply.cod_trabajador}
                                value={supply.cod_trabajador}
                              >
                                {supply.trabajador}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        {/* //Block 2 */}
                        <Grid item xs={12} md={4}>
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
                            {selectedSupply.tipo_transf?.map((supply) => (
                              <MenuItem
                                key={supply.cod_t_transf}
                                value={supply.cod_t_transf}
                              >
                                {supply.des_transf}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid item xs={12} md={4}>
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
                            {selectedSupply.tipo_doc_reg?.map((supply) => (
                              <MenuItem
                                key={supply.cod_t_doc}
                                value={supply.cod_t_doc}
                              >
                                {supply.des_t_doc}
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
                        <Grid item xs={12} md={4}>
                          <TextField
                            id="fecha_ingreso"
                            label="Fecha Ingreso"
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
                            helperText={errors.fec_doc}
                            error={touched.fec_doc && Boolean(errors.fec_doc)}
                          />
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <TextField
                            id="cod_cat"
                            label="Estado"
                            value="Activo"
                            fullWidth
                            type="search"
                            name="cod_cat"
                            autoComplete="off"
                          />
                        </Grid>
                        <FieldArray name="articles">
                          {({ push, remove }) => (
                            <>
                              <Grid
                                item
                                xs={12}
                                md={6}
                                justifyContent="center"
                                alignItems="center"
                              >
                                <Typography variant="h4">Articulos</Typography>
                              </Grid>
                              <Grid
                                item
                                xs={12}
                                md={6}
                                style={{
                                  display: 'flex',
                                  justifyContent: 'flex-end'
                                }}
                              >
                                <Button
                                  disabled={isSubmitting}
                                  variant="contained"
                                  size="large"
                                  onClick={() => push(emptyArticles)}
                                >
                                  Agregar Articulo
                                </Button>
                              </Grid>
                              {values.articles.map((_, index) => (
                                <Grid container item key={index} spacing={2}>
                                  <Grid item container spacing={2} xs={12}>
                                    <Grid item xs={12} md={3}>
                                      <TextField
                                        select
                                        label="Articulo"
                                        value={values.articles[index].cod_art}
                                        name={`articles.${index}.cod_art`}
                                        onChange={handleChange}
                                        fullWidth
                                      >
                                        {selectedSupply.articulo?.map(
                                          (supply) => (
                                            <MenuItem
                                              key={supply.cod_art}
                                              value={supply.cod_art}
                                            >
                                              {supply.articulo}
                                            </MenuItem>
                                          )
                                        )}
                                      </TextField>
                                    </Grid>
                                    <Grid item xs={12} md={3}>
                                      <TextField
                                        type="search"
                                        label="Glosa"
                                        fullWidth
                                        value={values.articles[index].obs_ing}
                                        name={`articles.${index}.obs_ing`}
                                        onChange={handleChange}
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={2}>
                                      <TextField
                                        type="number"
                                        value={values.articles[index].prec_unit}
                                        name={`articles.${index}.prec_unit`}
                                        label="Precio"
                                        fullWidth
                                        onChange={handleChange}
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={1}>
                                      <TextField
                                        type="number"
                                        value={values.articles[index].cant_art}
                                        name={`articles.${index}.cant_art`}
                                        label="Cantidad"
                                        fullWidth
                                        onChange={handleChange}
                                      />
                                    </Grid>
                                    <Grid item xs={12} md={1}>
                                      <TextField
                                        type="number"
                                        id="prec_compr"
                                        value={
                                          values.articles[index].prec_compr
                                        }
                                        label="Precio Compra"
                                        fullWidth
                                        name={`articles.${index}.prec_compr`}
                                        // onChange={(event) => {
                                        //   const precio =
                                        //     event.target.value *
                                        //     values.articles[index].cant_art;
                                        //   setFieldValue(
                                        //     `articles.${index}.prec_compr`,
                                        //     precio
                                        //   );
                                        // }}
                                      />
                                    </Grid>

                                    <Grid item xs={12} md={2}>
                                      <Button
                                        disabled={isSubmitting}
                                        onClick={() => remove(index)}
                                        variant="contained"
                                        size="large"
                                        color="error"
                                        fullWidth
                                      >
                                        Delete
                                      </Button>
                                    </Grid>
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
                                            {error?.cant_art && (
                                              <li>
                                                {`Articulo ${index + 1} : `}{' '}
                                                {error.cant_art}
                                              </li>
                                            )}
                                            {error?.cod_art && (
                                              <li>
                                                {`Articulo ${index + 1} : `}{' '}
                                                {error.cod_art}
                                              </li>
                                            )}
                                            {error?.prec_unit && (
                                              <li>
                                                {`Articulo ${index + 1} : `}{' '}
                                                {error.prec_unit}
                                              </li>
                                            )}
                                            {error?.prec_compr && (
                                              <li>
                                                {`Articulo ${index + 1} : `}{' '}
                                                {error.prec_compr}
                                              </li>
                                            )}
                                            {error?.obs_ing && (
                                              <li>
                                                {`Articulo ${index + 1} : `}{' '}
                                                {error.obs_ing}
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
                        {/* <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
                        <Grid item xs={12} md={12}>
                          <Button
                            disabled={isSubmitting}
                            type="submit"
                            variant="contained"
                            color="success"
                            size="large"
                            startIcon={
                              isSubmitting ? (
                                <CircularProgress size="0.9rem" />
                              ) : undefined
                            }
                          >
                            {isSubmitting ? 'Registrando' : 'Registrar'}
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

export default IngresoTest;
