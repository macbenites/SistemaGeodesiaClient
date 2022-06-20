import {
    Container,
    Grid,
    Card,
    CardHeader,
    Divider,
    CardContent,
    Box,
    Button
  } from '@mui/material';
  import {
    fetchPresentaciones,
    updatePresentacion
  } from 'src/redux/slices/config/configSlice';
  import TextField from '@mui/material/TextField';
  import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { useFormik } from 'formik';
  import { validationPresentacion} from 'src/utils/validation';
  import BasicModal from 'src/components/common/Modals';
  
//   const FormPresentation = () => {
//     const [modal, setModal] = useState(false);
//     const { createdPresentacion } = useSelector((state) => state.config);
//     const dispatch = useDispatch();
  
//     const formik = useFormik({
//       initialValues: {
//         des_pres: ''
//       },
//       validationSchema: validationPresentacion,
//       onSubmit: (values, { resetForm }) => {
//         dispatch(savePresentacion(values)).then(() => {
//           resetForm();
//           setModal(true);
//         });
//       }
//     });
const EditPresentacion = ({ setModal }) => {
    const dispatch = useDispatch();
    const { showPresentacion } = useSelector(
      (state) => state.config
    );
  
    const formik = useFormik({
      initialValues: showPresentacion.presentacion,
      validationSchema: validationPresentacion,
      onSubmit: (values, { resetForm }) => {
        dispatch(updatePresentacion(values)).then(() => {
          resetForm();
          setModal(false);
        });
      }
    });
    return (
      <>
        <Grid item xs={12}>
          <Card>
            <CardHeader title="Actualizar Presentacion" />
            <Divider />
            <CardContent>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <TextField
                      id="des_pres"
                      name="des_pres"
                      label="Descripción"
                      value={formik.values.des_pres}
                      type="search"
                      autoComplete="off"
                      fullWidth
                      onChange={formik.handleChange}
                      error={
                        formik.touched.des_pres &&
                        Boolean(formik.errors.des_pres)
                      }
                      helperText={
                        formik.errors.des_pres && formik.errors.des_pres
                      }
                    />
                  </Grid>
                  <Grid item xs={12} md={3} justifyContent={'right'}>
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
  
export default EditPresentacion;
  