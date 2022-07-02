import {
    Divider,
    Card,
    Grid,
    Button,
    Container,
    CardContent,
    TextField,
    CircularProgress,
    CardHeader
  } from '@mui/material';
import {
    updateCompany
} from 'src/redux/slices/company/companySlice';
import { useDispatch, useSelector } from 'react-redux';
import { FieldArray, Form, Field, Formik } from 'formik';
import { validationCompany } from 'src/utils/validation';
import BasicModal from 'src/components/common/Modals/index';

const EditCompany = ({ setModal }) => {
  const dispatch = useDispatch();
  const { editCompanyState } = useSelector(
    (state) => state.company
  );

  return (
    <>
      <Container maxWidth="md">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
          mt={2}
          mb={2}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Actualizar empresa" />
              <Divider />
              <CardContent>
                <Formik
                  initialValues={{
                    cod_emp: editCompanyState.empresa.cod_emp,
                    razon_social: editCompanyState.empresa.razon_social,
                    nro_doc: editCompanyState.empresa.nro_doc,
                    correo_per: editCompanyState.empresa.correo_per
                  }}
                  validationSchema={validationCompany}
                  onSubmit={async (values, { resetForm }) => {
                    dispatch(updateCompany(values)).then(() => {
                      setModal(false);
                      resetForm();
                    });
                  }}
                >
                  {({
                    values,
                    errors,
                    isSubmitting,
                    handleChange,
                    touched,
                    setFieldValue
                  }) => (
                    <Form autoComplete="off">
                      <Grid container spacing={2}>

                        <Grid item xs={12} md={7}>
                          <TextField
                            id="razon_social"
                            label="Razón social"
                            fullWidth
                            type="search"
                            name="razon_social"
                            autoComplete="off"
                            value={values.razon_social}
                            onChange={handleChange}
                            error={
                              touched.razon_social &&
                              Boolean(errors.razon_social)
                            }
                            helperText={errors.razon_social}
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            id="nro_doc"
                            label="Nro. Documento"
                            fullWidth
                            type="search"
                            name="nro_doc"
                            autoComplete="off"
                            value={values.nro_doc}
                            onChange={handleChange}
                            error={touched.nro_doc && Boolean(errors.nro_doc)}
                            helperText={errors.nro_doc}
                          />
                        </Grid>
                        <Grid item xs={12} md={8}>
                          <TextField
                            id="correo_per"
                            label="Correo"
                            fullWidth
                            type="search"
                            name="correo_per"
                            value={values.correo_per}
                            onChange={handleChange}
                            error={
                              touched.correo_per && Boolean(errors.correo_per)
                            }
                            helperText={errors.correo_per}
                          />
                        </Grid>
                        <Grid item xs={12} md={3}>
                          <Button
                            disabled={isSubmitting}
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            startIcon={
                              isSubmitting ? (
                                <CircularProgress size="0.9rem" />
                              ) : undefined
                            }
                          >
                            {isSubmitting ? 'Registrando' : 'Actualizar'}
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <BasicModal />
      </Container>
    </>
  );

};

export default EditCompany;