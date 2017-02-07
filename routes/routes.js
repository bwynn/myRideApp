module.exports = (app, passport) => {
  // DEPENDENCIES ==============================================================
  const userController = require('../controllers/user_controller');
  const bikeController = require('../controllers/bike_controller');

  // AUTHENTICATION ROUTES =====================================================

  // login -> post
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/dashboard',
    failureRedirect: '/'
  }));

  // sign in -> post
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/',
    failureFlash: true
  }));;

  // log out -> get
  app.get('/logout', (req, res) => {
    req.logOut();
    req.session.destroy(() => {
      res.redirect('/');
    });
  });

  // handle authentication in passport
  function loggedIn (req, res, next) {
    // if logged in
    if (req.isAuthenticated()) {
      return next();
    }
    else {
      res.redirect('/login');
    }
  }

  // APP ROUTES ================================================================

  // users
  // get
  app.get('/users', userController.getUser);

  // update
  app.put('/user', userController.updateUser);

  // delete
  app.delete('/user', userController.deleteUser);

  // bikes
  // add bike
  app.post('/add_bike', bikeController.addBike);

  // get all bikes
  app.get('/get_all_bikes', bikeController.getAllBikes);

  // get bikes by user id
  app.post('/get_bikes_by_user_id', bikeController.getBikesByUserID);

  // update bike
  app.put('/update_bike_by_user_id', bikeController.updateBikeByUserID);

  // remove bike
  app.delete('/remove_bike', bikeController.removeBikeByUserID);
};
