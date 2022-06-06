import axios from 'axios';

const configServices = {
  //Create article
  createCategory: (category) => {
    return axios.post(`${process.env.REACT_APP_API_URL}categoria`, category);
  },
  createUnit: (unit) => {
    return axios.post(`${process.env.REACT_APP_API_URL}unidadMedida`, unit);
  },
  createPresentacion: (presentation) => {
    return axios.post(`${process.env.REACT_APP_API_URL}presentacion`, presentation);
  },
  createTransferencia: (transferencia) => {
    return axios.post(`${process.env.REACT_APP_API_URL}tipoTransferencia`, transferencia);
  },
  createDocumento: (documento) => {//
    return axios.post(`${process.env.REACT_APP_API_URL}tipoDocumentoRegistro`, documento);//
  }//
};

export default configServices;
