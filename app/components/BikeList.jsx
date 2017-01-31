const React = require('react');

const Bike = require('Bike');

const BikeList = React.createClass({
  render: function () {
    let { bikes } = this.props;

    let renderBikes = () => {
      if (bikes.length === 0) {
        return <p>No bikes</p>
      }

      return bikes.map((bike) => {
        return (
          <Bike key={bike.id} {...bike}/>
        )
      })
    };

    return (
      <div className="bike-list">
        { renderBikes() }
      </div>
    );
  },
});

module.exports = BikeList;
