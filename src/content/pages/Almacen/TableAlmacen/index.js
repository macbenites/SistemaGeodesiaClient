import { Helmet } from 'react-helmet-async';
//import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import RecentOrders from './RecentOrders';
import PageHeader from 'src/components/common/Tables/TableHeader';
import { fetchAlmacenes } from 'src/redux/slices/almacenes/almacenSlice';

function ApplicationsTransactions() {
  return (
    <>
      <Helmet>
        <title>Almacenes</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          //Titule de cabecera
          title="Almacen"
          //funcion para buscar creadad en el slice de proveedor
          searchDispatch={fetchAlmacenes}
          //ruta del botón de cabecera que te lleva al registro de proveedor
          route={'/almacenes/registro-nuevo'}
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