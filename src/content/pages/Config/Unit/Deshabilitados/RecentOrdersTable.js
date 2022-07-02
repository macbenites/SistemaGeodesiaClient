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
  fetchUnitsDeleted,restoreUnit
} from 'src/redux/slices/config/configSlice';
import ModalCrud from 'src/components/common/Modals/modalCrud';
import { useEffect, useState } from 'react';

const RecentOrdersTable = () => {
  const dispatch = useDispatch();
  const [modal,setModal] = useState(false);
  const [restore, setRestore] = useState();
  const unidadesmedida = useSelector((state) => state.config.unitIndexDeleted);
  const { data } = unidadesmedida;

  useEffect(() => {
    dispatch(fetchUnitsDeleted());
  },[dispatch, modal , restore]);

  const theme = useTheme();
   const handleRestore = (id) => {
     dispatch(restoreUnit(id));
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
                <TableCell>Id</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Descripción corta</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((cryptoOrder,index) => {
                return (
                  <TableRow hover key={cryptoOrder.cod_unid_med}>
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
                        {cryptoOrder.prefijo_unid_med}
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
                          onClick={() => handleRestore(cryptoOrder.cod_unid_med)}
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
