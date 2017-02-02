const React = require('react');

const LoginForm = require('LoginForm');
const SignupForm = require('SignupForm');

const SignIn = React.createClass({
  getInitialState: function () {
    return {
      showSignup: false,
    };
  },

  toggleForm: function() {
    if (this.state.showSignup) {
      this.setState({
        showSignup: false
      });
    } else {
      this.setState({
        showSignup: true
      });
    }
  },

  // render either sign up or log in based on user action
  handleLogin: function(username, pw) {
    // api to handle login
    console.log('username ', username);
    console.log('password ', pw);
  },

  handleSignup: function(userDetails) {
    // api to handle signup
    console.log(userDetails);
  },

  render: function () {
    let { showSignup } = this.state;

    var renderSignupForm = () => {
      if (!showSignup) {
        return <LoginForm className="login-form" onLogin={ this.handleLogin }/>;
      } else {
        return <SignupForm className="login-form" onSignup={ this.handleSignup }/>;
      }
    };

    var renderToggleButton = () => {
      if (!showSignup) {
        return <div className="signin-toggle"><p>No account? Sign up here.</p><button className="button" onClick={ this.toggleForm }>Sign up</button></div>;
      } else {
        return <div className="signin-toggle"><p>Already have an account?</p><button className="button" onClick={ this.toggleForm }>Log in</button></div>;
      }
    };

    return (
      <div className="row">
        <div className="columns large-6 large-offset-3 medium-8 medium-offset-2 small-12">
          <div>
            <h1>My Ride</h1>
          </div>
          <div>
            { renderSignupForm() }
          </div>
          <div>
            { renderToggleButton() }
          </div>
        </div>
      </div>
    );
  },
});

module.exports = SignIn;
