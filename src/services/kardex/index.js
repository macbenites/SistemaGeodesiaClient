import axios from 'axios';
import { tokenConfig } from 'src/config';

const kardexServices = {
  getKardex: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}kardex`, tokenConfig);
  },
  getKardexArticle: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}kardex/articulos/${id}`,
      tokenConfig
    );
  },
  postKardex: (kardex) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}kardexReporte`,
      kardex,
      tokenConfig
    );
  }
};

export default kardexServices;
