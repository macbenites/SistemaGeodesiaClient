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
    return axios.put(
      `${process.env.REACT_APP_API_URL}articuloDestroy/${id}`,
      {},
      tokenConfig
    );
  },
  updateArticle: (article) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}articuloUpdate/${article.cod_art}`,
      article,
      tokenConfig
    );
  },
  getAll: (searchText) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}articulos`,
      searchText,
      tokenConfig
    );
  },

  showArticle: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}articuloEditar/${id}`,
      tokenConfig
    );
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
