import axios from 'axios';
const DashboardServices = {
  getAllRole: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}roles`,
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

  getUserLogged: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}dashUsers`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  getWareHouse: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}dashAlmacenes`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  getArticlesInput: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}dashIngresoArticulos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },

  getOutputArticles: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}dashSalidaArticulos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  }
};

export default DashboardServices;
