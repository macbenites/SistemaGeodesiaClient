import axios from 'axios';

const inventarioServices = {
  getInventario: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}inventario`);
  },
  getInventarioReporte: (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}inventarioReporte/${id}`);
  }
  
};

export default inventarioServices;
