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
import autoTable from 'jspdf-autotable';
import { imgData } from 'src/utils/constant';

const TableKardex = () => {
  const theme = useTheme();
  const { kardexReport } = useSelector((state) => state.kardex);

  const doc = new jsPDF();

  doc.addImage(imgData, 'JPEG', 13, 8, 30, 10);

  doc.setTextColor(0, 0, 80);
  doc.setFont("helvetica","bold");
  doc.setFontSize(16);
  doc.text(String(kardexReport?.empresa), doc.internal.pageSize.width/2, 13, null, null, 'center');

  doc.setFont('courier');
  doc.setFontSize(12);
  doc.text(String(kardexReport?.almacen), doc.internal.pageSize.width/2, 18, null, null, 'center');

  doc.setTextColor(200, 150, 0);
  doc.setFont("times","italic");
  doc.setFontSize(12);
  doc.text('Inventario Valorizado de Almacén', doc.internal.pageSize.width/2, 23, null, null, 'center');

  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica","bold");
  doc.setFontSize(10);
  doc.text("Articulo: ", 15, 31);

  doc.setFontSize(10);
  doc.text("F. Inicio: ", 15, 37);

  doc.setFontSize(10);
  doc.text("F. Final: ", 15, 43);

 // doc.setFont("times");
  doc.setFont("helvetica","normal");
  doc.setFontSize(10);
  doc.text(String(kardexReport?.articulo), 32, 31);
 // doc.setFont("times");
  doc.setFontSize(10);
  doc.text(String(kardexReport?.fec_inicio), 32, 37);
 // doc.setFont("times");
  doc.setFontSize(10);
  doc.text(String(kardexReport?.fec_final), 32, 43);

  doc.setFont("helvetica","bold");
  doc.setFontSize(10);
  doc.text("Trabajador: ", 124, 31);

  doc.setFontSize(10);
  doc.text("Generado: ", 124, 37);

  doc.setFontSize(10);
  doc.text("Metodo: ", 124, 43);

 // doc.setFont("times");
  doc.setFont("helvetica","normal");
  doc.setFontSize(10);
  doc.text(String(kardexReport?.nom_trabajador), 145, 31);
 // doc.setFont("times");
  doc.setFontSize(10);
  doc.text(String(kardexReport?.fec_generado), 145, 37);
 // doc.setFont("times");
  doc.setFontSize(10);
  doc.text("PEPS", 145, 43);

  // doc.setTextColor(0, 0, 170);

  autoTable(doc, { html: '#my-table', margin: { top: 50 } });

  let cant =
    kardexReport.cant_ini?.length > 0
      ? parseInt(kardexReport?.cant_ini[0].cant_ini)
      : 0;
  let valorN =
    kardexReport.val_net_ini?.length > 0
      ? parseInt(kardexReport?.val_net_ini[0].total)
      : 0;

  const sumColumn = (key, value) => {
    let total = 0;
    kardexReport[key]?.map((item) => {
      if (item[value].length > 0) {
        total += parseFloat(item[value]);
      }
    });
    return total.toFixed(2);
  };

  const sumColumnCant = (key, value) => {
    let total = 0;
    kardexReport[key]?.map((item) => {
      if (item[value].length > 0) {
        total += parseInt(item[value]);
      }
    });
    return total;
  };

  console.log(kardexReport);
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
              doc.save('kardex.pdf');
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
              <TableCell>Articulo</TableCell>
              <TableCell>Movimiento</TableCell>
              <TableCell>Fecha</TableCell>
              <TableCell>C. Ing</TableCell>
              <TableCell>P. Ing</TableCell>
              <TableCell>Val Ing</TableCell>
              <TableCell>Cant Sal</TableCell>
              <TableCell>Prec Sal</TableCell>
              <TableCell>Val Sal</TableCell>
              <TableCell>Cant</TableCell>
              <TableCell>Valor N</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell colSpan={9}></TableCell>
              <TableCell>
                {kardexReport.cant_ini?.length > 0
                  ? kardexReport?.cant_ini[0].cant_ini
                  : ' '}
              </TableCell>
              <TableCell>
                {kardexReport.val_net_ini?.length > 0
                  ? kardexReport?.val_net_ini[0].total
                  : ''}
              </TableCell>
            </TableRow>
            {kardexReport.Kardex?.map((cryptoOrder, index) => {
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
                      {cryptoOrder.movimiento}
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
                      {cryptoOrder.FECHA}
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
                      {cryptoOrder.CANT_ING}
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
                      {cryptoOrder.PREC_ING}
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
                      {cryptoOrder.VAL_ING}
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
                      {cryptoOrder.CANT_SAL}
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
                      {cryptoOrder.PREC_SAL}
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
                      {cryptoOrder.VAL_SAL}
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
                      {(cant += cryptoOrder.CANT_ING - cryptoOrder.CANT_SAL)}
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
                      {(valorN += cryptoOrder.VAL_ING - cryptoOrder.VAL_SAL)}
                    </Typography>
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell colSpan={3}></TableCell>
              <TableCell>{sumColumnCant('Kardex', 'CANT_ING')}</TableCell>
              <TableCell>{sumColumn('Kardex', 'PREC_ING')}</TableCell>
              <TableCell>{sumColumn('Kardex', 'VAL_ING')}</TableCell>
              <TableCell>{sumColumnCant('Kardex', 'CANT_SAL')}</TableCell>
              <TableCell>{sumColumn('Kardex', 'PREC_SAL')}</TableCell>
              <TableCell>{sumColumn('Kardex', 'VAL_SAL')}</TableCell>
              <TableCell>{cant}</TableCell>
              <TableCell>{valorN}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default TableKardex;
