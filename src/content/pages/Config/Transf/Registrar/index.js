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
import { saveTransferencia } from 'src/redux/slices/config/configSlice';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { validationTransferencia } from 'src/utils/validation';
import BasicModal from 'src/components/common/Modals';
import GoBackButton from 'src/components/common/Buttons/goBack';

const FormTransf = () => {
  const [modal, setModal] = useState(false);
  const { createdTransferencia} = useSelector((state) => state.config);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      des_transf: ''
    },
    validationSchema: validationTransferencia,
    onSubmit: (values, { resetForm }) => {
      console.log(values)
      dispatch(saveTransferencia(values)).then(() => {
        resetForm();
        setModal(true);
      });
    }
  });

  return (
    <>
       <BasicModal modal={modal} setModal={setModal} message={createdTransferencia} /> 
       <GoBackButton linkRoute="config/tipotransferencia" />
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
              <CardHeader title="Registrar Transferencia" />
              <Divider />
              <CardContent>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
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

export default FormTransf;
