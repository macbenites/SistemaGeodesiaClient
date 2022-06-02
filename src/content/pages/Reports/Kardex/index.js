import {
  Container,
  Grid,
  CardHeader,
  Card,
  CardContent,
  Divider,
  TextField,
  MenuItem,
  Button
} from '@mui/material';
import { useEffect, useState } from 'react';
import BasicModal from 'src/components/common/Modals';
import {
  fetchKardex,
  fetchKardexArticle,
  postKardexReport
} from 'src/redux/slices/kardex/kardexSlice';
import { useDispatch, useSelector } from 'react-redux';
import TableKardex from 'src/redux/slices/kardex/tableKardex';

const Kardex = () => {
  const dispatch = useDispatch();
  const [kardex, setKardex] = useState({
    almacen: '',
    articulo: '',
    fec_ini: '',
    fec_fin: ''
  });
  const { almacen, articulo, kardexReport } = useSelector(
    (state) => state.kardex
  );
  const handleChange = (e) => {
    setKardex({
      ...kardex,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = () => {
    dispatch(postKardexReport(kardex)).then(() => {
      setKardex({
        almacen: '',
        articulo: '',
        fec_ini: '',
        fec_fin: ''
      });
    });
  };

  useEffect(() => {
    dispatch(fetchKardex());
    if (kardex.almacen !== '') {
      dispatch(fetchKardexArticle(kardex.almacen));
    }
  }, [dispatch, kardex.almacen]);
  console.log(kardexReport);
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
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Registrar Articulo" />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <TextField
                      select
                      label="Almacen"
                      name="almacen"
                      value={kardex.almacen}
                      fullWidth
                      onChange={handleChange}
                    >
                      {almacen.map((option) => (
                        <MenuItem
                          key={option.cod_almacen}
                          value={option.cod_almacen}
                        >
                          {option.des_almacen}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      id="articulo"
                      name="articulo"
                      select
                      label="Articulo"
                      value={kardex.articulo}
                      onChange={handleChange}
                      fullWidth
                    >
                      {articulo.map((option) => (
                        <MenuItem key={option.cod_art} value={option.cod_art}>
                          {option.articulo}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <TextField
                      id="fec_ini"
                      label="Fecha Inicio"
                      fullWidth
                      type="date"
                      name="fec_ini"
                      autoComplete="off"
                      InputLabelProps={{
                        shrink: true,
                        required: true
                      }}
                      value={kardex.fec_ini}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <TextField
                      id="fec_fin"
                      label="Fecha Fin"
                      fullWidth
                      type="date"
                      name="fec_fin"
                      autoComplete="off"
                      InputLabelProps={{
                        shrink: true,
                        required: true
                      }}
                      value={kardex.fec_fin}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={2} justifyContent={'right'}>
                    <Button
                      variant="contained"
                      fullWidth
                      color="primary"
                      type="submit"
                      size="large"
                      onClick={onSubmit}
                    >
                      Consultar
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
          mt={2}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Kardex" />
              <Divider />
              <TableKardex />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Kardex;