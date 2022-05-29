import {
  Container,
  Grid,
  CardHeader,
  Card,
  CardContent,
  Divider,
  TextField,
  MenuItem
} from '@mui/material';
import { useEffect, useState } from 'react';
import BasicModal from 'src/components/common/Modals';
import {
  fetchKardex,
  fetchKardexArticle,
  postKardex
} from 'src/redux/slices/kardex/kardexSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { validationKardex } from 'src/utils/validation';
const Kardex = () => {
  const dispatch = useDispatch();
  const [kardex, setKardex] = useState({
    almacen: '',
    articulo: '',
    fec_ini: '',
    fec_fin: ''
  });
  const { almacen, articulo } = useSelector((state) => state.kardex);
  const handleChange = (e) => {
    setKardex({
      ...kardex,
      [e.target.name]: e.target.value
    });
  };
  useEffect(() => {
    dispatch(fetchKardex());
    if (kardex.almacen !== '') {
      dispatch(fetchKardexArticle(kardex.almacen));
    }
  }, [dispatch, kardex.almacen]);

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
                <form>
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
                        fullWidth
                      >
                        {articulo.map((option) => (
                          <MenuItem key={option.cod_art} value={option.cod_art}>
                            {option.articulo}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="fecha_ingreso"
                        label="Fecha Inicio"
                        fullWidth
                        type="date"
                        name="fec_doc"
                        autoComplete="off"
                        InputLabelProps={{
                          shrink: true,
                          required: true
                        }}
                        // value={supplies.fec_doc}
                        // onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="fecha_ingreso"
                        label="Fecha Fin"
                        fullWidth
                        type="date"
                        name="fec_doc"
                        autoComplete="off"
                        InputLabelProps={{
                          shrink: true,
                          required: true
                        }}
                        // value={supplies.fec_doc}
                        // onChange={handleChange}
                      />
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Kardex;
