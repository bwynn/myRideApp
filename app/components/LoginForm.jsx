const React = require('react');

const LoginForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    let username = this.refs.username.value;
    let pw = this.refs.password.value;

    if (username.length > 0 && pw.length > 0) {
      this.refs.username.value = '';
      this.refs.password.value = '';
      // send up via this.props.method(username, pw)
      this.props.onLogin(username, pw);
    } else {
      this.refs.username.focus();
    }
  },

  render: function () {
    return (
      <div className="form">
        <h1>Log In</h1>
        <form onSubmit={ this.handleSubmit }>
          <div className="input-group">
            <input type="text" placeholder="Enter your username" ref="username" required/>
          </div>
          <div className="input-group">
            <input type="password" placeholder="Enter your password" ref="password" required/>
          </div>
          <div className="input-group">
            <button className="button">Log In</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = LoginForm;
