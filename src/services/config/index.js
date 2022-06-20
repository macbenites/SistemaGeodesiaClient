import axios from 'axios';

const configServices = {
  //categoria
  createCategory: (category) => {
    return axios.post(`${process.env.REACT_APP_API_URL}categoria`, category, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  showCategory: (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}categoriaEditar/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  deleteCategory: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}categoriaDestroy/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  updateCategory: (category) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}categoriaUpdate/${category.cod_cat}`,
      category,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getAllCategory: (searchText) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}categorias`,
      searchText,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  //unidad de medida
  createUnit: (unit) => {
    return axios.post(`${process.env.REACT_APP_API_URL}unidadMedida`, unit, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  showUnit: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}unidadMedidaEditar/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  deleteUnit: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}unidadMedidaDestroy/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  updateUnit: (unit) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}unidadMedidaUpdate/${unit.cod_unid_med}`,
      unit,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getAllUnit: (searchText) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}unidadesMedida`,
      searchText,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
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
  showPresentacion: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}presentacionEditar/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  deletePresentacion: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}presentacionDestroy/${id}`,
      {},
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
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getAllPresentacion: (searchText) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}presentaciones`,
      searchText,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  //tipo transferencia
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
  showTransferencia: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}tipoTransferenciaEditar/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  deleteTransferencia: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}tipoTransferenciaDestroy/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  updateTransferencia: (transferencia) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}tipoTransferenciaUpdate/${transferencia.cod_t_transf}`,
      transferencia,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getAllTransferencia: (searchText) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}tiposTransferencias`,
      searchText,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  //tipo documento
  createDocumento: (documento) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}tipoDocumentoRegistro`,
      documento,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  showDocumento: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}tipoDocumentoRegistroEditar/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  deleteDocumento: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}tipoDocumentoDestroy/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  updateDocumento: (documento) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}tipoDocumentoRegistroUpdate/${documento.cod_pres}`,
      documento,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getAllDocumento: (searchText) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}tiposDocumentosRegistros`,
      searchText,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  }
};

export default configServices;
