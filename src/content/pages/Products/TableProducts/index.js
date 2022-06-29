import { Helmet } from 'react-helmet-async';
//import PageHeader from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import PageHeader from 'src/components/common/Tables/TableHeader';
import { fetchArticles } from 'src/redux/slices/articles/articleSlice';
import RecentOrders from './RecentOrders';

function ApplicationsTransactions() {
  return (
    <>
      <Helmet>
        <title>Articulos</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          //Titule de cabecera
          title="Articulo"
          //funcion para buscar creadad en el slice de proveedor
          searchDispatch={fetchArticles}
          //ruta del botón de cabecera que te lleva al registro de proveedor
          route={'/productos/ingreso-insumos'}
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
