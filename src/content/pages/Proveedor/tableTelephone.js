import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableContainer,
    Select,
    MenuItem,
    Typography,
    useTheme,
    CardHeader
  } from '@mui/material';

  import { useSelector } from 'react-redux';

  const TableTelephone = () => {
    const theme = useTheme();
    const { telephonesContainer } = useSelector((state) => state.providers);
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        mt={2}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Codigo</TableCell>
                <TableCell>Telefono</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {telephonesContainer.map((cryptoOrder) => {
                return (
                  <TableRow hover key={cryptoOrder.cod_telf}>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {cryptoOrder.cod_telf}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {cryptoOrder.nro_telf}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    );
  };
  
  export default TableTelephone;