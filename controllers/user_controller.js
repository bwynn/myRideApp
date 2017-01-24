const User = require('../models/user_model.js');

exports.getUser = (req, res) => {
  User.findOne({_id: req.session.passport.user}, (err, user) => {

    res.json(user);
  }, (err) => {
    res.send(err);
  });
};

exports.updateUser = (req, res) => {
  
};

exports.deleteUser = (req, res) => {

};
