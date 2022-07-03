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
  indexEmployeeDeleted: (value) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}trabajadoresDeleted`,
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
  //destroy trabajador
  deleteById: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}trabajadorDestroy/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },
  //restore trabajador
  restoreById: (id) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}trabajadorRestore/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      }
    );
  },

  //Ver Trabajador
  showEmployee: (id) => {
    return axios.get(`${process.env.REACT_APP_API_URL}trabajador/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
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
  },

  showProfile: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}perfil`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },

  //llamar a la vista enviando solo ID, y el token
  editPass: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}perfil`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  },
  //cambiar contraseña
  updatePass: (passwordEdit) => {    
    return axios.put(`${process.env.REACT_APP_API_URL}passUpdate/${passwordEdit.id}`, passwordEdit, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });
  }
};

export default UsersServices;
