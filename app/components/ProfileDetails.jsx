const React = require('react');

const ProfileDetails = React.createClass({
  render: function () {
    let { user } = this.props;

    return (
      <div className="profile-details">
        <div className="page-title">
          <h1>{ user.username }</h1>
        </div>
        <div className="user-details">
          <p>Account created: { user.accountCreated }</p>
          <p>email: { user.email }</p>
        </div>
      </div>
    );
  },
});

module.exports = ProfileDetails;
