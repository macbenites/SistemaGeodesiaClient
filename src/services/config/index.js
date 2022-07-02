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
  restoreCategory: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}categoriaRestore/${id}`,
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
  getAllCategory: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}categorias`,
      {
        searchText: value
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getAllCategoryDeleted: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}categoriasDeleted`,
      {
        searchText: value
      },
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
  restoreUnit: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}unidadMedidaRestore/${id}`,
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
  getAllUnit: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}unidadesMedida`,
      {
        searchText: value
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getAllUnitDeleted: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}unidadesMedidaDeleted`,
      {
        searchText: value
      },
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
  restorePresentacion: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}presentacionRestore/${id}`,
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
  getAllPresentacion: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}presentaciones`,
      {
        searchText: value
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getAllPresentacionDeleted: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}presentacionesDeleted`,
      {
        searchText: value
      },
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
  restoreTransferencia: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}tipoTransferenciaRestore/${id}`,
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
  getAllTransferencia: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}tiposTransferencias`,
      {
        searchText: value
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getAllTransferenciaDeleted: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}tiposTransferenciasDeleted`,
      {
        searchText: value
      },
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
  restoreDocumento: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}tipoDocumentoRestore/${id}`,
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
      `${process.env.REACT_APP_API_URL}tipoDocumentoRegistroUpdate/${documento.cod_t_doc}`,
      documento,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getAllDocumento: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}tiposDocumentosRegistros`,
      {
        searchText: value
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getAllDocumentoDeleted: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}tiposDocumentosRegistrosDeleted`,
      {
        searchText: value
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  }
};

export default configServices;
