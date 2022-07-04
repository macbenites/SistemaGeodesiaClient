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
  fetchArticles,
  fetchArticlesCreate,
  updateArticle
} from 'src/redux/slices/articles/articleSlice';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { validationArticle } from 'src/utils/validation';

const EditArticle = ({ setModal }) => {
  const dispatch = useDispatch();
  const { categories, presentations, units, showArticle } = useSelector(
    (state) => state.articles
  );

  useEffect(() => {
    dispatch(fetchArticlesCreate());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: showArticle.articulo,
    validationSchema: validationArticle,
    onSubmit: (values, { resetForm }) => {
      dispatch(updateArticle(values)).then(() => {
        resetForm();
        setModal(false);
      });
    }
  });

  return (
    <>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="Actualizar Articulo" />
          <Divider />
          <CardContent>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={2}>
                {/* <Grid item xs={12} md={3}>
                  <TextField
                    id="cod_art"
                    name="cod_art"
                    label="Código"
                    value={formik.values.cod_art}
                    type="search"
                    fullWidth
                    autoComplete="off"
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cod_art && Boolean(formik.errors.cod_art)
                    }
                    helperText={formik.errors.cod_art && formik.errors.cod_art}
                  />
                </Grid> */}
                <Grid item xs={12} md={12}>
                  <TextField
                    id="des_art"
                    name="des_art"
                    label="Descripción"
                    value={formik.values.des_art}
                    type="search"
                    autoComplete="off"
                    fullWidth
                    onChange={formik.handleChange}
                    error={
                      formik.touched.des_art && Boolean(formik.errors.des_art)
                    }
                    helperText={formik.errors.des_art && formik.errors.des_art}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    select
                    id="cod_cat"
                    label="Categoría"
                    fullWidth
                    onChange={formik.handleChange}
                    value={formik.values.cod_cat}
                    name="cod_cat"
                    error={
                      formik.touched.cod_cat && Boolean(formik.errors.cod_cat)
                    }
                    helperText={formik.errors.cod_cat && formik.errors.cod_cat}
                  >
                    {categories.map((option) => (
                      <MenuItem key={option.cod_cat} value={option.cod_cat}>
                        {option.des_cat}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="cod_estado_art"
                    name="cod_pres"
                    select
                    label="Presentación"
                    value={formik.values.cod_pres}
                    fullWidth
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cod_pres && Boolean(formik.errors.cod_pres)
                    }
                    helperText={
                      formik.errors.cod_pres && formik.errors.cod_pres
                    }
                  >
                    {presentations.map((option) => (
                      <MenuItem key={option.cod_pres} value={option.cod_pres}>
                        {option.des_pres}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} md={4}>
                  <TextField
                    id="cod_unid_med"
                    name="cod_unid_med"
                    select
                    label="Unidad de Medida"
                    value={formik.values.cod_unid_med}
                    fullWidth
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cod_unid_med &&
                      Boolean(formik.errors.cod_unid_med)
                    }
                    helperText={
                      formik.errors.cod_unid_med && formik.errors.cod_unid_med
                    }
                  >
                    {units.map((option) => (
                      <MenuItem
                        key={option.cod_unid_med}
                        value={option.cod_unid_med}
                      >
                        {option.des_unid_med}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                {/* <Grid item xs={12} md={12}>
                  <TextField
                    id="image"
                    name="imagen_art"
                    label="Imagen url"
                    type="search"
                    fullWidth
                    autoComplete="off"
                    value={formik.values.imagen_art}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.imagen_art &&
                      Boolean(formik.errors.imagen_art)
                    }
                    helperText={
                      formik.errors.imagen_art && formik.errors.imagen_art
                    }
                  />
                </Grid> */}

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

export default EditArticle;
