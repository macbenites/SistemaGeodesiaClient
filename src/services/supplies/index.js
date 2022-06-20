import axios from 'axios';

const suppliesServices = {
  //supplies
  create: (supplier) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}registroIngreso`,
      supplier,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },

  createOut: (supplier) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}registroSalida`,
      supplier,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },

  getAllSupplies: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}registroIngreso`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  getSuppliesById: (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}registroIngreso/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  // Selects Form Ingreso
  getSuppliesCreate: () => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}registrosIngresos/create`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },

  //Selects Form Salida

  getSuppliesCreateOut: () => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}registrosSalidas/create`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },

  //getArticles
  getArticlesSupplies: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}registroSalida/articulos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  }
};

export default suppliesServices;
