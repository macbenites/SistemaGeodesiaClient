//proveedor
import axios from 'axios';

const providerServices = {
  //Create supplier
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
  getAll: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}proveedores`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  getProveedoresCreate: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}proveedores/create`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
};

export default providerServices;
