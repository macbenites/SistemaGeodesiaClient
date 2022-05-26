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
import {
  fetchSuppliesCreateOut,
  addArticle,
  saveSupplies
} from 'src/redux/slices/supplies/suppliesSlice';
//import TableIngreso from './tableIngreso';
const SalidaInsumos = () => {
  const dispatch = useDispatch();
  const { selectedSupplyOut } = useSelector((state) => state.supplies);

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

  const handleAddArticle = () => {
    setSupplies({
      ...supplies,
      cod_art: [...supplies.cod_art, articles.cod_art],
      cant_art: [...supplies.cant_art, articles.cant_art],
      obs_sal: [...supplies.obs_ing, articles.obs_sal]
    });

    dispatch(addArticle(articles));
    setArticles({
      cod_art: '',
      cant_art: '',
      obs_sal: ''
    });
  };

  const onSubmit = () => {
    dispatch(saveSupplies(supplies));
  };

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
                          key={supply.cod_autorizador}
                          value={supply.cod_autorizador}
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
                  {/* //Block 3 */}
                  {/* <Grid item xs={12} md={4}>
                      <DatePicker
                        label="Fecha Documento"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth />
                        )}
                      />
                    </Grid> */}
                  <Grid item xs={12} md={4}>
                    {/* <DatePicker
                        label="Fecha Ingreso"
                        inputFormat="MM/dd/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => (
                          <TextField {...params} fullWidth />
                        )}
                      /> */}
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
                      {selectedSupplyOut.articulo?.map((supply) => (
                        <MenuItem key={supply.cod_art} value={supply.cod_art}>
                          {supply.articulo}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <TextField
                      type="number"
                      name="prec_unit"
                      label="Precio"
                      fullWidth
                      values={articles.prec_unit}
                      onChange={handleChangeArticles}
                      autoComplete="off"
                    />
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
                  <Grid item xs={12} md={2}>
                    <TextField
                      type="number"
                      id="prec_compr"
                      label="Precio Compra"
                      fullWidth
                      name="prec_compr"
                      autoComplete="off"
                      value={articles.prec_compr}
                      onChange={handleChangeArticles}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      type="search"
                      id="obs_ing"
                      label="Glosa"
                      fullWidth
                      name="obs_ing"
                      autoComplete="off"
                      value={articles.obs_ing}
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
          {/* <TableIngreso /> */}
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
                onClick={handleAddArticle}
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
