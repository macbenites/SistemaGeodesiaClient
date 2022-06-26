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
    updateAlmacen
  } from 'src/redux/slices/almacenes/almacenSlice';
  import TextField from '@mui/material/TextField';
  import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { useFormik } from 'formik';
  import { validationWarehouse } from 'src/utils/validation';
  import BasicModal from 'src/components/common/Modals';

const EditAlmacen = ({ setModal }) => {
    const dispatch = useDispatch();
    const { showAlmacen } = useSelector(
      (state) => state.almacen
    );
  
    const formik = useFormik({
      initialValues: showAlmacen.almacen,
      validationSchema: validationWarehouse,
      onSubmit: (values, { resetForm }) => {
        dispatch(updateAlmacen(values)).then(() => {
          resetForm();
          setModal(false);
        });
      }
    });
    return (
      <>
        <Grid item xs={12}>
            <Card>
              <CardHeader title="Actualizar almacen" />
              <Divider />
              <CardContent>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                      <TextField
                        id="des_almacen"
                        name="des_almacen"
                        label="Descripción de almacen"
                        value={formik.values.des_almacen}
                        type="search"
                        autoComplete="off"
                        fullWidth
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
                        value={formik.values.ubic_almacen}
                        type="search"
                        autoComplete="off"
                        fullWidth
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
                    <Grid item xs={12} md={3}>
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
  
export default EditAlmacen;
  