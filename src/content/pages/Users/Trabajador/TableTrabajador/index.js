import { Helmet } from 'react-helmet-async';
import PageHeader from 'src/components/common/Tables/TableHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid, Button } from '@mui/material';
import Footer from 'src/components/Footer';
import { fetchUsers } from 'src/redux/slices/users/userSlice';
import RecentEmployee from './RecentEmployee';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import { useNavigate } from 'react-router';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

function EmployeeMaintenance() {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage('user');
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
          buttonShow={
            user.permisos.find((auth) => auth.name === 'registrar-trabajadores')
              ? true
              : false
          }
        />
    {user.permisos.find((auth) => auth.name === 'eliminar-trabajadores') ? (
      <Grid item>
          <Button
            sx={{ mt: { xs: 2, md: 0 } }}
            variant="contained"
            endIcon={<AutoDeleteIcon fontSize="small" />}
            onClick={() => navigate(`/usuarios/deshabilitados`)}
          >
            Trabajadores deshabilitados
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
            <RecentEmployee />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default EmployeeMaintenance;
