const React = require('react');

const SignupForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    let userDetails = {
      username: this.refs.username.value,
      pw: this.refs.password.value,
      email: this.refs.email.value,
    };

    if (userDetails.username.length > 0 && userDetails.pw.length > 0 && userDetails.email.length > 0) {
      this.refs.username.value = '';
      this.refs.password.value = '';
      this.refs.email.value = '';
      // send up via this.props.method(username, pw)
      this.props.onSignup(userDetails);
    } else {
      this.refs.username.focus();
    }
  },

  render: function () {
    return (
      <div className="login-form">
        <form onSubmit={ this.handleSubmit }>
          <div className="input-group">
            <input type="text" placeholder="Enter your username" ref="username" required/>
          </div>
          <div className="input-group">
            <input type="email" placeholder="Enter email" ref="email" required/>
          </div>
          <div className="input-group">
            <input type="password" placeholder="Enter your password" ref="password" required/>
          </div>
          <div className="input-group">
            <button className="button expanded">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = SignupForm;
