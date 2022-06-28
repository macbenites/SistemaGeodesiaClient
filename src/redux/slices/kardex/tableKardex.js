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

const TableKardex = () => {
  const theme = useTheme();
  const { kardexReport } = useSelector((state) => state.kardex);

  const doc = new jsPDF();
  var imgData = "data:image/png;base64,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";

 doc.addImage(imgData, 'JPEG', 0,0, );
 doc.text (String(kardexReport?.empresa),60,15);
 doc.text (String(kardexReport?.almacen),75,25); 
 doc.text ("Inventario Valorizado de Almacén", 70, 35); 
 doc.text (String(kardexReport?.articulo),40,45); 
 doc.text (String(kardexReport?.fec_inicio),120,45);
 doc.text (String(kardexReport?.fec_final),150,45);
 doc.autoTable({ html: '#my-table',margin: { top: 60} });
  
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
