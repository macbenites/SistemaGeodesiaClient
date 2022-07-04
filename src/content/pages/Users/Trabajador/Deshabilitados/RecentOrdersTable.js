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
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsersDeleted,
  restoreEmployee,
  fetchShowEmployee
} from 'src/redux/slices/users/userSlice';
import ModalCrud from 'src/components/common/Modals/modalCrud';
import { useEffect, useState } from 'react';
import ShowEmployee from '../ShowDel';

const RecentOrdersTable = () => {
  const dispatch = useDispatch();
  const [modal,setModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [restore, setRestore] = useState();
  const { indexDeleted } = useSelector((state) => state.users);


  useEffect(() => {
    dispatch(fetchUsersDeleted());
  },[dispatch, modal , restore]);

  const theme = useTheme();
   const handleRestore = (id) => {
     dispatch(restoreEmployee(id));
     setRestore(id);
   };

   const handleShow = (id) => {
    dispatch(fetchShowEmployee(id)).then(() => {
      setShowModal(id);
    });
  };
  return (
    <>
      {modal && (
        <ModalCrud modal={modal} setModal={setModal}>
            {/* <EditAlmacen setModal={setModal} /> */}
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
              {indexDeleted.trabajadores?.data?.map((cryptoOrder, index) => {
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
                          onClick={() => handleRestore(cryptoOrder.idTrabajador)}
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
