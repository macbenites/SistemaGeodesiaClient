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
  CardHeader,
  Button
} from '@mui/material';

import Label from 'src/components/Label';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAlmacenes,
  destroyAlmacen,
  fetchShowAlmacen
} from 'src/redux/slices/almacenes/almacenSlice';
import ModalCrud from 'src/components/common/Modals/modalCrud';
import EditAlmacen from '../Edit';
import { useEffect, useState } from 'react';
//Importamos custom Hook
import { useLocalStorage } from 'src/hooks/useLocalStorage';

const RecentOrdersTable = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [deleted, setDeleted] = useState();
  const warehouses = useSelector((state) => state.almacen.almacenIndex);
  const { data } = warehouses;
  //Hook personzalido para obtener el usuario
  const [user, setUser] = useLocalStorage('user');

  useEffect(() => {
    dispatch(fetchAlmacenes());
  }, [dispatch, modal, deleted]);

  const theme = useTheme();
  const handleDestroy = (id) => {
    dispatch(destroyAlmacen(id));
    setDeleted(id);
  };
  const handleUpdate = (id) => {
    dispatch(fetchShowAlmacen(id)).then(() => {
      setModal(id);
    });
  };

  return (
    <>
      {modal && (
        <ModalCrud modal={modal} setModal={setModal}>
          <EditAlmacen setModal={setModal} />
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
              {data?.map((cryptoOrder, index) => {
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
                        {cryptoOrder.des_almacen}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Button
                        sx={{ mt: { xs: 2, md: 0 } }}
                        variant="contained"
                        //endIcon={<AutoDeleteIcon fontSize="small" />}
                        onClick={() =>
                          window.open(
                            cryptoOrder.ubic_almacen,
                            '_blank',
                            'noopener,noreferrer'
                          )
                        }
                      >
                        Ver ubicacion
                      </Button>
                    </TableCell>
                    <TableCell align="right">
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
                          onClick={() => handleUpdate(cryptoOrder.cod_almacen)}
                        >
                          <EditTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      {/* Condicionamos la visualización del boton eliminar
                          solo se cambiará el permiso con el que se quiere comparar
                      */}
                      {user.permisos.find(
                        (auth) => auth.name === 'eliminar-almacenes'
                      ) ? (
                        // Estructura de todo el botón eliminar
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
                              handleDestroy(cryptoOrder.cod_almacen)
                            }
                          >
                            <DeleteTwoToneIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      ) : null}
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
