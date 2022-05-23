import axios from 'axios';

const configServices = {
  //Create article
  createCategory: (category) => {
    return axios.post(`${process.env.REACT_APP_API_URL}categoria`, category);
  },
  createUnit: (unit) => {
    return axios.post(`${process.env.REACT_APP_API_URL}unidadMedida`, unit);
  }
};

export default configServices;
