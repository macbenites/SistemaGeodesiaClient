import { Helmet } from 'react-helmet-async';
//import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid, Button } from '@mui/material';
import Footer from 'src/components/Footer';
import RecentOrders from './RecentOrders';
import PageHeaderDeleted from 'src/components/common/Tables/TableHeaderDeleted';/*** */
import { fetchTransferenciasDeleted } from 'src/redux/slices/config/configSlice';
import GoBackButton from 'src/components/common/Buttons/goBack';

function ApplicationsTransactions() {
  return (
    <>
          <GoBackButton linkRoute="config/tipotransferencia" />
      <Helmet>
        <title>Tipos de transferencias deshabilitados</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeaderDeleted
          //Titule de cabecera
          title="Tipos de transferencias deshabilitados"
          //funcion para buscar creadad en el slice de proveedor
          searchDispatch={fetchTransferenciasDeleted}
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