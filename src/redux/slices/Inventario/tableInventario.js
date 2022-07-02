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

  doc.addImage(imgData, 'JPEG', 13, 8, 30, 10);

  doc.setTextColor(0, 0, 80);
  doc.setFont("helvetica","bold");
  doc.setFontSize(16);
  doc.text(String(InventarioReport?.empresa), doc.internal.pageSize.width/2, 13, null, null, 'center');

  doc.setFont('courier');
  doc.setFontSize(12);
  doc.text(String(InventarioReport?.almacen), doc.internal.pageSize.width/2, 18, null, null, 'center');

  doc.setTextColor(200, 150, 0);
  doc.setFont("times","italic");
  doc.setFontSize(12);
  doc.text('Estado inventario', doc.internal.pageSize.width/2, 23, null, null, 'center');

  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica","bold");
  doc.setFontSize(10);
  doc.text("Trabajador: ", 15, 31);

  doc.setFont("helvetica","normal");
  doc.setFontSize(10);
  doc.text(String(InventarioReport?.nom_trabajador), 35, 31);

  doc.setFont("helvetica","bold");
  doc.setFontSize(10);
  doc.text("Generado: ", 124, 31);

  doc.setFont("helvetica","normal");
  doc.setFontSize(10);
  doc.text(String(InventarioReport?.fec_generado), 145, 31);

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
    margin: { top: 38 }
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
