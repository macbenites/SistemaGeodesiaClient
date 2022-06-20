import axios from 'axios';
import { tokenConfig } from 'src/config';

const configServices = {
  //categoria
  createCategory: (category) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}categoria`,
      category,
      tokenConfig
    );
  },
  showCategory: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}categoriaEditar/${id}`,
      tokenConfig
    );
  },
  deleteCategory: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}categoriaDestroy/${id}`,
      {},
      tokenConfig
    );
  },
  updateCategory: (category) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}categoriaUpdate/${category.cod_cat}`,
      category,
      tokenConfig
    );
  },
  getAllCategory: (searchText) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}categorias`,
      searchText,
      tokenConfig
    );
  },
  //unidad de medida
  createUnit: (unit) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}unidadMedida`,
      unit,
      tokenConfig
    );
  },
  showUnit: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}unidadMedidaEditar/${id}`,
      tokenConfig
    );
  },
  deleteUnit: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}unidadMedidaDestroy/${id}`,
      {},
      tokenConfig
    );
  },
  updateUnit: (unit) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}unidadMedidaUpdate/${unit.cod_unid_med}`,
      unit,
      tokenConfig
    );
  },
  getAllUnit: (searchText) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}unidadesMedida`,
      searchText,
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
  //tipo transferencia
  createTransferencia: (transferencia) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}tipoTransferencia`,
      transferencia,
      tokenConfig
    );
  },
  showTransferencia: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}tipoTransferenciaEditar/${id}`,
      tokenConfig
    );
  },
  deleteTransferencia: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}tipoTransferenciaDestroy/${id}`,
      {},
      tokenConfig
    );
  },
  updateTransferencia: (transferencia) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}tipoTransferenciaUpdate/${transferencia.cod_t_transf}`,
      transferencia,
      tokenConfig
    );
  },
  getAllTransferencia: (searchText) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}tiposTransferencias`,
      searchText,
      tokenConfig
    );
  },
  //tipo documento
  createDocumento: (documento) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}tipoDocumentoRegistro`,
      documento,
      tokenConfig
    );
  },
  showDocumento: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}tipoDocumentoRegistroEditar/${id}`,
      tokenConfig
    );
  },
  deleteDocumento: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}tipoDocumentoDestroy/${id}`,
      {},
      tokenConfig
    );
  },
  updateDocumento: (documento) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}tipoDocumentoRegistroUpdate/${documento.cod_pres}`,
      documento,
      tokenConfig
    );
  },
  getAllDocumento: (searchText) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}tiposDocumentosRegistros`,
      searchText,
      tokenConfig
    );
  },

};

export default configServices;
