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

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { imgData } from 'src/utils/constant';

const TableInventario = ({ InventarioReport }) => {
  const theme = useTheme();
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
  doc.text(
    'Fecha Generada: ' + String(InventarioReport?.fec_generado),
    105,
    45
  );

  autoTable(doc, {
    head: [['Código', 'Descripción', 'Unidad Medida', 'Stock', 'Valor Neto']],
    body: InventarioReport?.inventario.map((object) => {
      return [
        object.cod_art,
        object.des_art,
        object.des_unid_med,
        object.stock_almacen,
        object.valor_total
      ];
    }),
    margin: { top: 60 }
  });

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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cod. Articulo</TableCell>
              <TableCell align="center">Descripción</TableCell>
              <TableCell align="center">Unidad Medida</TableCell>
              <TableCell align="center">Stock</TableCell>
              <TableCell align="right">Valor Total</TableCell>
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
                      align="center"
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
                      align="center"
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
                      align="center"
                    >
                      {cryptoOrder.stock_almacen + ' '}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      align="right"
                      noWrap
                    >
                      {cryptoOrder.valor_total}
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
