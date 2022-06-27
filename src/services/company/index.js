import axios from 'axios';

const companyServices = {
    //update
    updateCompany: (company) => {
        return axios.put(
        `${process.env.REACT_APP_API_URL}empresaUpdate/${company.cod_persona}`,
        company,
        {
            headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        );
    },
    editCompany: (id) => {
        return axios.get(`${process.env.REACT_APP_API_URL}empresaEditar/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
        });
    },
    //show
    showCompany: () => {
        return axios.get(`${process.env.REACT_APP_API_URL}empresa`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        } 
        });
    }
};

export default companyServices;
