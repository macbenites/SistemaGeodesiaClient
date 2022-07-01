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
  
  import {} from 'src/redux/slices/providers/providerSlice';

  const ShowProveedor = () => {
    const { verProveedor } = useSelector((state) => state.provider);
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
                  <CardHeader title="Proveedor" />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={4}>
                        <TextField
                          id="des_t_per"
                          label="Tipo de persona"
                          variant="standard"
                          fullWidth
                          value={verProveedor?.proveedor?.des_t_per}
                        />
                      </Grid>
                      <Grid item xs={12} md={8}>
                        <TextField
                          id="proveedor"
                          label="Razon Social"
                          variant="standard"
                          fullWidth
                          value={verProveedor?.proveedor?.proveedor}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField
                          id="dest_doc"
                          label="Tipo documento"
                          variant="standard"
                          fullWidth
                          value={verProveedor?.proveedor?.dest_doc}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField
                          id="nro_doc"
                          label="Nro. Documento"
                          variant="standard"
                          fullWidth
                          value={verProveedor?.proveedor?.nro_doc}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField
                          id="correo_per"
                          label="Correo"
                          variant="standard"
                          fullWidth
                          value={verProveedor?.proveedor?.correo_per}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField
                          id="des_dpt"
                          label="Departamento"
                          variant="standard"
                          fullWidth
                          value={verProveedor?.proveedor?.des_dpt}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField
                          id="des_provi"
                          label="Provincia"
                          variant="standard"
                          fullWidth
                          value={verProveedor?.proveedor?.des_provi}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <TextField
                          id="des_distrito"
                          label="Distrito"
                          variant="standard"
                          fullWidth
                          value={verProveedor?.proveedor?.des_distrito}
                        />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField
                          id="dir_per"
                          label="Dirección"
                          variant="standard"
                          fullWidth
                          value={verProveedor?.proveedor?.dir_per}
                        />
                      </Grid>
                       {verProveedor?.telefonos?.map((telefono, index) => (
                        <Grid item xs={12} md={4}>
                          <TextField
                            id="nro_tel"
                            label={`Telefono ${index + 1}`}
                            variant="standard"
                            fullWidth
                            value={telefono.nro_telf}
                          />
                        </Grid>
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
    export default ShowProveedor;