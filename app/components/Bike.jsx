const React = require('react');

const Bike = React.createClass({
  render: function () {
    let { model, brand, year, image } = this.props;
    return (
      <div className="bike">
        <div className="bike-thumbnail">
          <img src={image} alt="bike thumbnail" className="bike-thumb-image"/>
        </div>
        <div className="bike-thumbnail-details">
          <h3>{year} {brand}</h3>
          <h3>{model}</h3>
        </div>
      </div>
    );
  },
});

module.exports = Bike;
