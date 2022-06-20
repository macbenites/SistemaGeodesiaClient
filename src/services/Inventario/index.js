import axios from 'axios';

const inventarioServices = {
  getInventario: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}inventario`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  getInventarioReporte: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}inventarioReporte/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  }
};

export default inventarioServices;
