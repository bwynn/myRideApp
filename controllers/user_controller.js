const User = require('../models/user_model.js');

// get all users
exports.getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) res.send(err);

    res.json(users);
  }, (err) => {
    res.send(err);
  });
};

// add user
exports.addUser = (req, res) => {
  let user = new User();

  user.email = req.body.email;
  user.password = req.body.password;
  user.username = req.body.username;

  user.save().then((err, user) => {
    if (err) res.send(err);

    res.json(user);
  });
};

// get user by id
exports.getUser = (req, res) => {
  User.findOne({_id: /*req.session.passport.user*/req.body.id}, (err, user) => {

    res.json(user);
  }, (err) => {
    res.send(err);
  });
};

exports.updateUser = (req, res) => {
  
};

exports.deleteUser = (req, res) => {

};
