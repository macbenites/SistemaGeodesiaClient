import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Card,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Typography,
  useTheme,
  CardHeader
} from '@mui/material';

import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAlmacenesDeleted,
  restoreAlmacen
} from 'src/redux/slices/almacenes/almacenSlice';
import ModalCrud from 'src/components/common/Modals/modalCrud';
import { useEffect, useState } from 'react';

const RecentOrdersTable = () => {
  const dispatch = useDispatch();
  const [modal,setModal] = useState(false);
  const [restore, setRestore] = useState();
  const warehouses = useSelector((state) => state.almacen.almacenIndexDeleted);
  const { data } = warehouses;

  useEffect(() => {
    dispatch(fetchAlmacenesDeleted());
  },[dispatch, modal , restore]);

  const theme = useTheme();
   const handleRestore = (id) => {
     dispatch(restoreAlmacen(id));
     setRestore(id);
   };

  return (
    <>
      {modal && (
        <ModalCrud modal={modal} setModal={setModal}>
            {/* <EditAlmacen setModal={setModal} /> */}
        </ModalCrud>
      )}

      <Card>
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Ubicación</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((cryptoOrder,index) => {
                return (
                  <TableRow hover key={cryptoOrder.cod_almacen}>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {index+1}
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
                        {cryptoOrder.des_almacen}
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
                        {cryptoOrder.ubic_almacen}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Habilitar" arrow>
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: theme.colors.error.lighter
                            },
                            color: theme.palette.error.main
                          }}
                          color="inherit"
                          size="small"
                          onClick={() => handleRestore(cryptoOrder.cod_almacen)}
                        >
                          <RestoreFromTrashIcon color="action" fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

RecentOrdersTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

RecentOrdersTable.defaultProps = {
  cryptoOrders: []
};

export default RecentOrdersTable;
