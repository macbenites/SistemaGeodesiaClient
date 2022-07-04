import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import PageHeader from 'src/components/common/Tables/TableHeader';
import RecentOrders from './RecentOrders';
import { fetchAllOutputs } from 'src/redux/slices/supplies/suppliesSlice';
import { useLocalStorage } from 'src/hooks/useLocalStorage';


function ApplicationsTransactions() {
   const [user, setUser] = useLocalStorage('user'); 
  return (
    <>
      <Helmet>
        <title>Registros de salida</title>
      </Helmet>
      <PageTitleWrapper>
      <PageHeader
          //Titule de cabecera
          title="Salida de insumos"
          //funcion para buscar creadad en el slice de proveedor
          searchDispatch={fetchAllOutputs}
          //ruta del botón de cabecera que te lleva al registro de proveedor
          route={'/insumos/salida-nueva'}
          buttonShow={
            user.permisos.find((auth) => auth.name === 'registrar-salidas de insumo')
              ? true
              : false
          }
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