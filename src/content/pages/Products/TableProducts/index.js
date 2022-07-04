import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid,Button } from '@mui/material';
import Footer from 'src/components/Footer';
import PageHeader from 'src/components/common/Tables/TableHeader';
import { fetchArticles } from 'src/redux/slices/articles/articleSlice';
import RecentOrders from './RecentOrders';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import { useNavigate } from 'react-router';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

function ApplicationsTransactions() {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage('user');
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
          buttonShow={
            user.permisos.find((auth) => auth.name === 'registrar-articulos')
              ? true
              : false
          }
        />
        {user.permisos.find((auth) => auth.name === 'eliminar-articulos') ? (
        <Grid item>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            endIcon={<AutoDeleteIcon fontSize="small" />}
            onClick={() => navigate(`/productos/ingreso-deshabilitados`)}
          >
            Articulos deshabilitados
          </Button>
        </Grid>
                ) : null}
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
