import { Typography, Avatar, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

function PageHeader() {
  const { user } = useSelector((state) => state.auth);

  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{ mr: 2, width: theme.spacing(8), height: theme.spacing(8) }}
          variant="rounded"
          alt={user.msg}
          src="/static/images/avatars/1.jpg"
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Bienvenido, {user.role}!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
