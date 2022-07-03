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
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProvidersDeleted,
  restoreProvider,
  fetchProviderShow
} from 'src/redux/slices/providers/providerSlice';
import ModalCrud from 'src/components/common/Modals/modalCrud';
import { useEffect, useState } from 'react';
import ShowProveedor from '../Show';

const RecentOrdersTable = () => {
  const dispatch = useDispatch();
  const [modal,setModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [restore, setRestore] = useState();
  const providers = useSelector((state) =>  state.provider.providersIndexDeleted);
  const { data } = providers;

  useEffect(() => {
    dispatch(fetchProvidersDeleted());
  },[dispatch, modal , restore]);

  const theme = useTheme();
   const handleRestore = (id) => {
     dispatch(restoreProvider(id));
     setRestore(id);
   };
   const handleShow = (id) => {
    dispatch(fetchProviderShow(id)).then(() => {
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
          <ShowProveedor setModal={setShowModal} />
        </ModalCrud>
      )}
      <Card>
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Razon social</TableCell>
                <TableCell align="right">Nro. documento</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((cryptoOrder, index) => {
                return (
                  <TableRow hover key={cryptoOrder.cod_prov}>
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
                        {cryptoOrder.proveedor}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {cryptoOrder.ruc}
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
                          onClick={() => handleShow(cryptoOrder.cod_prov)}
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
                          onClick={() => handleRestore(cryptoOrder.cod_prov)}
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
