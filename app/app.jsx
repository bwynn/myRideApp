const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const MyRideApp = require('MyRideApp');
const Profile = require('Profile');
const AppSpecs = require('AppSpecs');
const SignIn = require('SignIn');
const AddBike = require('AddBike');

// load foundation
$(document).foundation();

// app css
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MyRideApp}>
      <IndexRoute component={AddBike}/>
      <Route path="login" component={SignIn}/>
      <Route path="specs" component={AppSpecs}/>
      <Route path="profile" component={Profile}/>
      <Route path="logout" component={SignIn}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
