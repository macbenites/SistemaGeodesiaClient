import {
    Container,
    Grid,
    Card,
    CardHeader,
    Divider,
    CardContent,
    Box,
    Button,
    Typography,
    InputAdornment,
    IconButton,
    InputLabel,
    OutlinedInput,
    FormControl,
    FormHelperText
  } from '@mui/material';
  import {
    updatePassword
  } from 'src/redux/slices/users/userSlice';
  import TextField from '@mui/material/TextField';
  import MenuItem from '@mui/material/MenuItem';
  import { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { useFormik } from 'formik';
  import Visibility from '@mui/icons-material/Visibility';
  import VisibilityOff from '@mui/icons-material/VisibilityOff';
  import { validationChangePass} from 'src/utils/validation';
  import BasicModal from 'src/components/common/Modals';
  
const EditPassword = ({ setModal }) => {
    const dispatch = useDispatch();
    const { id_usuario } = useSelector((state) => state.users.editPass);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
       event.preventDefault();
    };

    const formik = useFormik({
        initialValues: {
            id : id_usuario,
            password: '',
            password_confirmation: ''
        },
      validationSchema: validationChangePass,
      onSubmit: (values, { resetForm }) => {
        dispatch(updatePassword(values)).then(() => {
          resetForm();
          setModal(false);
        });
      }
    });
    

    
    console.log(formik.values);

    return(
    <>
    <Grid item xs={12}>
            <Card>
              <CardHeader title="Cambiar Contraseña" />
              <Divider />
              <CardContent>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    
                    <Grid item xs={12} md={12}>
                    <FormControl
                        fullWidth
                        error={Boolean(
                        formik.touched.password && formik.errors.password
                        )}
                    >
                        <InputLabel htmlFor="outlined-adornment-password-login">
                        Nueva Contraseña
                        </InputLabel>
                        <OutlinedInput
                        id="outlined-adornment-password-login"
                        type={showPassword ? 'text' : 'password'}
                        value={formik.values.password}
                        name="password"
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
                        {formik.touched.password && formik.errors.password && (
                        <FormHelperText
                            error
                            id="standard-weight-helper-text-password-login"
                        >
                            {formik.errors.password}
                        </FormHelperText>
                        )}
                    </FormControl>
                    </Grid>
                    
                    <Grid item xs={12} md={12}>
                    <FormControl
                        fullWidth
                        error={Boolean(
                        formik.touched.password_confirmation && formik.errors.password_confirmation
                        )}
                    >
                        <InputLabel htmlFor="outlined-adornment-password-login">
                        Confirmar nueva Contraseña
                        </InputLabel>
                        <OutlinedInput
                        id="outlined-adornment-password-login"
                        type={'password'}
                        value={formik.values.password_confirmation}
                        name="password_confirmation"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        autoComplete="off"
                        
                        label="confPassword"
                        inputProps={{}}
                        />
                        {formik.touched.password_confirmation && formik.errors.password_confirmation && (
                        <FormHelperText
                            error
                            id="standard-weight-helper-text-password-login"
                        >
                            {formik.errors.password_confirmation}
                        </FormHelperText>
                        )}
                    </FormControl>
                    </Grid>
                    
                    <Grid item xs={12} md={9}>
                      <Button
                        variant="contained"
                        fullWidth
                        color="primary"
                        type="submit"
                        size="large"
                      >
                        Actualizar
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
    </>
    );
    
};
export default EditPassword;