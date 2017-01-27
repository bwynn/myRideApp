const React = require('react');
const { Link, IndexLink } = require('react-router');

const Nav = React.createClass({
  render: function () {
    return (
      <div>
        <ul className="vertical menu">
          <li><IndexLink to="/" activeClassName="active">Login</IndexLink></li>
          <li><Link to="/profile" activeClassName="active">Profile</Link></li>
          <li><Link to="/users" activeClassName="active">Users</Link></li>
          <li><Link to="/logout" activeClassName="active">Log Out</Link></li>
        </ul>
      </div>
    );
  },
});

module.exports = Nav;
