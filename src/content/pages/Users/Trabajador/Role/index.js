import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Grid,
  TextField,
  CardContent,
  CardHeader,
  Divider,
  Box,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText,
  MenuItem
} from '@mui/material';
import { Formik, Form, Field } from 'formik';

const options = [
  {
    label: 'Uno',
    value: 'one'
  },
  {
    label: 'Dos',
    value: 'two'
  },
  {
    label: 'Tres',
    value: 'three'
  }
];

const AssignRole = () => {
  return (
    <>
      <Container maxWidth="md">
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
            <CardHeader title="Asignar Roles" />
            <Divider />
            <CardContent>
              {/* <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="stretch"
                >
                  <TextField
                    select
                    id="des_t_per"
                    label="Tipo de persona"
                    fullWidth
                  />
                </Grid>
              </Grid> */}
              {/* <Box sx={{ display: 'flex' }}>
                <FormControl
                  sx={{ my: 3 }}
                  component="fieldset"
                  variant="standard"
                >
                  <FormLabel component="legend">Asignar roles</FormLabel>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          //   checked={gilad}
                          //   onChange={handleChange}
                          name="gilad"
                        />
                      }
                      label="Gilad Gray"
                    />
                  </FormGroup>
                  <FormHelperText>Be careful</FormHelperText>
                </FormControl>
              </Box> */}
              <Formik initialValues={{ roles: '', acceso: [] }}>
                {({ values, handleChange, handleSubmit, setFieldValue }) => {
                  return (
                    <Form>
                      <TextField
                        select
                        id="roles" /* codigo */
                        label="Roles"
                        fullWidth
                        name="roles" /* codigo */
                        value={values.roles} /* codigo */
                        onChange={handleChange} /* codigo */
                        //   onChange={handleChange}
                        //   error={touched.cod_t_per && Boolean(errors.cod_t_per)}
                        //   helperText={errors.cod_t_per}
                      >
                        {options?.map(
                          (
                            provider /* nombre de la variable que contiene los datos B*/
                          ) => (
                            <MenuItem
                              key={provider.value}
                              value={provider.value}
                            >
                              {provider.label}
                            </MenuItem> /* NOMBRE DEL PARAMETRO A MOSTRAR */
                          )
                        )}
                      </TextField>
                      <FormControl
                        component="fieldset"
                        style={{ display: 'flex' }}
                      >
                        <FormLabel component="legend">Accesos</FormLabel>
                        <FormGroup>
                          {options.map((opt) => (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={values.acceso.includes(opt.value)}
                                  onChange={handleChange}
                                  key={opt.value}
                                  value={opt.value}
                                  name="acceso"
                                />
                              }
                              label={opt.label}
                            />
                          ))}
                        </FormGroup>
                      </FormControl>
                      <h3>Values</h3>
                      <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </Form>
                  );
                }}
              </Formik>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AssignRole;
