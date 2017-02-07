const Bike = require('../models/bike_model');

// get all bikes
exports.getAllBikes = (req, res) => {
  Bike.find({}, (err, bikes) => {
    if (err) res.send(err);

    res.json(bikes);
  });
};

// get bikes by user id
exports.getBikesByUserID = (req, res) => {
  Bike.find({ userID: req.body.userID }, (err, bikes) => {
    if (err) res.send(err);
  });

  res.json(bikes);
};

// add bike
exports.addBike = (req, res) => {
  let bike = new Bike();

  bike.year = req.body.year;
  bike.brand = req.body.brand;
  bike.model = req.body.model;
  bike.image = req.body.image;
  bike.zip = req.body.zip;
  bike.userID = req.body.userID;
  bike.category = req.body.category;

  bike.save().then((err, bike) => {
    if (err) res.send(err);

    res.json(bike);
  });
};

// update bike by user id
exports.updateBikeByUserID = (req, res) => {
  Bike.findOne({ userID: req.body.userID }, (err, bike) => {
    Bike.update({ _id: req.body.bikeID }, {
      year: req.body.year,
      brand: req.body.brand,
      model: req.body.model,
      image: req.body.image,
      zip: req.body.zip,
      category: req.body.category
    }, (err, bike) => {
      if (err) res.send(err);

      res.json(bike);
    });
  });
};

// remove bike by user id
exports.removeBikeByUserID = (req, res) => {
  Bike.findOne({ userID: req.body.userID }, (err, bike) => {
    Bike.remove({ _id: req.body.bikeID }, (err, bike) => {
      if (err) res.send(err);

      res.json(bike);
    });
  });
};
