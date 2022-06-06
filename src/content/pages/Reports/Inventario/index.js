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
}from '@mui/material';
import { useEffect, useState } from 'react';
import BasicModal from 'src/components/common/Modals';
import {
  fetchInventario,
  fetchInventarioReporte  

} from 'src/redux/slices/Inventario/InventarioSlice';
import { useDispatch, useSelector } from 'react-redux';
import TableInventario from 'src/redux/slices/Inventario/tableInventario';

const Inventario = () =>{

  const dispatch = useDispatch();
  const[Inventario, setInventario] = useState({
    almacen: ''
  });
  const { almacen, InventarioReport } = useSelector(
    (state) => state.Inventario
  );
  const handleChange = (e) => {
    setInventario({
      ...Inventario,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    dispatch(fetchInventario());
   
  }, [dispatch]);
  const getcomponent = () =>{
    dispatch(fetchInventarioReporte(Inventario.almacen))
  }
  console.log(InventarioReport);
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
              <CardHeader title="Registrar Inventario" />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <TextField
                      select
                      label="Almacen"
                      name="almacen"
                      value={Inventario.almacen}
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
                  </Grid>
                  <Grid item xs={12} md={2} justifyContent={'right'}>
                    <Button
                      variant="contained"
                      fullWidth
                      color="primary"
                      type="submit"
                      size="large"
                      onClick={getcomponent}
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
              <CardHeader title="Inventario" />
              <Divider />
              <TableInventario />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
  
export default Inventario;