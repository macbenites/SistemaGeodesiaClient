//proveedor
import axios from 'axios';
import { tokenConfig } from 'src/config';

const providerServices = {
  //Create supplier
  create: (provider) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}proveedor`,
      provider,
      tokenConfig
    );
  },
  getProviderProvince: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}proveedor/provincias/${id}`,
      tokenConfig
    );
  },
  getProviderDistrict: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}proveedor/distritos/${id}`,
      tokenConfig
    );
  },
  getAll: () => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}proveedores`,
      tokenConfig
    );
  },
  getProveedoresCreate: () => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}proveedores/create`,
      tokenConfig
    );
  }
};

export default providerServices;
