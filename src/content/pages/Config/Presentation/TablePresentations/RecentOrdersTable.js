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
  fetchPresentaciones,
  destroyPresentacion,
  fetchShowPresentacion
} from 'src/redux/slices/config/configSlice';
import ModalCrud from 'src/components/common/Modals/modalCrud';
import EditPresentacion from '../Edit';
import { useEffect, useState } from 'react';

const RecentOrdersTable = () => {
  const dispatch = useDispatch();
  const [modal,setModal] = useState(false);
  const [deleted, setDeleted] = useState();
  const presentations = useSelector((state) => state.config.presentationIndex);
  const { data } = presentations;

  useEffect(() => {
    dispatch(fetchPresentaciones({}));
  },[dispatch, modal, deleted]);


  const theme = useTheme();
  const handleDestroy = (id) => {
    dispatch(destroyPresentacion(id));
    setDeleted(id);
  };
  const handleUpdate = (id) => {
    dispatch(fetchShowPresentacion(id)).then(() => {
      setModal(id);
    });
  };

  return (
    <>
      {modal && (
        <ModalCrud modal={modal} setModal={setModal}>
          <EditPresentacion setModal={setModal} />
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
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((cryptoOrder,index) => {
                return (
                  <TableRow hover key={cryptoOrder.cod_pres}>
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
                        {cryptoOrder.des_pres}
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
                          onClick={() => handleUpdate(cryptoOrder.cod_pres)}
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
                          onClick={() => handleDestroy(cryptoOrder.cod_pres)}
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

RecentOrdersTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

RecentOrdersTable.defaultProps = {
  cryptoOrders: []
};

export default RecentOrdersTable;
