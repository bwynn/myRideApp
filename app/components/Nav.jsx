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
        <header className="main-menu">
          <div className="menu-toggle-button">
            <button className="button" onClick={ this.toggleShowMenu }>Toggle Menu</button>
          </div>
        </header>
        <div className={ handleMenu }>
          <ul className="menu vertical">
            <li><IndexLink to="/" activeClassName="active" onClick={ this.toggleShowMenu }>Add A Bike</IndexLink></li>
            <li><Link to="/specs" activeClassName="active" onClick={ this.toggleShowMenu }>Specs</Link></li>
            <li><Link to="/login" activeClassName="active" onClick={ this.toggleShowMenu }>Login</Link></li>
            <li><Link to="/profile" activeClassName="active" onClick={ this.toggleShowMenu }>Profile</Link></li>
            <li><Link to="/logout" activeClassName="active" onClick={ this.toggleShowMenu }>Log Out</Link></li>
          </ul>
        </div>
      </div>
    );
  },
});

module.exports = Nav;
