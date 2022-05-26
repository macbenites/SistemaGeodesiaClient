import axios from 'axios';

const suppliesServices = {
  //supplies
  create: (supplier) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}registroIngreso`,
      supplier
    );
  },

  getAllSupplies: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}registroIngreso`);
  },

  getSuppliesById: (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}registroIngreso/${id}`);
  },

  // Selects Form Ingreso
  getSuppliesCreate: () => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}registrosIngresos/create`
    );
  },

  //Selects Form Salida

  getSuppliesCreateOut: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}registrosSalidas/create`);
  }
};

export default suppliesServices;
