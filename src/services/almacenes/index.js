import axios from 'axios';
import { tokenConfig } from 'src/config';
const almacenesServices = {
  create: (warehouse) => {
    return axios.post(`${process.env.REACT_APP_API_URL}almacen`, warehouse, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  deleteById: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}almacenDestroy/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  updateAlmacen: (warehouse) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}almacenUpdate/${warehouse.cod_almacen}`,
      warehouse,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getAll: (value) => {
    return axios.post(`${process.env.REACT_APP_API_URL}almacenes`, 
    {
      searchText: value
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  showAlmacen: (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}almacenEditar/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
};

export default almacenesServices;
