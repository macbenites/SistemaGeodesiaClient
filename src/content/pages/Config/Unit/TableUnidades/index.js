import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import PageHeader from 'src/components/common/Tables/TableHeader';
import RecentOrders from './RecentOrders';
import { fetchUnits } from 'src/redux/slices/config/configSlice';

function ApplicationsTransactions() {
  return (
    <>
      <Helmet>
        <title>Unidades de medida</title>
      </Helmet>
      <PageTitleWrapper>
      <PageHeader
          //Titule de cabecera
          title="Unidad de medida"
          //funcion para buscar creadad en el slice de proveedor
          searchDispatch={fetchUnits}
          //ruta del botón de cabecera que te lleva al registro de proveedor
          route={'/config/unidadmedida-registrar'}
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