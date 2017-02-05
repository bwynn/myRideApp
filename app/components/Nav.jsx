const React = require('react');
const { Link, IndexLink } = require('react-router');

const Nav = React.createClass({
  getInitialState: function () {
    return {
      showMenu: false
    };
  },

  toggleShowMenu: function () {
    let showMenu = this.state.showMenu;
    this.setState({
      showMenu: !showMenu
    });
  },

  // toggle nav drop down
  render: function () {
    let { showMenu } = this.state;
    let handleMenu = showMenu ? 'menu-container' : 'menu-container closed';

    return (
      <div className="menu-component">
        <header className="menu">
          <div className="menu-toggle-button">
            <button className="button" onClick={ this.toggleShowMenu }>Toggle Menu</button>
          </div>
        </header>
        <div className={ handleMenu }>
          <ul className="menu">
            <li><IndexLink to="/" activeClassName="active" onClick={ this.toggleShowMenu }>Login</IndexLink></li>
            <li><Link to="/profile" activeClassName="active" onClick={ this.toggleShowMenu }>Profile</Link></li>
            <li><Link to="/users" activeClassName="active" onClick={ this.toggleShowMenu }>Users</Link></li>
            <li><Link to="/logout" activeClassName="active" onClick={ this.toggleShowMenu }>Log Out</Link></li>
          </ul>
        </div>
      </div>
    );
  },
});

module.exports = Nav;
