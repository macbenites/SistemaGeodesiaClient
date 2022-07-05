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

import Label from 'src/components/Label';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchEditSalida,
  fetchAllOutputs,
  fetchSupplyOut
} from 'src/redux/slices/supplies/suppliesSlice';
import ModalCrud from 'src/components/common/Modals/modalCrud';
import EditSupply from '../Edit';
import { useEffect, useState } from 'react';
import ShowSupplyOut from '../Show';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

const RecentOrdersTable = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useLocalStorage('user');
  const [modal, setModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  //const [deleted, setDeleted] = useState('');
  const salidas = useSelector((state) => state.supplies.outputsIndex);
  const { data } = salidas;
  useEffect(() => {
    dispatch(fetchAllOutputs());
  }, [dispatch, modal, /*deleted,*/ showModal]);

  const theme = useTheme();
  // const handleDestroy = (id) => {
  //   dispatch(destroyProvider(id));
  //   setDeleted(id);
  // };

  const handleUpdate = (id) => {
    dispatch(fetchEditSalida(id)).then(() => {
      setModal(id);
    });
  };

  const handleShow = (id) => {
    dispatch(fetchSupplyOut(id)).then(() => {
      setShowModal(id);
    });
  };

  const getDiffDays = (date1, date2) => {
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <>
      {modal && (
        <ModalCrud modal={modal} setModal={setModal}>
          <EditSupply setModal={setModal} />
        </ModalCrud>
      )}
      {showModal && (
        <ModalCrud modal={showModal} setModal={setShowModal}>
          <ShowSupplyOut setModal={setShowModal} />
        </ModalCrud>
      )}

      <Card>
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Autorizador</TableCell>
                <TableCell>Solicitador</TableCell>
                <TableCell>Almacen</TableCell>
                <TableCell>Tipo transferencia</TableCell>
                <TableCell>Fecha salida</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((cryptoOrder, index) => {
                return (
                  <TableRow hover key={cryptoOrder.cod_reg_sal}>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {index + 1}
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
                        {cryptoOrder.autoriza}
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
                        {cryptoOrder.solicita}
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
                        {cryptoOrder.des_transf}
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
                        {cryptoOrder.fec_sal}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Ver" arrow>
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: theme.colors.primary.lighter
                            },
                            color: theme.palette.secondary.main
                          }}
                          color="inherit"
                          size="small"
                          onClick={() => handleShow(cryptoOrder.cod_reg_sal)}
                        >
                          <VisibilityTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      {user.permisos.find(
                        (auth) => auth.name === 'editar-salidas de insumo'
                      ) &&
                      getDiffDays(
                        new Date(),
                        Date.parse(cryptoOrder.fec_sal)
                      ) <= 1 ? (
                        <Tooltip title="Editar" arrow>
                          <IconButton
                            sx={{
                              '&:hover': {
                                background: theme.colors.primary.lighter
                              },
                              color: theme.palette.primary.main
                            }}
                            color="inherit"
                            size="small"
                            onClick={() =>
                              handleUpdate(cryptoOrder.cod_reg_sal)
                            }
                          >
                            <EditTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      ) : null}
                      {/* <Tooltip title="Eliminar" arrow>
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: theme.colors.error.lighter
                            },
                            color: theme.palette.error.main
                          }}
                          color="inherit"
                          size="small"
                        //   onClick={() => handleDestroy(cryptoOrder.cod_prov)}
                        >
                          <DeleteTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip> */}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <Box p={2}>
        <TablePagination
          component="div"
          count={filteredCryptoOrders.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box> */}
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
