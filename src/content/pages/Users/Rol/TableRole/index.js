import { Helmet } from 'react-helmet-async';
import PageHeader from 'src/components/common/Tables/TableHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from 'src/components/Footer';
import { fetchRoles } from 'src/redux/slices/roles/roleSlice';
import RecentRoles from './RecentRoles.js';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

function RoleMaintenance() {
  const [user, setUser] = useLocalStorage('user');
  return (
    <>
      <Helmet>
        <title>Rol</title>
      </Helmet>
      <PageTitleWrapper>
        {/* Componente de busqueda */}
        <PageHeader
          title="Rol"
          searchDispatch={fetchRoles}
          route={'usuarios/rol-registrar'}
          buttonShow={
            user.permisos.find((auth) => auth.name === 'registrar-roles')
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
            <RecentRoles />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default RoleMaintenance;
