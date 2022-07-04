import {
  Grid,
  Card,
  CardHeader,
  Divider,
  CardContent,
  useTheme,
  Container,
  Button
} from '@mui/material';

import FormLabel from '@mui/material/FormLabel';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchShowCompany,
  fetchEditCompany
} from 'src/redux/slices/company/companySlice';
import ModalCrud from 'src/components/common/Modals/modalCrud';
import EditCompany from '../Editar';
import { useState, useEffect } from 'react';
import { useLocalStorage } from 'src/hooks/useLocalStorage';


const ShowCompa = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useLocalStorage('user');
  const [modal, setModal] = useState(false);
  const { showCompanyState } = useSelector((state) => state.company);
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchShowCompany());
  }, [dispatch, modal]);

  const handleShow = (id) => {
    dispatch(fetchEditCompany(id)).then(() => {
      setModal(id);
    });
  };

  return (
    <>
      {modal && (
        <ModalCrud modal={modal} setModal={setModal}>
          <EditCompany setModal={setModal} />
        </ModalCrud>
      )}
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={2}
          mt={2}
          mb={2}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Empresa" />
              <Divider />
              <CardContent>
                {/* <form onSubmit={formik.handleSubmit}> */}
                <Grid container spacing={2}>
                  <Grid item xs={12} md={9}>
                    <img
                      src={showCompanyState?.empresa?.logo}
                      height="100hv"
                    ></img>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <FormLabel component="" sx={{}}>
                      {showCompanyState?.empresa?.razon_social}
                    </FormLabel>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <FormLabel component="" sx={{ fontWeight: 'bold' }}>
                      RUC: {'\u00A0'}
                    </FormLabel>
                    <FormLabel component="" sx={{}}>
                      {showCompanyState?.empresa?.nro_doc}
                    </FormLabel>
                  </Grid>
                  <Grid item xs={12} md={9}>
                    <FormLabel component="" sx={{ fontWeight: 'bold' }}>
                      Correo: {'\u00A0'}
                    </FormLabel>
                    <FormLabel component="" sx={{}}>
                      {showCompanyState?.empresa?.correo_per}
                    </FormLabel>
                  </Grid>
                  {user.permisos.find((auth) => auth.name === 'editar-empresa') ? (
                  <Grid item xs={12} md={5}>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      size="large"
                      onClick={() =>
                        handleShow(showCompanyState?.empresa?.cod_emp)
                      }
                    >
                      Editar
                    </Button>
                  </Grid>
                 ) : null}
                </Grid>
                {/* </form> */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ShowCompa;
