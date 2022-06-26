import axios from 'axios';

const UsersServices = {
  indexEmployee: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}trabajadores`,
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
  createEmployee: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}trabajador/create`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  saveEmployee: (employee) => {
    return axios.post(`${process.env.REACT_APP_API_URL}trabajador`, employee, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  getUpdateEmployee: (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}trabajadorEditar/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  //Update Trabajador
  updateEmployee: (employee) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}trabajadorUpdate/${employee.cod_persona}`,
      employee,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },

  getProvince: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}trabajador/provincias/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },

  getDistrict: (id) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}trabajador/distritos/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  }
};

export default UsersServices;
