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

const TablaRol = () => {
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleted, setDeleted] = useState('');
  const { rolesIndex } = useSelector((state) => state.role);

  useEffect(() => {
    dispatch(fetchRoles());
  }, [dispatch, editModal, showModal, deleted]);

  const theme = useTheme();

  const handleDestroy = (id) => {
    dispatch(destroyRole(id));
    setDeleted(id);
  };

  const handleUpdate = (id) => {
    dispatch(fetchUpdateRole(id)).then(() => {
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
        </ModalCrud>
      )}
      {showModal && (
        <ModalCrud modal={showModal} setModal={setShowModal}>
          {/* <ShowEmployee setModal={setShowModal} /> */}
        </ModalCrud>
      )}

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
                        //   onClick={() => handleUpdate(cryptoOrder.id)}
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
                        //   onClick={() =>handleDestroy(cryptoOrder.id)}
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
