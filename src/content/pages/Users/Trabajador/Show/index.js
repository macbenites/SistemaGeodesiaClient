import {
  Divider,
  Card,
  Grid,
  Container,
  CardContent,
  TextField,
  CardHeader,
  Button
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {} from 'src/redux/slices/users/userSlice';

const ShowEmployee = () => {
  const { showUser } = useSelector((state) => state.users);
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
            <CardHeader title="Trajador" />
            <Divider />
            <CardContent>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="stretch"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    href="/usuarios/roles"
                  >
                    Asiganar Roles
                  </Button>
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    id="des_t_per"
                    label="Tipo de persona"
                    variant="standard"
                    fullWidth
                    value={showUser.trabajador.des_t_per}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="nom_per"
                    label="Nombres"
                    variant="standard"
                    fullWidth
                    value={showUser.trabajador.nom_per}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="ape_pat_per"
                    label="Apellido Paterno"
                    variant="standard"
                    fullWidth
                    value={showUser.trabajador.ape_pat_per}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="ape_mat_per"
                    label="Apellido Materno"
                    variant="standard"
                    fullWidth
                    value={showUser.trabajador.ape_mat_per}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="dest_doc"
                    label="Tipo Documento"
                    variant="standard"
                    fullWidth
                    value={showUser.trabajador.dest_doc}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="nro_doc"
                    label="Nro. Documento"
                    variant="standard"
                    fullWidth
                    value={showUser.trabajador.nro_doc}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="correo_per"
                    label="Correo"
                    variant="standard"
                    fullWidth
                    value={showUser.trabajador.correo_per}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="des_dpt"
                    label="Departamento"
                    variant="standard"
                    fullWidth
                    value={showUser.trabajador.des_dpt}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="des_provi"
                    label="Provincia"
                    variant="standard"
                    fullWidth
                    value={showUser.trabajador.des_provi}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="des_distrito"
                    label="Distrito"
                    variant="standard"
                    fullWidth
                    value={showUser.trabajador.des_distrito}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="direccion_per"
                    label="Dirección"
                    variant="standard"
                    fullWidth
                    value={showUser.trabajador.dir_per}
                  />
                </Grid>
                {showUser?.telefono?.map((telefono, index) => (
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default ShowEmployee;
