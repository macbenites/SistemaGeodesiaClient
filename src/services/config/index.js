import axios from 'axios';

const configServices = {
  createCategory: (category) => {
    return axios.post(`${process.env.REACT_APP_API_URL}categoria`, category, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  createUnit: (unit) => {
    return axios.post(`${process.env.REACT_APP_API_URL}unidadMedida`, unit, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  //presentacion
  createPresentacion: (presentation) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}presentacion`,
      presentation,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  updatePresentacion: (presentation) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}presentacionUpdate/${presentation.cod_pres}`,
      presentation,
      tokenConfig
    );
  },
  getAllPresentacion: (searchText) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}presentaciones`,
      searchText,
      tokenConfig
    );
  },
  //transferencia
  createTransferencia: (transferencia) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}tipoTransferencia`,
      transferencia,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  createDocumento: (documento) => {
    //
    return axios.post(
      `${process.env.REACT_APP_API_URL}tipoDocumentoRegistro`,
      documento,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    ); //
  } //
};

export default configServices;
