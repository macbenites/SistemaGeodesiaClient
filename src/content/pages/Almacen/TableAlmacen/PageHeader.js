import { Typography, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader() {
  const navigate = useNavigate();
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Almacenes
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, Aquí puedes administrar tus almacenes
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={() => navigate('/almacenes/registro-nuevo')}
        >
          Nuevo almacen
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
