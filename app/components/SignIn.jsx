const React = require('react');

const SignIn = React.createClass({
  // render either sign up or log in based on user action
  render: function () {
    return (
      <div>
        <div>
          <h1>My Ride</h1>
        </div>
        <div>
          <h3>Sign up or Login section</h3>
        </div>
      </div>
    );
  },
});

module.exports = SignIn;
