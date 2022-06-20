import axios from 'axios';

const kardexServices = {
  getKardex: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}kardex`, tokenConfig);
  },
  getKardexArticle: (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}kardex/articulos/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  postKardex: (kardex) => {
    return axios.post(`${process.env.REACT_APP_API_URL}kardexReporte`, kardex, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
};

export default kardexServices;
