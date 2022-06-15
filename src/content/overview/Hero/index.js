import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  InputLabel,
  OutlinedInput,
  FormControl,
  FormHelperText
} from '@mui/material';
import { useFormik } from 'formik';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { validationLogin } from '../../../utils/validation';
import { authLogin } from 'src/redux/slices/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import BasicModal from 'src/components/common/Modals/index';
import { useNavigate } from 'react-router';

const Hero = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { status, user, isLoggedIn } = useSelector((state) => state.auth);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues: {
      usuario: '',
      contraseña: ''
    },
    validationSchema: validationLogin,
    onSubmit: (values, { resetForm }) => {
      dispatch(authLogin(values));
    }
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboards/crypto');
    }
  }, [isLoggedIn]);

  return (
    <>
      <BasicModal modal={modal} setModal={setModal} message={status} />
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ mb: 2 }}>
            <Typography variant="h3">Hola, Bienvenido de vuelta </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl
            fullWidth
            error={Boolean(formik.touched.usuario && formik.errors.usuario)}
          >
            <InputLabel htmlFor="outlined-adornment-email-login">
              Usuario
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-email-login"
              type="email"
              value={formik.values.usuario}
              name="usuario"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              label="Usuario"
              autoComplete="off"
              inputProps={{}}
            />
            {formik.touched.usuario && formik.errors.usuario && (
              <FormHelperText
                error
                id="standard-weight-helper-text-email-login"
              >
                {formik.errors.usuario}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <FormControl
            fullWidth
            error={Boolean(
              formik.touched.contraseña && formik.errors.contraseña
            )}
          >
            <InputLabel htmlFor="outlined-adornment-password-login">
              Contraseña
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password-login"
              type={showPassword ? 'text' : 'password'}
              value={formik.values.contraseña}
              name="contraseña"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              autoComplete="off"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    size="large"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              inputProps={{}}
            />
            {formik.touched.contraseña && formik.errors.contraseña && (
              <FormHelperText
                error
                id="standard-weight-helper-text-password-login"
              >
                {formik.errors.contraseña}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            onClick={formik.handleSubmit}
            size="large"
          >
            Ingresar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
