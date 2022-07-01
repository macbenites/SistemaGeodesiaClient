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
import { imgData } from 'src/utils/constant';

const TableInventario = () => {
  const theme = useTheme();

  const { InventarioReport } = useSelector((state) => state.Inventario);
  const doc = new jsPDF();

  doc.addImage(imgData, 'JPEG', 10, 10);
  doc.setTextColor(0, 0, 170);
  doc.setFont('courier');
  doc.setFontSize(20);
  doc.text(String(InventarioReport?.empresa), 75, 20);

  doc.setTextColor(0, 0, 170);
  doc.setFont('courier');
  doc.setFontSize(15);
  doc.text(String(InventarioReport?.almacen), 75, 30);

  doc.setTextColor(0, 0, 170);
  doc.setFont('courier');
  doc.setFontSize(15);
  doc.text(String(InventarioReport?.nom_trabajador), 40, 55);

  doc.setTextColor(0, 0, 170);
  doc.setFont('courier');
  doc.setFontSize(15);
  doc.text('Documento Inventario', 40, 45);

  doc.setTextColor(0, 0, 170);
  doc.setFont('courier');
  doc.setFontSize(15);
  doc.text ("Fecha Generada: " + String(InventarioReport?.fec_generado), 105, 45);

  doc.autoTable({ html: '#my-table', margin: { top: 60 } });

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
        <Table id="my-table">
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
                    ></Typography>
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
