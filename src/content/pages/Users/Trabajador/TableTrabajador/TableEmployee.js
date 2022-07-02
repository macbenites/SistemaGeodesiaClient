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

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import {
  destroyEmployee,
  fetchUpdateUser,
  fetchUsers,
  fetchShowEmployee
} from 'src/redux/slices/users/userSlice';
import ModalCrud from 'src/components/common/Modals/modalCrud';

import EditEmployee from '../Edit';
import { useEffect, useState } from 'react';
import ShowEmployee from '../Show';

// const applyFilters = (cryptoOrders, filters) => {
//   return cryptoOrders.filter((cryptoOrder) => {
//     let matches = true;

//     if (filters.status && cryptoOrder.status !== filters.status) {
//       matches = false;
//     }

//     return matches;
//   });
// };

// const applyPagination = (cryptoOrders, page, limit) => {
//   return cryptoOrders.slice(page * limit, page * limit + limit);
// };

const TableEmployee = () => {
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleted, setDeleted] = useState('');
  const { index } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, editModal, showModal, deleted]);

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'completed',
      name: 'Completed'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'failed',
      name: 'Failed'
    }
  ];

  const theme = useTheme();

  const handleDestroy = (id) => {
    dispatch(destroyEmployee(id));
    setDeleted(id);
  };

  const handleUpdate = (id) => {
    dispatch(fetchUpdateUser(id)).then(() => {
      setEditModal(id);
    });
  };

  const handleShow = (id) => {
    dispatch(fetchShowEmployee(id)).then(() => {
      setShowModal(id);
    });
  };

  return (
    <>
      {editModal && (
        <ModalCrud modal={editModal} setModal={setEditModal}>
          <EditEmployee setModal={setEditModal} />
        </ModalCrud>
      )}
      {showModal && (
        <ModalCrud modal={showModal} setModal={setShowModal}>
          <ShowEmployee setModal={setShowModal} />
        </ModalCrud>
      )}

      <Card>
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Nombres Completos</TableCell>
                <TableCell>DNI</TableCell>
                <TableCell align="center">Rol</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {index.trabajadores?.data?.map((cryptoOrder, index) => {
                return (
                  <TableRow hover key={cryptoOrder.idTrabajador}>
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
                        {cryptoOrder.nombre +
                          ' ' +
                          cryptoOrder.ape_paterno +
                          ' ' +
                          cryptoOrder.ape_materno}
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
                        {cryptoOrder.nro_doc}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {cryptoOrder.rol}
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
                          onClick={() => handleShow(cryptoOrder.idTrabajador)}
                        >
                          <VisibilityTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
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
                          onClick={() => handleUpdate(cryptoOrder.idTrabajador)}
                        >
                          <EditTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Eliminar" arrow>
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: theme.colors.error.lighter
                            },
                            color: theme.palette.error.main
                          }}
                          color="inherit"
                          size="small"
                          onClick={() =>
                            handleDestroy(cryptoOrder.idTrabajador)
                          }
                        >
                          <DeleteTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
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

TableEmployee.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

TableEmployee.defaultProps = {
  cryptoOrders: []
};

export default TableEmployee;
