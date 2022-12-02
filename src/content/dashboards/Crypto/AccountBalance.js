import {
  Button,
  Card,
  Box,
  Grid,
  Typography,
  Hidden,
  Avatar,
  Divider,
  ListItem,
  ListItemText,
  List,
  ListItemAvatar,
  TextField,
  MenuItem
} from '@mui/material';

import { styled } from '@mui/material/styles';
import TrendingUp from '@mui/icons-material/TrendingUp';
import AccountBalanceChart from './AccountBalanceChart';
import Text from 'src/components/Text';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchOutputArticles,
  fetchWareHouse,
  fetchArticlesInput,
  fetchUsersLogged
} from 'src/redux/slices/dashboard/dashboardSlice';
import { useEffect, useState } from 'react';

const AccountBalanceChartWrapper = styled(AccountBalanceChart)(
  () => `
      width: 100%;
      height: 100%;
`
);
const AvatarSuccess = styled(Avatar)(
  ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

function AccountBalance() {
  const dispatch = useDispatch();
  const [searchOutput, setSearchOutput] = useState({
    searchIn: ''
  });
  const [searchInput, setSearchInput] = useState({
    search: ''
  });

  const handleChangeSearchOutput = (event) => {
    setSearchOutput({
      ...searchOutput,
      search: event.target.value
    });
  };

  const handleSubmitSearchOutput = (event) => {
    event.preventDefault();
    dispatch(fetchOutputArticles(searchOutput.search));
  };

  const handleSubmitSearchInput = (event) => {
    event.preventDefault();
    dispatch(fetchArticlesInput(searchInput.searchIn));
  };

  const handleChangeSearchInput = (event) => {
    setSearchInput({
      ...searchInput,
      searchIn: event.target.value
    });
  };

  useEffect(() => {
    dispatch(fetchWareHouse());
    dispatch(fetchUsersLogged());
  }, [dispatch]);

  const { articlesOut, userDashboard, wareHouse, articlesIn } = useSelector(
    (state) => state.dashboard
  );
  const cryptoBalance = {
    datasets: [
      {
        data: articlesOut.articulosSalida?.map((article) => article.cantidad),
        backgroundColor: [
          '#ff9900',
          '#1c81c2',
          '#333',
          '#5c6ac8',
          '#1c2ae0',
          '#8AC332',
          '#BB7BED',
          '#F1F94F',
          '#FA26B7'
        ]
      }
    ],
    labels: articlesOut.articulosSalida?.map((article) => article.articulo)
  };

  const inputArticles = {
    datasets: [
      {
        data: articlesIn.articulosIngreso?.map((article) => article.cantidad),
        backgroundColor: [
          '#ff9900',
          '#1c81c2',
          '#333',
          '#5c6ac8',
          '#1c2ae0',
          '#8AC332',
          '#BB7BED',
          '#F1F94F',
          '#FA26B7'
        ]
      }
    ],
    labels: articlesIn.articulosIngreso?.map((article) => article.articulo)
  };

  return (
    <>
      {/* Ingreso */}
      <Card>
        <iframe
          title="PowerbiGeodesia - Página 1"
          width="100%"
          height="800"
          src="https://app.powerbi.com/view?r=eyJrIjoiOGE4YjhiMDUtMzJmNy00YTIzLWFjZjQtODgxOTllMDBmNTliIiwidCI6ImM0YTY2YzM0LTJiYjctNDUxZi04YmUxLWIyYzI2YTQzMDE1OCIsImMiOjR9"
          frameborder="0"
          allowFullScreen="true"
          
        ></iframe>
        {/* <Grid spacing={0} container>
          <Grid item xs={12} md={6}>
            <Grid item xs={12} md={12}>
              <Box display="flex" flexDirection="row" alignItems="center">
                <Box p={2}>
                  <Typography variant="h4">
                    Usuarios Logueados Actualmente :{' '}
                    {userDashboard?.usuariosOn?.length > 0
                      ? userDashboard?.usuariosOn[0].cantidad
                      : 0}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Box p={4}>
              <Typography sx={{ pb: 3 }} variant="h4">
                Articulos Ingresados (30 días)
              </Typography>
              <Box>
                <Box display="flex" sx={{ py: 4 }} alignItems="center">
                  <TextField
                    select
                    variant="outlined"
                    label="Almacenes"
                    value={searchInput.searchIn}
                    name="searchIn"
                    fullWidth
                    onChange={handleChangeSearchInput}
                  >
                    {wareHouse.almacen?.map((ware) => (
                      <MenuItem key={ware.cod_almacen} value={ware.cod_almacen}>
                        {ware.des_almacen}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Box>
              <Grid container spacing={3}>
                <Grid sm item>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSubmitSearchInput}
                  >
                    Generar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Divider />
          Separación
          <Grid
            sx={{ position: 'relative' }}
            display="flex"
            alignItems="center"
            item
            xs={12}
            md={6}
          >
            <Hidden mdDown>
              <Divider absolute orientation="vertical" />
            </Hidden>
            {articlesIn?.articulosIngreso?.length > 0 && (
              <>
                <Box p={4} flex={1}>
                  <Grid container spacing={0}>
                    <Grid
                      xs={12}
                      sm={5}
                      item
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box style={{ height: '160px' }}>
                        <AccountBalanceChartWrapper data={inputArticles} />
                      </Box>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={7}
                      item
                      display="flex"
                      alignItems="center"
                    >
                      <List disablePadding sx={{ width: '100%' }}>
                        {articlesIn.articulosIngreso?.map((article, index) => (
                          <>
                            <ListItem disableGutters>
                              <ListItemAvatar
                                sx={{
                                  minWidth: '46px',
                                  display: 'flex',
                                  alignItems: 'center'
                                }}
                              >
                                <Box
                                  sx={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    backgroundColor: `${cryptoBalance.datasets[0].backgroundColor[index]}`
                                  }}
                                />
                              </ListItemAvatar>
                              <ListItemText
                                primary={article.articulo}
                                primaryTypographyProps={{
                                  variant: 'h5',
                                  noWrap: false
                                }}
                              />
                              <Box>
                                <Typography align="right" variant="h4" noWrap>
                                  {article.cantidad}
                                </Typography>
                              </Box>
                            </ListItem>
                          </>
                        ))}
                      </List>
                    </Grid>
                  </Grid>
                </Box>
              </>
            )}
          </Grid>
        </Grid> */}
      </Card>
      {/* Ingreso
      <Card>
        <Grid spacing={0} container>
          <Grid item xs={12} md={6}>
            <Box p={4}>
              <Typography sx={{ pb: 3 }} variant="h4">
                Articulos retirados (30 días)
              </Typography>
              <Box>
                <Box display="flex" sx={{ py: 4 }} alignItems="center">
                  <TextField
                    select
                    variant="outlined"
                    label="Almacenes"
                    value={searchOutput.search}
                    name="search"
                    fullWidth
                    onChange={handleChangeSearchOutput}
                  >
                    {wareHouse.almacen?.map((ware) => (
                      <MenuItem key={ware.cod_almacen} value={ware.cod_almacen}>
                        {ware.des_almacen}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              </Box>
              <Grid container spacing={3}>
                <Grid sm item>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSubmitSearchOutput}
                  >
                    Generar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Separación 
          <Grid
            sx={{ position: 'relative' }}
            display="flex"
            alignItems="center"
            item
            xs={12}
            md={6}
          >
            <Hidden mdDown>
              <Divider absolute orientation="vertical" />
            </Hidden>
            {articlesOut?.articulosSalida?.length > 0 && (
              <>
                <Box p={4} flex={1}>
                  <Grid container spacing={0}>
                    <Grid
                      xs={12}
                      sm={5}
                      item
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box style={{ height: '160px' }}>
                        <AccountBalanceChartWrapper data={cryptoBalance} />
                      </Box>
                    </Grid>
                    <Grid
                      xs={12}
                      sm={7}
                      item
                      display="flex"
                      alignItems="center"
                    >
                      <List disablePadding sx={{ width: '100%' }}>
                        {articlesOut.articulosSalida?.map((article, index) => (
                          <>
                            <ListItem disableGutters>
                              <ListItemAvatar
                                sx={{
                                  minWidth: '46px',
                                  display: 'flex',
                                  alignItems: 'center'
                                }}
                              >
                                <Box
                                  sx={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    backgroundColor: `${cryptoBalance.datasets[0].backgroundColor[index]}`
                                  }}
                                />
                              </ListItemAvatar>
                              <ListItemText
                                primary={article.articulo}
                                primaryTypographyProps={{
                                  variant: 'h5',
                                  noWrap: false
                                }}
                              />
                              <Box>
                                <Typography align="right" variant="h4" noWrap>
                                  {article.cantidad}
                                </Typography>
                              </Box>
                            </ListItem>
                          </>
                        ))}
                      </List>
                    </Grid>
                  </Grid>
                </Box>
              </>
            )}
          </Grid>
        </Grid>
      </Card> */}
    </>
  );
}

export default AccountBalance;
