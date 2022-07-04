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
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchUnits,
    destroyUnit,
    fetchShowUnit
} from 'src/redux/slices/config/configSlice';
import ModalCrud from 'src/components/common/Modals/modalCrud';
import EditUnidMed from '../Edit';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

const RecentOrdersTable = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useLocalStorage('user');
  const [modal,setModal] = useState(false);
  const [deleted, setDeleted] = useState();
  const unidadesmedida = useSelector((state) => state.config.unitIndex);
  const { data } = unidadesmedida;

  useEffect(() => {
    dispatch(fetchUnits());
  },[dispatch, modal, deleted]);


  const theme = useTheme();
  const handleDestroy = (id) => {
    dispatch(destroyUnit(id));
    setDeleted(id);
  };
  const handleUpdate = (id) => {
    dispatch(fetchShowUnit(id)).then(() => {
      setModal(id);
    });
  };

  return (
    <>
      {modal && (
        <ModalCrud modal={modal} setModal={setModal}>
          <EditUnidMed setModal={setModal} />
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
                    {user.permisos.find(
                        (auth) => auth.name === 'editar-unidades de medida'
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
                          onClick={() => handleUpdate(cryptoOrder.cod_unid_med)}
                        >
                          <EditTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      ) : null}

                      {user.permisos.find(
                        (auth) => auth.name === 'eliminar-unidades de medida'
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
                          onClick={() => handleDestroy(cryptoOrder.cod_unid_med)}
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
