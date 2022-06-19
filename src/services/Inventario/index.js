import axios from 'axios';
import { tokenConfig } from 'src/config';

const inventarioServices = {
  getInventario: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}inventario`, tokenConfig);
  },
  getInventarioReporte: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}inventarioReporte/${id}`,
      tokenConfig
    );
  }
};

export default inventarioServices;
