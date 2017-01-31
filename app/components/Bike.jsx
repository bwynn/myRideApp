const React = require('react');

const Bike = React.createClass({
  render: function () {
    let { model, brand, year, image } = this.props;
    return (
      <div>
        <p>{model}</p>
        <p>{brand}</p>
        <p>{year}</p>
        <p>{image}</p>
      </div>
    );
  },
});

module.exports = Bike;

/*
model: 'P 666',
brand: 'Specialized',
year: '2013',
image: '',
 */
