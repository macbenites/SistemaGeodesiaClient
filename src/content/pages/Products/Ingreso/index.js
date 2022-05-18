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
  saveArticle
} from 'src/redux/slices/articles/articleSlice';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker } from '@mui/lab';
import { useFormik } from 'formik';
import { validationArticle } from 'src/utils/validation';
import BasicModal from 'src/components/common/Modals';

const Ingreso = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const { categories, presentations, units, created } = useSelector(
    (state) => state.articles
  );

  useEffect(() => {
    dispatch(fetchArticles());
    dispatch(fetchArticlesCreate());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      cod_art: '',
      des_art: '',
      cod_cat: '',
      cod_pres: '',
      cod_unid_med: '',
      cod_estado_art: 1,
      stock: '',
      imagen_art: ''
    },
    validationSchema: validationArticle,
    onSubmit: (values, { resetForm }) => {
      dispatch(saveArticle(values)).then(() => {
        resetForm();
        setModal(true);
      });
    }
  });

  return (
    <>
      <BasicModal modal={modal} setModal={setModal} message={created} />
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
              <CardHeader title="Registrar Articulo" />
              <Divider />
              <CardContent>
                <form onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
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
                          formik.touched.cod_art &&
                          Boolean(formik.errors.cod_art)
                        }
                        helperText={
                          formik.errors.cod_art && formik.errors.cod_art
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={9}>
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
                          formik.touched.des_art &&
                          Boolean(formik.errors.des_art)
                        }
                        helperText={
                          formik.errors.des_art && formik.errors.des_art
                        }
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
                          formik.touched.cod_cat &&
                          Boolean(formik.errors.cod_cat)
                        }
                        helperText={
                          formik.errors.cod_cat && formik.errors.cod_cat
                        }
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
                          formik.touched.cod_pres &&
                          Boolean(formik.errors.cod_pres)
                        }
                        helperText={
                          formik.errors.cod_pres && formik.errors.cod_pres
                        }
                      >
                        {presentations.map((option) => (
                          <MenuItem
                            key={option.cod_pres}
                            value={option.cod_pres}
                          >
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
                          formik.errors.cod_unid_med &&
                          formik.errors.cod_unid_med
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
                    <Grid item xs={12} md={4}>
                      <TextField
                        id="stock"
                        name="stock"
                        label="Stock"
                        autoComplete="off"
                        type="search"
                        fullWidth
                        value={formik.values.stock}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.stock && Boolean(formik.errors.stock)
                        }
                        helperText={formik.errors.stock && formik.errors.stock}
                      />
                    </Grid>
                    <Grid item xs={12} md={8}>
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
                {/* <DatePicker
                  label="Fecha Ingreso"
                  value={article.fecha_ingreso}
                  onChange={(date) =>
                    setArticle({
                      ...article,
                      fecha_ingreso: date
                    })
                  }
                  renderInput={(params) => <TextField {...params} />}
                /> */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <BasicModal />
      </Container>
    </>
  );
};

export default Ingreso;
