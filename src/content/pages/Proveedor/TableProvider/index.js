import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import PageHeader from 'src/components/common/Tables/TableHeader';
import RecentOrders from './RecentOrders';
import { fetchProviders } from 'src/redux/slices/providers/providerSlice';

function ApplicationsTransactions() {
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
        />
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
