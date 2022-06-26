import { Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router';
import HeaderSearch from 'src/layouts/SidebarLayout/Header/Buttons/Search';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader({ title, searchDispatch, route }) {
  const navigate = useNavigate();
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, Aquí puedes administrar {title}
        </Typography>
      </Grid>
      <Grid item>
        <Grid container spacing={3}>
          <Grid item>
            <HeaderSearch searchDispatch={searchDispatch} />
          </Grid>
          <Grid item>
            <Button
              sx={{ mt: { xs: 2, md: 0 } }}
              variant="contained"
              startIcon={<AddTwoToneIcon fontSize="small" />}
              onClick={() => navigate(`/${route}`)}
            >
              Crear {title.toLowerCase()}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
