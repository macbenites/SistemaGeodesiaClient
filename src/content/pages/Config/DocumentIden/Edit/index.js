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
    fetchDocumentos,
    updateDocumento
  } from 'src/redux/slices/config/configSlice';
  import TextField from '@mui/material/TextField';
  import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { useFormik } from 'formik';
  import { validationDocumento} from 'src/utils/validation';
  import BasicModal from 'src/components/common/Modals';

const EditDocumento = ({ setModal }) => {
    const dispatch = useDispatch();
    const { showDocumento } = useSelector(
      (state) => state.config
    );
  
    const formik = useFormik({
      initialValues: showDocumento.documento,
      validationSchema: validationDocumento,
      onSubmit: (values, { resetForm }) => {
        dispatch(updateDocumento(values)).then(() => {
          resetForm();
          setModal(false);
        });
      }
    });
    return (
      <>
        <Grid item xs={12}>
            <Card>
              <CardHeader title="Actualizar Tipo de documento" />
              <Divider />
              <CardContent>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                  <Grid item xs={12} md={9}>
                      <TextField
                        select
                        id="tipo_reg_doc"
                        label="Tipo de movimiento"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.tipo_reg_doc}
                        name="tipo_reg_doc"
                        error={
                          formik.touched.tipo_reg_doc &&
                          Boolean(formik.errors.tipo_reg_doc)
                        }
                        helperText={
                          formik.errors.tipo_reg_doc && formik.errors.tipo_reg_doc
                        }
                      >
                          <MenuItem key="Ingreso" value="Ingreso" >
                            Ingreso
                          </MenuItem>
                          <MenuItem key="Salida"  value="Salida" >
                            Salida
                          </MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item xs={12} md={9}>
                      <TextField
                        id="des"
                        name="des_t_doc"
                        label="Descripción"
                        value={formik.values.des_t_doc}
                        type="search"
                        autoComplete="off"
                        fullWidth
                        onChange={formik.handleChange}
                        error={
                          formik.touched.des_t_doc &&
                          Boolean(formik.errors.des_t_doc)
                        }
                        helperText={
                          formik.errors.des_t_doc && formik.errors.des_t_doc
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
  
export default EditDocumento;
  