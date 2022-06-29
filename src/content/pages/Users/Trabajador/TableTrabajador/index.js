import { Helmet } from 'react-helmet-async';
import PageHeader from 'src/components/common/Tables/TableHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import { fetchUsers } from 'src/redux/slices/users/userSlice';
import RecentEmployee from './RecentEmployee';

function EmployeeMaintenance() {
  return (
    <>
      <Helmet>
        <title>Trabajador</title>
      </Helmet>
      <PageTitleWrapper>
        {/* Componente de busqueda */}
        <PageHeader
          title="Trabajador"
          searchDispatch={fetchUsers}
          route={'usuarios/trabajador'}
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
            <RecentEmployee />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default EmployeeMaintenance;
