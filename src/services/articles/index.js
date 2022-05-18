import axios from 'axios';

const articleServices = {
  //Create article
  create: (article) => {
    return axios.post(`${process.env.REACT_APP_API_URL}articulo`, article);
  },
  deleteById: (id) => {
    return axios.delete(`${process.env.REACT_APP_API_URL}articulo/${id}`);
  },
  getAll: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}articulos`);
  },

  // Selects Form
  getArticulosCreate: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}articulos/create`);
  }
};

export default articleServices;
