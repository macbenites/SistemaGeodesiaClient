import axios from 'axios';

const kardexServices = {
  getKardex: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}kardex`);
  },
  getKardexArticle: (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}kardex/articulos/${id}`);
  },
  postKardex: (kardex) => {
    return axios.post(`${process.env.REACT_APP_API_URL}kardexReporte`, kardex);
  }
};

export default kardexServices;
