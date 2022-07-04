import { Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import HeaderSearch from 'src/layouts/SidebarLayout/Header/Buttons/Search';
import { useLocalStorage } from 'src/hooks/useLocalStorage';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader({ title, searchDispatch, route, buttonShow }) {
  const [user, setUser] = useLocalStorage('user');
  const navigate = useNavigate();
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2">
          {user.nombre === 'Usuario Maestro'
            ? user.nombre
            : `${user.nombre.nom_per} ${user.nombre.ape_pat_per} ${user.nombre.ape_mat_per}`}
          , Aquí puedes administrar {title}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={3}>
          <Grid item>
            <HeaderSearch searchDispatch={searchDispatch} />
          </Grid>
          <Grid item>
            {buttonShow ? (
              <Button
                sx={{ mt: { xs: 2, md: 0 } }}
                variant="contained"
                startIcon={<AddTwoToneIcon fontSize="small" />}
                onClick={() => navigate(`/${route}`)}
              >
                Crear {title.toLowerCase()}
              </Button>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
