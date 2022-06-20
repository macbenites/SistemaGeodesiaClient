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
import { saveCategory } from 'src/redux/slices/config/configSlice';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { validationCategory } from 'src/utils/validation';
import BasicModal from 'src/components/common/Modals';

const Category = () => {
  const [modal, setModal] = useState(false);
  const { createdCategory } = useSelector((state) => state.config);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      des_cat: ''
    },
    validationSchema: validationCategory,
    onSubmit: (values, { resetForm }) => {
      dispatch(saveCategory(values)).then(() => {
        resetForm();
        setModal(true);
      });
    }
  });

  return (
    <>
      <BasicModal modal={modal} setModal={setModal} message={createdCategory} />
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
              <CardHeader title="Registrar Categoria" />
              <Divider />
              <CardContent>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={9}>
                      <TextField
                        id="des_cat"
                        name="des_cat"
                        label="Descripción"
                        value={formik.values.des_cat}
                        type="search"
                        autoComplete="off"
                        fullWidth
                        onChange={formik.handleChange}
                        error={
                          formik.touched.des_cat &&
                          Boolean(formik.errors.des_cat)
                        }
                        helperText={
                          formik.errors.des_cat && formik.errors.des_cat
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

export default Category;
