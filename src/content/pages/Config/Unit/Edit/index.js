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
    fetchUnits,
    updateUnit
  } from 'src/redux/slices/config/configSlice';
  import TextField from '@mui/material/TextField';
  import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { useFormik } from 'formik';
  import { validationUnit} from 'src/utils/validation';
  import BasicModal from 'src/components/common/Modals';

const EditUnidMed = ({ setModal }) => {
    const dispatch = useDispatch();
    const { showUnit } = useSelector(
      (state) => state.config
    );
  
    const formik = useFormik({
      initialValues: showUnit.unid_med,
      validationSchema: validationUnit,
      onSubmit: (values, { resetForm }) => {
        dispatch(updateUnit(values)).then(() => {
          resetForm();
          setModal(false);
        });
      }
    });
    return (
      <>
        <Grid item xs={12}>
            <Card>
              <CardHeader title="Actualizar Unidad de Medida" />
              <Divider />
              <CardContent>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                      <TextField
                        id="des_unid_med"
                        name="des_unid_med"
                        label="Descripción de unidad de medida"
                        value={formik.values.des_unid_med}
                        type="search"
                        autoComplete="off"
                        fullWidth
                        onChange={formik.handleChange}
                        error={
                          formik.touched.des_unid_med &&
                          Boolean(formik.errors.des_unid_med)
                        }
                        helperText={
                          formik.errors.des_unid_med && formik.errors.des_unid_med
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={9}>
                      <TextField
                        id="prefijo_unid_med"
                        name="prefijo_unid_med"
                        label="Descripción corta de unidad de medida"
                        value={formik.values.prefijo_unid_med}
                        type="search"
                        autoComplete="off"
                        fullWidth
                        onChange={formik.handleChange}
                        error={
                          formik.touched.prefijo_unid_med &&
                          Boolean(formik.errors.prefijo_unid_med)
                        }
                        helperText={
                          formik.errors.prefijo_unid_med && formik.errors.prefijo_unid_med
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
  
export default EditUnidMed;
  