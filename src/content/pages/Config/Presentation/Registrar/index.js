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
import { savePresentacion  } from 'src/redux/slices/config/configSlice';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { validationPresentacion} from 'src/utils/validation';
import BasicModal from 'src/components/common/Modals';
import GoBackButton from 'src/components/common/Buttons/goBack';

const FormPresentation = () => {
  const [modal, setModal] = useState(false);
  const { createdPresentation } = useSelector((state) => state.config);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      des_pres: ''
    },
    validationSchema: validationPresentacion,
    onSubmit: (values, { resetForm }) => {
      dispatch(savePresentacion(values)).then(() => {
        resetForm();
        setModal(true);
      });
    }
  });

  return (
    <>
      <BasicModal modal={modal} setModal={setModal} message={createdPresentation} />
            <GoBackButton linkRoute="config/presentacion" />
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
              <CardHeader title="Registrar Presentacion" />
              <Divider />
              <CardContent>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
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

export default FormPresentation;
