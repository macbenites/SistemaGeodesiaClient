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
  getAll: (searchText) => {
    return axios.post(`${process.env.REACT_APP_API_URL}proveedores`, searchText, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
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
  }
};

export default providerServices;
