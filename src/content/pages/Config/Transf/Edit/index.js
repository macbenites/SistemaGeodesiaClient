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
    fetchTransferencias,
    updateTransferencia
  } from 'src/redux/slices/config/configSlice';
  import TextField from '@mui/material/TextField';
  import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { useFormik } from 'formik';
  import { validationTransferencia} from 'src/utils/validation';
  import BasicModal from 'src/components/common/Modals';

const EditTransferencia = ({ setModal }) => {
    const dispatch = useDispatch();
    const { showTransferencia } = useSelector(
      (state) => state.config
    );
  
    const formik = useFormik({
      initialValues: showTransferencia.tipo_transf,
      validationSchema: validationTransferencia,
      onSubmit: (values, { resetForm }) => {
        dispatch(updateTransferencia(values)).then(() => {
          resetForm();
          setModal(false);
        });
      }
    });
    return (
      <>
        <Grid item xs={12}>
            <Card>
              <CardHeader title="Actualizar Transferencia" />
              <Divider />
              <CardContent>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <TextField
                        id="des_transf"
                        name="des_transf"
                        label="Descripción de Transferencia"
                        value={formik.values.des_transf}
                        type="search"
                        autoComplete="off"
                        fullWidth
                        onChange={formik.handleChange}
                        error={
                          formik.touched.des_transf&&
                          Boolean(formik.errors.des_transf)
                        }
                        helperText={
                          formik.errors.des_transf && formik.errors.des_transf
                        }
                      />
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
  
export default EditTransferencia;
  