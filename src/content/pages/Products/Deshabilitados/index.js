import { Helmet } from 'react-helmet-async';
//import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid, Button } from '@mui/material';
import Footer from 'src/components/Footer';
import RecentOrders from './RecentOrders';
import PageHeaderDeleted from 'src/components/common/Tables/TableHeaderDeleted';/*** */
import { fetchArticlesDeleted } from 'src/redux/slices/articles/articleSlice';
import GoBackButton from 'src/components/common/Buttons/goBack';

function ApplicationsTransactions() {
  return (
    <>
          <GoBackButton linkRoute="productos/ingreso" />
      <Helmet>
        <title>Articulos deshabilitados</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeaderDeleted
          //Titule de cabecera
          title="Articulos deshabilitados"
          //funcion para buscar creadad en el slice de proveedor
          searchDispatch={fetchArticlesDeleted}
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