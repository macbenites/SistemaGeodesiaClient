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
  fetchUpdateRole,
  fetchRoles,
  fetchShowRole,
  destroyRole
} from 'src/redux/slices/roles/roleSlice';
import ModalCrud from 'src/components/common/Modals/modalCrud';

// import EditEmployee from '../Edit';
import { useEffect, useState } from 'react';
// import ShowEmployee from '../Show';
import RoleFormEdit from '../Edit';
import BasicModal from 'src/components/common/Modals';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

const TablaRol = () => {
  const dispatch = useDispatch();
  //Creamos un estado local para el modal
  const [user, setUser] = useLocalStorage('user');
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleted, setDeleted] = useState('');
  const { destroy, rolesIndex } = useSelector((state) => state.role);

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch, editModal, showModal, deleted]);

  const theme = useTheme();

  const handleDestroy = (id) => {
    dispatch(destroyRole(id)).then(() => {
      setDeleted(id);
      //Linea agregada para mostrar modal de confirmacion
      setModal(true);
    });
  };

  const handleUpdate = (id) => {
    dispatch(fetchShowRole(id)).then(() => {
      setEditModal(id);
    });
  };

  const handleShow = (id) => {
    dispatch(fetchShowRole(id)).then(() => {
      setShowModal(id);
    });
  };

  return (
    <>
      {editModal && (
        <ModalCrud modal={editModal} setModal={setEditModal}>
          {/* <EditEmployee setModal={setEditModal} /> */}
          <RoleFormEdit setModal={setEditModal} />
        </ModalCrud>
      )}
      {showModal && (
        <ModalCrud modal={showModal} setModal={setShowModal}>
          {/* <ShowEmployee setModal={setShowModal} /> */}
        </ModalCrud>
      )}
      {/* Mostramos el mensaje de confirmacion de eliminacion */}
      <BasicModal modal={modal} setModal={setModal} message={destroy} />
      <Card>
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Rol</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rolesIndex?.data?.map((cryptoOrder, index) => {
                return (
                  <TableRow hover key={cryptoOrder.id}>
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
                        {cryptoOrder.name}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                  {user.permisos.find(
                        (auth) => auth.name === 'editar-roles'
                      ) ? (
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
                          onClick={() => handleUpdate(cryptoOrder.id)}
                        >
                          <EditTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      ) : null}
                      {user.permisos.find(
                        (auth) => auth.name === 'eliminar-roles'
                      ) ? (
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
                          onClick={() => handleDestroy(cryptoOrder.id)}
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

TablaRol.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

TablaRol.defaultProps = {
  cryptoOrders: []
};

export default TablaRol;
