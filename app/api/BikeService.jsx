const axios = require('axios');

module.exports = {
  getAllBikes: () => {
    return axios.get('/get_all_bikes').then((res) => {
      return res;
    });
  },

  addBike: (data) => {
    return axios.post('/add_bike', data).then((res) => {
      return res;
    });
  },
};
