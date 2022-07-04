import { Typography, Button, Grid } from '@mui/material';
import HeaderSearch from 'src/layouts/SidebarLayout/Header/Buttons/Search';
import { useSelector } from 'react-redux';

function PageHeaderDeleted({ title, searchDispatch }) {
    const { user } = useSelector((state) => state.auth); //**** */

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2">
          {user.nombre.nom_per}, Aquí puedes administrar {title}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={3}>
          <Grid item>
            <HeaderSearch searchDispatch={searchDispatch} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PageHeaderDeleted;