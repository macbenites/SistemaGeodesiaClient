import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Typography,
  useTheme
} from '@mui/material';

import { useSelector } from 'react-redux';

const TableSalida = () => {
  const theme = useTheme();
  const { articlesContainerOut } = useSelector((state) => state.supplies);
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
              <TableCell>Código</TableCell>
              <TableCell>Cantidad</TableCell>
              <TableCell align="right">Glosa</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {articlesContainerOut.map((cryptoOrder) => {
              return (
                <TableRow hover key={cryptoOrder.cod_art}>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {cryptoOrder.cod_art}
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
                      {cryptoOrder.cant_art}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {cryptoOrder.obs_sal}
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

export default TableSalida;
