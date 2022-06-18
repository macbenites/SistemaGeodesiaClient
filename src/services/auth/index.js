import axios from 'axios';

const authServices = {
  login: (user) => {
    return axios.post(`${process.env.REACT_APP_API_URL}login`, user);
  },

  logout: (token) => {
    return axios.get(`${process.env.REACT_APP_API_URL}logout`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};

export default authServices;
