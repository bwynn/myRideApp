const React = require('react');

const Nav = require('Nav');

const MyRideApp = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        {props.children}
      </div>
    </div>
  );
};

module.exports = MyRideApp;
