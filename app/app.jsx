const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

const MyRideApp = require('MyRideApp');
const Bike = require('Bike');
const Profile = require('Profile');
const Users = require('Users');
const SignIn = require('SignIn');

// load foundation
$(document).foundation();

// app css
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MyRideApp}>
      <IndexRoute component={SignIn}/>
      <Route path="users" component={Users}/>
      <Route path="profile" component={Profile}/>
      <Route path="logout" component={SignIn}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
