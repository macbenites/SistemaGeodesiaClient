import axios from 'axios';
import { tokenConfig } from 'src/config';

const suppliesServices = {
  //supplies
  create: (supplier) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}registroIngreso`,
      supplier,
      tokenConfig
    );
  },

  createOut: (supplier) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}registroSalida`,
      supplier,
      tokenConfig
    );
  },

  getAllSupplies: () => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}registroIngreso`,
      tokenConfig
    );
  },

  getSuppliesById: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}registroIngreso/${id}`,
      tokenConfig
    );
  },

  // Selects Form Ingreso
  getSuppliesCreate: () => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}registrosIngresos/create`,
      tokenConfig
    );
  },

  //Selects Form Salida

  getSuppliesCreateOut: () => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}registrosSalidas/create`,
      tokenConfig
    );
  },

  //getArticles
  getArticlesSupplies: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}registroSalida/articulos/${id}`,
      tokenConfig
    );
  }
};

export default suppliesServices;
