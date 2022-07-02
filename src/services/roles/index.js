import axios from 'axios';
const RolesServices = {
    //index
    getAllRole: (value) => {
        return axios.post(`${process.env.REACT_APP_API_URL}roles`,
        {
            searchText: value
        },
        {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
    },
    //precargados
    getRoleCreate: () => {
        return axios.get(`${process.env.REACT_APP_API_URL}roles/create`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
    },  
    //guardar
    saveNewRole: (role) => {
        return axios.post(`${process.env.REACT_APP_API_URL}rol`, role, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
    },
    //editar
    showRole: (id) => {
        return axios.get(`${process.env.REACT_APP_API_URL}rolEditar/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
    },
    //update
    updateRole: (role) => {
        return axios.put(
          `${process.env.REACT_APP_API_URL}rolUpdate/${role.id}`,
          role,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        );
    },
    //delete
    deleteById: (id) => {
        return axios.put(
          `${process.env.REACT_APP_API_URL}rolDelete/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        );
      },
};

export default RolesServices;