import axios from 'axios';

const articleServices = {
  //Create article
  create: (article) => {
    return axios.post(`${process.env.REACT_APP_API_URL}articulo`, article, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  deleteById: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}articuloDestroy/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  restoreById: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}articuloRestore/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  updateArticle: (article) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}articuloUpdate/${article.cod_art}`,
      article,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getAll: (value) => {
    return axios.post(`${process.env.REACT_APP_API_URL}articulos`,
    {
      searchText: value
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  getAllDeleted: (value) => {
    return axios.post(`${process.env.REACT_APP_API_URL}articulosDeleted`,
    {
      searchText: value
    },
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  showArticle: (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}articuloEditar/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  // Selects Form
  getArticulosCreate: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}articulos/create`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
};

export default articleServices;
