const React = require('react');

const LoginForm = require('LoginForm');
const SignupForm = require('SignupForm');

const SignIn = React.createClass({
  getInitialState: function () {
    return {
      formToggle: 'login'
    };
  },

  // render either sign up or log in based on user action
  handleLogin: function(username, pw) {
    console.log('username ', username);
    console.log('password ', pw);
  },

  handleSignup: function(userDetails) {
    console.log(userDetails);
  },

  render: function () {
    return (
      <div>
        <div>
          <h1>My Ride</h1>
        </div>
        <div>
          <LoginForm onLogin={ this.handleLogin }/>
        </div>
        <div>
          <SignupForm onSignup={ this.handleSignup }/>
        </div>
      </div>
    );
  },
});

module.exports = SignIn;
