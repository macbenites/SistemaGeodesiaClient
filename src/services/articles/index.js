import axios from 'axios';
import { tokenConfig } from 'src/config';
const articleServices = {
  //Create article
  create: (article) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}articles`,
      article,
      tokenConfig
    );
  },
  deleteById: (id) => {
    return axios.delete(`${process.env.REACT_APP_API_URL}articulo/${id}`);
  },
  getAll: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}articulos`, tokenConfig);
  },

  // Selects Form
  getArticulosCreate: () => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}articulos/create`,
      tokenConfig
    );
  }
};

export default articleServices;
