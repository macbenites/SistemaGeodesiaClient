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
import { fetchUpdateUser, fetchUsers } from 'src/redux/slices/users/userSlice';
import ModalCrud from 'src/components/common/Modals/modalCrud';

import EditEmployee from '../Edit';
import { useEffect, useState } from 'react';

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
  const [modal, setModal] = useState(false);
  const [deleted, setDeleted] = useState('');
  const { index } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, modal, deleted]);

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
    dispatch(destroyArticle(id));
    setDeleted(id);
  };

  const handleUpdate = (id) => {
    dispatch(fetchUpdateUser(id)).then(() => {
      setModal(id);
    });
  };

  return (
    <>
      {modal && (
        <ModalCrud modal={modal} setModal={setModal}>
          <EditEmployee setModal={setModal} />
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
                        71423551
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
                      <Tooltip title="Edit Order" arrow>
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: theme.colors.primary.lighter
                            },
                            color: theme.palette.secondary.main
                          }}
                          color="inherit"
                          size="small"
                          onClick={() => handleUpdate(cryptoOrder.idTrabajador)}
                        >
                          <VisibilityTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit Order" arrow>
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
                      <Tooltip title="Delete Order" arrow>
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
