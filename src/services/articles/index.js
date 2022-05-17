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
    return axios.get(`${process.env.REACT_APP_API_URL}articulo`);
  },

  // Selects Form
  getCategorias: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}categorias`);
  },
  getStates: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}estadoarticulo`);
  },
  getPresentations: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}presentacion`);
  },
  getUnitMeasurement: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}unidadmedida`);
  }
};

export default articleServices;
