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
import { saveUnit } from 'src/redux/slices/config/configSlice';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { validationUnit } from 'src/utils/validation';
import BasicModal from 'src/components/common/Modals';

const FormUnit = () => {
  const [modal, setModal] = useState(false);
  const { createdUnit } = useSelector((state) => state.config);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      des_unid_med: '',
      prefijo_unid_med:''
    },
    validationSchema: validationUnit,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      dispatch(saveUnit(values)).then(() => {
        resetForm();
        setModal(true);
      });
    }
  });

  return (
    <>
       <BasicModal modal={modal} setModal={setModal} message={createdUnit} /> 
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
              <CardHeader title="Registrar Unidad de Medida" />
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
                        label="Descripción de unidad de medida"
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

export default FormUnit;
