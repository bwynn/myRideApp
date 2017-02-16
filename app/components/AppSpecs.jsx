const React = require('react');
const Chart = require('react-d3-core').Chart;
const BikeService = require('BikeService');

const AppSpecs = React.createClass({
  getInitialState: function () {
      return {
        chartData: undefined,
        bikes: undefined
      };
  },

  componentDidMount: function() {
    BikeService.getAllBikes().then((data) => {
      this.setState({
        bikes: data.data
      });
    });
  },

  render: function () {
    let { bikes, chartData } = this.state;

    let renderBikes = () => {
      if (bikes) {
        if (bikes.length === 0) {
          return <p>No Bikes Added yet.</p>
        } else {
          return bikes.map((bike) => {
            return (
              <div className="row">
                <p key={ bike.id }><strong>{ bike.year }{ bike.brand }</strong> {bike.model}</p>
                <p>Category: { bike.category }</p>
              </div>
            );
          })
        }
      } 
    };

    return (
      <div>
        { renderBikes() }
      </div>
    );
  },
});

module.exports = AppSpecs;
