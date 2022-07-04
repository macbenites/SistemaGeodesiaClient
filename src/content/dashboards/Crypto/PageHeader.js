import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

function PageHeader() {
  const { user } = useSelector((state) => state.auth);

  const theme = useTheme();

  return (
    <Grid container alignItems="center">

      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Bienvenido, {user.nombre.nom_per}!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
