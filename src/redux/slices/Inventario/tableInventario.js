import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TableContainer,
    Typography,
    useTheme,
    Card,
    Button
  } from '@mui/material';

import { useSelector } from 'react-redux';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const TableInventario = () => {
    const theme = useTheme();
    const { InventarioReport } = useSelector((state) => state.Inventario);
    const doc = new jsPDF();
    doc.autoTable({ html: '#table-Inventario' });
    console.log(InventarioReport)
    return (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          mt={2}
        >
          <Grid container direction="row" alignItems="stretch" m={2}>
            <Grid item xs={12} md={3}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                onClick={() => {
                  doc.save('Inventario.pdf');
                }}
              >
                Exportar PDF
              </Button>
            </Grid>
          </Grid>
          <TableContainer>
            <Table id="table-Inventario">
              <TableHead>
                <TableRow>
                  <TableCell>cod_art</TableCell>
                  <TableCell>des_art</TableCell>
                  <TableCell>des_unid_med</TableCell>
                  <TableCell>stock_almacen</TableCell>
                  <TableCell>valor_total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {InventarioReport.inventario?.map((cryptoOrder, index) => {
                  return (
                    <TableRow hover key={index}>
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
                          {cryptoOrder.des_art}
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
                          {cryptoOrder.des_unid_med}
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
                          {cryptoOrder.stock_almacen}
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
                          {cryptoOrder.valor_total}
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

    export default TableInventario;