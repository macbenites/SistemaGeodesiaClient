export const tokenConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
};
