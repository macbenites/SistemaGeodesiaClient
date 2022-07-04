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
    fetchAlmacenes,
    saveAlmacen
  } from 'src/redux/slices/almacenes/almacenSlice';
  import TextField from '@mui/material/TextField';
  import MenuItem from '@mui/material/MenuItem';
  import { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { DatePicker } from '@mui/lab';
  import { useFormik } from 'formik';
  import { validationWarehouse } from 'src/utils/validation';
  import BasicModal from 'src/components/common/Modals';
  import GoBackButton from 'src/components/common/Buttons/goBack';
  const Almacen = () => {
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const {createdAlmacen} = useSelector((state) => state.almacen);
  
    useEffect(() => {
      dispatch(fetchAlmacenes());
    }, [dispatch]);
  
    const formik = useFormik({
      initialValues: {
        des_almacen: '',
        ubic_almacen: ''
      },
      validationSchema: validationWarehouse,
      onSubmit: (values, { resetForm }) => {
        dispatch(saveAlmacen(values)).then(() => {
          resetForm();
          setModal(true);
        });
      }
    });
    
    return (
      <>
        <BasicModal modal={modal} setModal={setModal} message={createdAlmacen} />
              <GoBackButton linkRoute="almacenes/registro" />
        <Container maxWidth="md">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={2}
            mt={2}
          >
            <Grid item xs={12}>
              <Card>
                <CardHeader title="Registrar Almacen" />
                <Divider />
                <CardContent>
                  <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={9}>
                        <TextField
                          id="des_almacen"
                          name="des_almacen"
                          label="Descripcion"
                          value={formik.values.des_almacen}
                          type="search"
                          fullWidth
                          autoComplete="off"
                          onChange={formik.handleChange}
                          error={
                            formik.touched.des_almacen &&
                            Boolean(formik.errors.des_almacen)
                          }
                          helperText={
                            formik.errors.des_almacen && formik.errors.des_almacen
                          }
                        />
                      </Grid>
                      <Grid item xs={12} md={9}>
                        <TextField
                          id="ubic_almacen"
                          name="ubic_almacen"
                          label="Dirección URL de la ubicación"
                          type="search"
                          fullWidth
                          autoComplete="off"
                          value={formik.values.ubic_almacen}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.ubic_almacen &&
                            Boolean(formik.errors.ubic_almacen)
                          }
                          helperText={
                            formik.errors.ubic_almacen && formik.errors.ubic_almacen
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
                          Registrar
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <BasicModal />
        </Container>
      </>
    );
  };
  
  export default Almacen;
  