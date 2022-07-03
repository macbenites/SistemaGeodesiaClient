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

  const ShowSupplyOut = () => {
    const { supplyOut } = useSelector((state) => state.supplies);
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
                <CardHeader title="Registro de Salida" />
                <Divider />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <TextField
                        id="des_almacen"
                        label="Almacen"
                        variant="standard"
                        fullWidth
                        value={supplyOut?.cabecera?.des_almacen}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="solicitador"
                        label="Solicita"
                        variant="standard"
                        fullWidth
                        value={supplyOut?.cabecera?.solicitador}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        id="autorizador"
                        label="Autoriza"
                        variant="standard"
                        fullWidth
                        value={supplyOut?.cabecera?.autorizador}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="des_transf"
                        label="Motivo"
                        variant="standard"
                        fullWidth
                        value={supplyOut?.cabecera?.des_transf}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="des_t_doc"
                        label="Documento"
                        variant="standard"
                        fullWidth
                        value={supplyOut?.cabecera?.des_t_doc}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="nro_doc"
                        label="Nro. Documento"
                        variant="standard"
                        fullWidth
                        value={supplyOut?.cabecera?.nro_doc}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <TextField
                        id="fec_doc"
                        label="Fecha Documento"
                        variant="standard"
                        fullWidth
                        value={supplyOut?.cabecera?.fec_doc}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="fec_ing"
                        label="Fecha Salida"
                        variant="standard"
                        fullWidth
                        value={supplyOut?.cabecera?.fec_sal}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}></Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="tot_pagar"
                        label="Valor total"
                        variant="standard"
                        fullWidth
                        value={" S/. " +supplyOut?.cabecera?.tot_pagar}
                      />
                    </Grid>
                    <Grid item xs={12} md={12}>Detalles: </Grid>
                    {supplyOut?.detalles?.map((detalle, index) => (
                      <>
                      <Grid item xs={12} md={2}>
                            <TextField
                                id="cod_art"
                                label="Cod. Art."
                                variant="standard"
                                fullWidth
                                value={detalle?.cod_art} />
                        </Grid>
                        <Grid item xs={12} md={5}>
                                <TextField
                                    id="des_art"
                                    label="Articulo"
                                    variant="standard"
                                    fullWidth
                                    value={detalle?.des_art +" / " + detalle.des_unid_med } />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <TextField
                                id="prec_unit"
                                label="P. unit."
                                variant="standard"
                                fullWidth
                                value={detalle?.prec_sal} />
                        </Grid>
                        <Grid item xs={12} md={1}>
                            <TextField
                                id="cant_art"
                                label="Cantidad"
                                variant="standard"
                                fullWidth
                                value={detalle?.cant_art} />
                        </Grid>
                        <Grid item xs={12} md={2}>
                            <TextField
                                id="prec_compr"
                                label="P. compra"
                                variant="standard"
                                fullWidth
                                value={detalle?.prec_total_sal} />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                id="obs_ing"
                                label="Observacion"
                                variant="standard"
                                fullWidth
                                value={detalle?.obs_sal} />
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
  export default ShowSupplyOut;
  