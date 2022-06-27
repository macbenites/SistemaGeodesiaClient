import {
  Container,
  Grid,
  Card,
  CardHeader,
  Divider,
  CardContent,
  Box,
  TextField,
  MenuItem,
  Button
} from '@mui/material';
import { DatePicker } from '@mui/lab';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FieldArray, useFormik, Field } from 'formik';
import TableSalida from './tableSalida';
import {
  fetchSuppliesCreateOut,
  addArticleOut,
  saveSuppliesOut,
  fetchArticlesSupplies,
  resetArticles
} from 'src/redux/slices/supplies/suppliesSlice';

const SalidaInsumos = () => {
  const dispatch = useDispatch();
  const { selectedSupplyOut, articlesSupplies } = useSelector(
    (state) => state.supplies
  );

  const [supplies, setSupplies] = useState({
    cod_solicitador: '',
    cod_autorizador: '',
    cod_almacen: '',
    cod_t_transf: '',
    cod_t_doc: '',
    nro_doc: '',
    fec_doc: '',
    cod_estado_reg: '1',
    cod_art: [],
    cant_art: [],
    obs_sal: []
  });

  const [articles, setArticles] = useState({
    cod_art: '',
    cant_art: '',
    obs_sal: ''
  });

  const handleChange = (event) => {
    event.target.name === 'cod_almacen' &&
      dispatch(fetchArticlesSupplies(event.target.value));

    setSupplies({
      ...supplies,
      [event.target.name]: event.target.value
    });
  };

  const handleChangeArticles = (event) => {
    setArticles({
      ...articles,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    dispatch(fetchSuppliesCreateOut());
  }, [dispatch]);

  const onReset = () => {
    setSupplies({
      cod_solicitador: '',
      cod_autorizador: '',
      cod_almacen: '',
      cod_t_transf: '',
      cod_t_doc: '',
      nro_doc: '',
      fec_doc: '',
      cod_estado_reg: '1',
      cod_art: [],
      cant_art: [],
      obs_sal: []
    });
  };
  const handleAddArticle = () => {
    setSupplies({
      ...supplies,
      cod_art: [...supplies.cod_art, articles.cod_art],
      cant_art: [...supplies.cant_art, articles.cant_art],
      obs_sal: [...supplies.obs_sal, articles.obs_sal]
    });

    dispatch(addArticleOut(articles));
    setArticles({
      cod_art: '',
      cant_art: '',
      obs_sal: ''
    });
  };

  const onSubmit = () => {
    dispatch(saveSuppliesOut(supplies)).then(() => {
      onReset();
      resetArticles();
    });
  };

  console.log(supplies);
  return (
    <>
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
              <CardHeader title="Registrar Salida de Insumo" />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      select
                      id="cod_solicitador"
                      label="Solicitador"
                      fullWidth
                      name="cod_solicitador"
                      value={supplies.cod_solicitador}
                      onChange={handleChange}
                    >
                      {selectedSupplyOut.solicitante?.map((supply) => (
                        <MenuItem
                          key={supply.cod_trabajador}
                          value={supply.cod_trabajador}
                        >
                          {supply.documento}
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
                      value={supplies.cod_almacen}
                      onChange={handleChange}
                    >
                      {selectedSupplyOut.almacen?.map((supply) => (
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
                      id="cod_autorizador"
                      label="Autorizador"
                      fullWidth
                      name="cod_autorizador"
                      value={supplies.cod_autorizador}
                      onChange={handleChange}
                    >
                      {selectedSupplyOut.autorizador?.map((supply) => (
                        <MenuItem
                          key={supply.cod_trabajador}
                          value={supply.cod_trabajador}
                        >
                          {supply.documento}
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
                      value={supplies.cod_t_transf}
                      onChange={handleChange}
                    >
                      {selectedSupplyOut.tipo_transf?.map((supply) => (
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
                      value={supplies.cod_t_doc}
                      onChange={handleChange}
                    >
                      {selectedSupplyOut.tipo_doc_reg?.map((supply) => (
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
                      value={supplies.nro_doc}
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} md={4}>
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
                      value={supplies.fec_doc}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
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
                </Grid>
              </CardContent>
              <Divider />
              {/* Articulos */}
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <TextField
                      select
                      id="cod_art"
                      label="Articulo"
                      fullWidth
                      name="cod_art"
                      value={articles.cod_art}
                      onChange={handleChangeArticles}
                    >
                      {articlesSupplies.map((supply) => (
                        <MenuItem key={supply.cod_art} value={supply.cod_art}>
                          {supply.articulo}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <TextField
                      type="number"
                      name="cant_art"
                      id="cant_art"
                      label="Cantidad"
                      fullWidth
                      value={articles.cant_art}
                      onChange={handleChangeArticles}
                      autoComplete="off"
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      type="search"
                      id="obs_sal"
                      label="Glosa"
                      fullWidth
                      name="obs_sal"
                      autoComplete="off"
                      value={articles.obs_sal}
                      onChange={handleChangeArticles}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button
                      variant="contained"
                      fullWidth
                      color="primary"
                      type="submit"
                      size="large"
                      onClick={handleAddArticle}
                    >
                      Agregar
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Card>
          <CardHeader title="Articulos" />
          <Divider />
          <TableSalida />
          <Grid container spacing={2} mt={4}>
            <Grid item xs={12} md={3}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                size="large"
                onClick={onSubmit}
              >
                Guardar
              </Button>
            </Grid>
            <Grid item xs={12} md={3}>
              <Button
                variant="outlined"
                fullWidth
                color="secondary"
                size="large"
                onClick={onReset}
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default SalidaInsumos;
