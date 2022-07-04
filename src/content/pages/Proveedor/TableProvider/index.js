import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid, Button } from '@mui/material';
import Footer from 'src/components/Footer';
import PageHeader from 'src/components/common/Tables/TableHeader';
import RecentOrders from './RecentOrders';
import { fetchProviders } from 'src/redux/slices/providers/providerSlice';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import { useNavigate } from 'react-router';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

function ApplicationsTransactions() {
  const [user, setUser] = useLocalStorage('user');
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Proveedores</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          //Titule de cabecera
          title="Proveedor"
          //funcion para buscar creadad en el slice de proveedor
          searchDispatch={fetchProviders}
          //ruta del botón de cabecera que te lleva al registro de proveedor
          route={'/proveedor/registro-nuevo'}
          //Propiedad para mostrar el botón de registro de proveedor
          buttonShow={
            user.permisos.find((auth) => auth.name === 'registrar-proveedores')
              ? true
              : false
          }
        />
        <Grid item>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            endIcon={<AutoDeleteIcon fontSize="small" />}
            onClick={() => navigate(`/proveedor/registro-deshabilitados`)}
          >
            Proveedores deshabilitados
          </Button>
        </Grid>
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <RecentOrders />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ApplicationsTransactions;
