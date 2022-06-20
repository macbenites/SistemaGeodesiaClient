import axios from 'axios';
import { tokenConfig } from 'src/config';

const configServices = {
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
  //presentacion
  createPresentacion: (presentation) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}presentacion`,
      presentation,
      tokenConfig
    );
  },
  showPresentacion: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}presentacionEditar/${id}`,
      tokenConfig
    );
  },
  deletePresentacion: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}presentacionDestroy/${id}`,
      {},
      tokenConfig
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
