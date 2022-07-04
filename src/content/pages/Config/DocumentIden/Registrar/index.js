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
import { saveDocumento  } from 'src/redux/slices/config/configSlice';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { validationDocumento} from 'src/utils/validation';
import BasicModal from 'src/components/common/Modals';
import GoBackButton from 'src/components/common/Buttons/goBack';

const FormDocumento = () => {
  const [modal, setModal] = useState(false);
  const { createdDocumento } = useSelector((state) => state.config);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      tipo_reg_doc:'',
      des_t_doc: '',
    },
    validationSchema: validationDocumento,
    onSubmit: (values, { resetForm }) => {
      dispatch(saveDocumento(values)).then(() => {
        resetForm();
        setModal(true);
      });
    }
  });

  return (
    <>
      <BasicModal modal={modal} setModal={setModal} message={createdDocumento} />
      <GoBackButton linkRoute="config/tipodocumento" />
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
              <CardHeader title="Registrar Tipo de documento" />
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
                          <MenuItem key="tipo_reg_doc" value="Ingreso" >
                            Ingreso
                          </MenuItem>
                          <MenuItem key="tipo_reg_doc"  value="Salida" >
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
                    <Grid item xs={12} md={9}>
                      <TextField
                        label="Estado"
                        value="Activo"
                        type="search"
                        autoComplete="off"
                        fullWidth
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

export default FormDocumento;

