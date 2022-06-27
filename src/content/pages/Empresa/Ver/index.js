import {
Container,
Grid,
Card,
CardHeader,
Divider,
CardContent,
Box,
Button
} from '@mui/material';
import {
fetchShowCompany
} from 'src/redux/slices/company/companySlice';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import BasicModal from 'src/components/common/Modals';

const ShowCompa = () => {
const dispatch = useDispatch();
const { showCompanyState } = useSelector(
    (state) => state.company
);

useEffect(() => {
    dispatch(fetchShowCompany());
}, [dispatch]); 

return (
    <>
    <Grid item xs={12}>
        <Card>
            <CardHeader title="Empresa" />
            <Divider />
            <CardContent>
            {/* <form onSubmit={formik.handleSubmit}> */}
                <Grid container spacing={2}>
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
                <Grid item xs={12} md={9} >
                    <FormLabel component="" sx={{ fontWeight: 'bold' }}>
                    Logo: {'\u00A0'}
                    </FormLabel>
                    <img src={ showCompanyState?.empresa?.logo} height="50hv"></img>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Button
                      variant="contained"   
                      color="primary"
                      type="submit"
                      size="large"
                    >
                      Editar
                    </Button>
                  </Grid>

                </Grid>
            {/* </form> */}
            </CardContent>
        </Card>
    </Grid>
    </>
);
};

export default ShowCompa;
