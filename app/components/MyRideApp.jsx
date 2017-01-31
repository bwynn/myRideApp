const React = require('react');

const Nav = require('Nav');

const MyRideApp = (props) => {
  return (
    <div>
      <Nav/>
      { props.children }
    </div>
  );
}


module.exports = MyRideApp;
