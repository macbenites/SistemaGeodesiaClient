//proveedor
import axios from 'axios';

const providerServices = {
    //Create supplier
    create: (provider) => {
      return axios.post(`${process.env.REACT_APP_API_URL}proveedor`, provider);
    },
    getProviderProvince: (id) => {
        return axios.get(`${process.env.REACT_APP_API_URL}proveedor/provincias/${id}`);
    },
    getProviderDistrict: (id) => {
        return axios.get(`${process.env.REACT_APP_API_URL}proveedor/distritos/${id}`);
    },
    getAll: () => {
      return axios.get(`${process.env.REACT_APP_API_URL}proveedores`);
    }, 
    getProveedoresCreate: () => {
      return axios.get(`${process.env.REACT_APP_API_URL}proveedores/create`);
    }
};
  
export default providerServices;