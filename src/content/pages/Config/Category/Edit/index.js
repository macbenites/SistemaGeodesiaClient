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
    updateCategory,
    fetchCategories
  } from 'src/redux/slices/config/configSlice';
  import TextField from '@mui/material/TextField';
  import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { useFormik } from 'formik';
  import { validationCategory} from 'src/utils/validation';
  import BasicModal from 'src/components/common/Modals';
  
const EditCategoria = ({ setModal }) => {
    const dispatch = useDispatch();
    const { showCategory } = useSelector(
      (state) => state.config
    );
  
    const formik = useFormik({
      initialValues: showCategory.categoria,
      validationSchema: validationCategory,
      onSubmit: (values, { resetForm }) => {
        dispatch(updateCategory(values)).then(() => {
          resetForm();
          setModal(false);
        });
      }
    });
    
    return(
    <>
    <Grid item xs={12}>
            <Card>
              <CardHeader title="Actualizar Categoria" />
              <Divider />
              <CardContent>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
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
export default EditCategoria;