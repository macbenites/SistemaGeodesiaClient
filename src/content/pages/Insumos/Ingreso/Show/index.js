import {
    Divider,
    Card,
    Grid,
    Container,
    CardContent,
    TextField,
    CardHeader
  } from '@mui/material';
  import { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  
  import {} from 'src/redux/slices/supplies/suppliesSlice';

  const ShowSupplyIn = () => {
    const { supplyIn } = useSelector((state) => state.supplies);
    return (
      <>
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
                <CardHeader title="Registro de ingreso" />
                <Divider />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <TextField
                        id="des_almacen"
                        label="Almacen"
                        variant="standard"
                        fullWidth
                        value={supplyIn?.cabecera?.des_almacen}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="trabajador"
                        label="Trabajador"
                        variant="standard"
                        fullWidth
                        value={supplyIn?.cabecera?.trabajador}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="proveedor"
                        label="Proveedor"
                        variant="standard"
                        fullWidth
                        value={supplyIn?.cabecera?.proveedor}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="des_transf"
                        label="Motivo"
                        variant="standard"
                        fullWidth
                        value={supplyIn?.cabecera?.des_transf}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="des_t_doc"
                        label="Documento"
                        variant="standard"
                        fullWidth
                        value={supplyIn?.cabecera?.des_t_doc}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="nro_doc"
                        label="Nro. Documento"
                        variant="standard"
                        fullWidth
                        value={supplyIn?.cabecera?.nro_doc}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="fec_doc"
                        label="Fecha Documento"
                        variant="standard"
                        fullWidth
                        value={supplyIn?.cabecera?.fec_doc}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="fec_ing"
                        label="Fecha Ingreso"
                        variant="standard"
                        fullWidth
                        value={supplyIn?.cabecera?.fec_ing}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}></Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="tot_pagar"
                        label="Valor total"
                        variant="standard"
                        fullWidth
                        value={" S/. " +supplyIn?.tot_pagar}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>Detalles: </Grid>
                    {supplyIn?.detalles?.map((detalle, index) => (
                      <>
                      <Grid item xs={12} md={2}>
                            <TextField
                                id="cod_art"
                                label="Cod. Art."
                                variant="standard"
                                fullWidth
                                value={detalle.cod_art} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                                <TextField
                                    id="des_art"
                                    label="Articulo"
                                    variant="standard"
                                    fullWidth
                                    value={detalle.des_art +" / " + detalle.des_unid_med } />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField
                                id="prec_unit"
                                label="P. unit."
                                variant="standard"
                                fullWidth
                                value={detalle.prec_unit} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <TextField
                                id="cant_art"
                                label="Cantidad"
                                variant="standard"
                                fullWidth
                                value={detalle.cant_art} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <TextField
                                id="prec_compr"
                                label="P. compra"
                                variant="standard"
                                fullWidth
                                value={detalle.prec_compr} />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextField
                                id="obs_ing"
                                label="Observacion"
                                variant="standard"
                                fullWidth
                                value={detalle.obs_ing} />
                        </Grid>
                        <Grid item xs={12} md={12}><hr></hr></Grid>
                        </>
                      
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  };
  export default ShowSupplyIn;
  