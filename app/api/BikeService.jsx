const axios = require('axios');

module.exports = {
  addBike: (data) => {
    return axios.post('/add_bike', data).then((res) => {
      return res;
    });
  },
};
