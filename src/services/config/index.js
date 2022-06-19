import axios from 'axios';
import { tokenConfig } from 'src/config';

const configServices = {
  //Create article
  createCategory: (category) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}categoria`,
      category,
      tokenConfig
    );
  },
  createUnit: (unit) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}unidadMedida`,
      unit,
      tokenConfig
    );
  },
  createPresentacion: (presentation) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}presentacion`,
      presentation,
      tokenConfig
    );
  },
  createTransferencia: (transferencia) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}tipoTransferencia`,
      transferencia,
      tokenConfig
    );
  },
  createDocumento: (documento) => {
    //
    return axios.post(
      `${process.env.REACT_APP_API_URL}tipoDocumentoRegistro`,
      documento,
      tokenConfig
    ); //
  } //
};

export default configServices;
