import axios from 'axios';

const authServices = {
  login: (user) => {
    return axios.post(`${process.env.REACT_APP_API_URL}login`, user);
  }
};

export default authServices;
