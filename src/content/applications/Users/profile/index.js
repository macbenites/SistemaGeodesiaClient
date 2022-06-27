import {
  Container,
  Grid,
  Card,
  CardHeader,
  Divider,
  CardContent,
  Box,
  Button
} from '@mui/material';
import {
  getProfile
} from 'src/redux/slices/users/userSlice';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import BasicModal from 'src/components/common/Modals';

const ShowPerfil = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]); 

  return (
    <>
      <Grid item xs={12}>
          <Card>
            <CardHeader title="Mi perfil" />
            <Divider />
            <CardContent>
              {/* <form onSubmit={formik.handleSubmit}> */}
                <Grid container spacing={2}>
                  <Grid item xs={12} md={9}>
                    <FormLabel component="" sx={{ fontWeight: 'bold' }}>
                      Nombre(s): {'\u00A0'}
                    </FormLabel>
                    <FormLabel component="" sx={{}}>
                       {profile?.perfil?.nom_per}
                    </FormLabel>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <FormLabel component="" sx={{ fontWeight: 'bold' }}>
                      Apellidos: {'\u00A0'}
                    </FormLabel>
                    <FormLabel component="" sx={{}}>
                       {profile?.perfil?.ape_pat_per} {profile?.perfil?.ape_mat_per}
                    </FormLabel>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <FormLabel component="" sx={{ fontWeight: 'bold' }}>
                      {profile?.perfil?.dest_doc}: {'\u00A0'}
                    </FormLabel>
                    <FormLabel component="" sx={{}}>
                      {profile?.perfil?.nro_doc}
                    </FormLabel>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <FormLabel component="" sx={{ fontWeight: 'bold' }}>
                      Correo: {'\u00A0'}
                    </FormLabel>
                    <FormLabel component="" sx={{}}>
                      {profile?.perfil?.correo_per}
                    </FormLabel>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <FormLabel component="" sx={{ fontWeight: 'bold' }}>
                      Direccion: {'\u00A0'}
                    </FormLabel>
                    <FormLabel component="" sx={{}}>
                      {profile?.perfil?.des_dpt}, {profile?.perfil?.des_provi}, {profile?.perfil?.des_distrito}, {profile?.perfil?.dir_per} 
                    </FormLabel>
                  </Grid>

                  <Grid item xs={12} md={3}>
                    <Button
                      variant="contained"
                      fullWidth
                      color="primary"
                      type="submit"
                      size="large"
                    >
                      Cambiar contraseña
                    </Button>
                  </Grid>
                  
                </Grid>
              {/* </form> */}
            </CardContent>
          </Card>
      </Grid>
    </>
  );
};

export default ShowPerfil;

// import { Helmet } from 'react-helmet-async';
// import Footer from 'src/components/Footer';

// import { Container, Grid } from '@mui/material';

// function ManagementUserProfile() {
//   return (
//     <>
//       <Helmet>
//         <title>Usuario - Perfil</title>
//       </Helmet>
//       <Container sx={{ mt: 3 }} maxWidth="lg">
//         <Grid
//           container
//           direction="row"
//           justifyContent="center"
//           alignItems="stretch"
//           spacing={3}
//         >
//           <Grid item xs={12} md={8}>
//             Mi perfil
//           </Grid>
//         </Grid>
//       </Container>
//       <Footer />
//     </>
//   );
// }

// export default ManagementUserProfile;









// <Grid item xs={12}>
//             <Card>
//               <CardHeader title="Letters" />
//               <Divider />
//               <CardContent>
//                 <Stack direction="row" spacing={2}>
//                   <Avatar>H</Avatar>
//                   <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
//                   <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
//                 </Stack>
//                 <Divider sx={{ my: 5 }} />
//                 <Stack direction="row" spacing={2}>
//                   <Avatar {...stringAvatar('Kent Dodds')} />
//                   <Avatar {...stringAvatar('Jed Watson')} />
//                   <Avatar {...stringAvatar('Tim Neutkens')} />
//                 </Stack>
//               </CardContent>
//             </Card>
//           </Grid>
