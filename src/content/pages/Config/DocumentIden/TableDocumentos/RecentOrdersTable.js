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
    fetchDocumentos,
    destroyDocumento,
    fetchShowDocumento
} from 'src/redux/slices/config/configSlice';
import ModalCrud from 'src/components/common/Modals/modalCrud';
import EditDocumento from '../Edit';
import { useEffect, useState } from 'react';

const RecentOrdersTable = () => {
  const dispatch = useDispatch();
  const [modal,setModal] = useState(false);
  const [deleted, setDeleted] = useState();
  const documents = useSelector((state) => state.config.documentoIndex);
  const { data } = documents;

  useEffect(() => {
    dispatch(fetchDocumentos({}));
  },[dispatch, modal, deleted]);


  const theme = useTheme();
  const handleDestroy = (id) => {
    dispatch(destroyDocumento(id));
    setDeleted(id);
  };
  const handleUpdate = (id) => {
    dispatch(fetchShowDocumento(id)).then(() => {
      setModal(id);
    });
  };

  return (
    <>
      {modal && (
        <ModalCrud modal={modal} setModal={setModal}>
          <EditDocumento setModal={setModal} />
        </ModalCrud>
      )}

      <Card>
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Tipo movimiento</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((cryptoOrder,index) => {
                return (
                  <TableRow hover key={cryptoOrder.cod_t_doc}>
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
                        {cryptoOrder.tipo_reg_doc}
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
                        {cryptoOrder.des_t_doc}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Edit" arrow>
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: theme.colors.primary.lighter
                            },
                            color: theme.palette.primary.main
                          }}
                          color="inherit"
                          size="small"
                          onClick={() => handleUpdate(cryptoOrder.cod_t_doc)}
                        >
                          <EditTwoToneIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" arrow>
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: theme.colors.error.lighter
                            },
                            color: theme.palette.error.main
                          }}
                          color="inherit"
                          size="small"
                          onClick={() => handleDestroy(cryptoOrder.cod_t_doc)}
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
