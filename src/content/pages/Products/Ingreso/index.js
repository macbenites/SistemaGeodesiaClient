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

import { useState } from 'react';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageTitle from 'src/components/PageTitle';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchArticles,
  fetchCategories,
  fetchState,
  fetchPresentations,
  fetchUnitMeasurement
} from 'src/redux/slices/articles/articleSlice';
import { useSelector } from 'react-redux';
import { DatePicker } from '@mui/lab';

const Ingreso = () => {
  const dispatch = useDispatch();
  const { categories, states, presentations, unitMeasurements } = useSelector(
    (state) => state.articles
  );

  useEffect(() => {
    dispatch(fetchArticles());
    dispatch(fetchCategories());
    dispatch(fetchState());
    dispatch(fetchPresentations());
    dispatch(fetchUnitMeasurement());
  }, [dispatch]);
  const [value, setValue] = useState(null);
  const [article, setArticle] = useState({
    des_art: '',
    cod_cat: '',
    cod_estado_art: '',
    cod_pres: '',
    cod_unid_med: '',
    image: '',
    stock: '',
    fecha_ingreso: {}
  });

  const handleChange = (event) => {
    setArticle({
      ...article,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(saveArticle(article));
  };
  console.log(typeof value);
  console.log(article);
  return (
    <>
      <PageTitleWrapper>
        <PageTitle
          heading="Ingreso de Insumos"
          subHeading="Components that are used to build interactive placeholders used for data collection from users."
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Registrar Articulo" />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <TextField
                      id="des_art"
                      name="des_art"
                      label="Descripción"
                      type="search"
                      autoComplete="off"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={3} md={3}>
                    <TextField
                      select
                      id="cod_cat"
                      label="Categoría"
                      fullWidth
                      onChange={handleChange}
                      value={article.cod_cat}
                      name="cod_cat"
                      //   helperText="Please select your currency"
                    >
                      {categories.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.des_cat}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={3} md={3}>
                    <TextField
                      id="cod_estado_art"
                      name="cod_pres"
                      select
                      label="Presentación"
                      value={article.cod_pres}
                      fullWidth
                      onChange={handleChange}
                    >
                      {presentations.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.des_pres}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={3} md={3}>
                    <TextField
                      id="cod_unid_med"
                      name="cod_unid_med"
                      select
                      label="Unidad de Medida"
                      value={article.cod_unid_med}
                      fullWidth
                      onChange={handleChange}
                    >
                      {unitMeasurements.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.prefijo_unid_med}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={3} md={4}>
                    <TextField
                      id="stock"
                      name="stock"
                      label="Stock"
                      autoComplete="off"
                      type="search"
                      fullWidth
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={6} md={5}>
                    <TextField
                      id="image"
                      name="image_art"
                      label="Imagen"
                      type="search"
                      fullWidth
                      autoComplete="off"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={3} md={4}>
                    <TextField
                      id="feature"
                      name="feature"
                      label="Caracteristica"
                      type="search"
                      fullWidth
                      autoComplete="off"
                    />
                  </Grid>
                  <Grid item xs={3} md={4}>
                    <TextField
                      id="featureValue"
                      name="featureValue"
                      label="Valor"
                      type="search"
                      fullWidth
                      autoComplete="off"
                    />
                  </Grid>
                  <Grid item xs={3} md={4}>
                    <TextField
                      id="cod_estado_art"
                      name="cod_estado_art"
                      label="Estado"
                      type="search"
                      fullWidth
                      autoComplete="off"
                    />
                  </Grid>
                </Grid>
                <DatePicker
                  label="Fecha Ingreso"
                  value={article.fecha_ingreso}
                  onChange={(date) =>
                    setArticle({
                      ...article,
                      fecha_ingreso: date
                    })
                  }
                  renderInput={(params) => <TextField {...params} />}
                />

                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Box mt={2} textAlign={'right'}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                      >
                        Registrar
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Ingreso;
