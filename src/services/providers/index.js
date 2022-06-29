//proveedor
import axios from 'axios';

const providerServices = {
  create: (provider) => {
    return axios.post(`${process.env.REACT_APP_API_URL}proveedor`, provider, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  getProviderProvince: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}proveedor/provincias/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getProviderDistrict: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}proveedor/distritos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getAll: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}proveedores`,
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

  updateProvider: (provider) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}proveedorUpdate/${provider.cod_prov}`,
      provider,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  //carga vista editar proveedor
  showProvider: (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}proveedorEditar/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  deleteById: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}proveedorDestroy/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },

  //precargados
  getProveedoresCreate: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}proveedor/create`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  //VER SHOW proveedor
  getProveedor: (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}proveedor/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
};

export default providerServices;
