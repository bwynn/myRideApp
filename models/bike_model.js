const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BikeSchema = new Schema({
  year: String,
  brand: String,
  model: String,
  category: String,
  zip: String,
  image: {type: Schema.Types.Mixed},
  userID: String
});

module.exports = mongoose.model('Bike', BikeSchema);
