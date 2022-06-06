import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Grid,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  Container,
  CardContent,
  MenuItem,
  Typography,
  useTheme,
  CardHeader
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
  // import { validationArticle } from 'src/utils/validation';
import {
  fetchProvidersCreate,
  addTelephone,
  saveProvider,
  fetchProviderProvince,
  fetchProviderDistrict,
  fetchProviders
} from 'src/redux/slices/providers/providerSlice';
import BasicModal from 'src/components/common/Modals';

import TableTelephone from './tableTelephone';

const Proveedor = () => {
  const [modal, setModal] = useState(false);
  const {providersCreate,provincia,distrito,created} = useSelector((state) => state.provider);
  const dispatch = useDispatch();
  const [provider, setProvider] = useState({
    cod_t_per:'',
    razon_social:'',
    cod_t_doc:'',
    nro_doc:'',
    correo_per:'',
    cod_dist:'',
    dir_per:'',
    estado_prov:1,
    nro_telf: []
  });

  const [telephones, setTelephones] = useState({
    nro_telf: ''
  });

  const handleChange = (event) => {
    event.target.name == 'cod_dpt' && dispatch(fetchProviderProvince(event.target.value));
    event.target.name == 'cod_provi' && dispatch(fetchProviderDistrict(event.target.value));
    setProvider({
      ...provider,
      [event.target.name]: event.target.value
    });
  };

  const handleChangeTelephones = (event) => {
    setTelephones({
      ...telephones,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    dispatch(fetchProvidersCreate());
  }, [dispatch]);
  console.log(provider);

  const handleAddTelephone = () => {
    setProvider({
      ...provider,
      nro_telf: [...provider.nro_telf, telephones.nro_telf]
    });
    dispatch(addTelephone(telephones));
    setTelephones({
      nro_telf: ''
    });
  };

  const onSubmit = () => {
    dispatch(saveProvider(provider));
    setModal(true);
  };

  return (
    <>
     <BasicModal modal={modal} setModal={setModal} message={created} />
      <Container maxWidth="lg">
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
              <CardHeader title="Registrar Proveedor" />
              <Divider />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4}>
                    <TextField
                      select
                      id="cod_t_per"    /* codigo */
                      label="Tipo de persona"
                      fullWidth
                      name="cod_t_per"  /* codigo */
                      value={provider.cod_t_per} /* codigo */
                      onChange={handleChange}
                    >
                      {providersCreate.tipo_persona?.map((provider) => ( /* nombre de la variable que contiene los datos B*/
                        <MenuItem 
                          key={provider.cod_t_per} 
                          value={provider.cod_t_per}
                          >
                          {provider.des_t_per}
                        </MenuItem> /* NOMBRE DEL PARAMETRO A MOSTRAR */
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <TextField
                      id="razon_social"
                      label="Razón social"
                      fullWidth
                      type="search"
                      name="razon_social"
                      autoComplete="off"
                      value={provider.razon_social}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      select
                      id="cod_t_doc"
                      label="Tipo de documento"
                      fullWidth
                      name="cod_t_doc"
                      value={provider.cod_t_doc}
                      onChange={handleChange}
                    >
                      {providersCreate.tdoc_ide?.map((provider) => (
                        <MenuItem
                          key={provider.cod_t_doc}
                          value={provider.cod_t_doc}
                        >
                          {provider.dest_doc}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      id="nro_doc"
                      label="Nro. Documento"
                      fullWidth
                      type="search"
                      name="nro_doc"
                      value={provider.nro_doc}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      id="correo_per"
                      label="Correo"
                      fullWidth
                      type="search"
                      name="correo_per"
                      value={provider.correo_per}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      select
                      id="cod_dpt"
                      label="Departamento"
                      fullWidth
                      name="cod_dpt"
                      value={provider.cod_dpt}
                      onChange={handleChange}
                    >
                      {providersCreate.departamento?.map((provider) => (
                        <MenuItem
                          key={provider.cod_dpt}
                          value={provider.cod_dpt}
                        >
                          {provider.des_dpt}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      select
                      id="cod_provi"
                      label="Provincia"
                      fullWidth
                      name="cod_provi"
                      value={provider.cod_provi}
                      onChange={handleChange}
                    >
                      {provincia?.map((provider) => (
                        <MenuItem
                          key={provider.cod_provi}
                          value={provider.cod_provi}
                        >
                          {provider.des_provi}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      select
                      id="cod_dist"
                      label="Distrito"
                      fullWidth
                      name="cod_dist"
                      value={provider.cod_dist}
                      onChange={handleChange}
                    >
                      {distrito?.map((provider) => (
                        <MenuItem
                          key={provider.cod_dist}
                          value={provider.cod_dist}
                        >
                          {provider.des_distrito}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <TextField
                      id="dir_per"
                      label="Direccion"
                      fullWidth
                      type="search"
                      name="dir_per"
                      autoComplete="off"
                      value={provider.dir_per}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <TextField
                      id="estado"
                      label="Estado"
                      value="Activo"
                      fullWidth
                      type="search"
                      name="estado"
                      autoComplete="off"
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <Divider />
              {/* Articulos */}
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <TextField
                      id="nro_telf"
                      label="Telefono"
                      fullWidth
                      name="nro_telf"
                      value={telephones.cod_telf}
                      onChange={handleChangeTelephones}
                    >
                      {providersCreate.telefono?.map((provider) => (
                        <MenuItem key={provider.nro_telf} value={provider.nro_telf}>
                          {provider.nro_telf}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Button
                      variant="contained"
                      fullWidth
                      color="primary"
                      type="submit"
                      size="large"
                      onClick={handleAddTelephone}
                    >
                      Agregar
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Card>
          <CardHeader title="Telefonos" />
          <Divider />
          <TableTelephone /> 
          <Grid container spacing={2} mt={4}>
            <Grid item xs={12} md={3}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                size="large"
                onClick={onSubmit}
              >
                Guardar
              </Button>
            </Grid>
            <Grid item xs={12} md={3}>
              <Button
                variant="outlined"
                fullWidth
                color="secondary"
                size="large"
                onClick={handleAddTelephone}
              >
                Cancelar
              </Button>
            </Grid>
          </Grid>
        </Card>
        <BasicModal />
      </Container>
    </>
  );
 //return <div>Proveedor</div>;
};
export default Proveedor;
