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

  getEmployee: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}registroIngreso/trabajador/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  getAllSupplies: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}registrosIngresos`,
      {
        searchText: value
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },

  getAllOutputs: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}registrosSalidas`,
      {
        searchText: value
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },

  //SHOW INGRESO - SALIDA
  getSuppliesById: (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}registroIngreso/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  getSuppliesOutById: (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}registroSalida/${id}`, {
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
  // Obtener trabajadores solicitantes
  getApplicants: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}registroSalida/solicita/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  // Obtener trabajadores autorizador
  getAuthorizer: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}registroSalida/autoriza/${id}`,
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
