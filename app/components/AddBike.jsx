const React = require('react');

const AddBike = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();

    return console.log("Hello!");
  },

  render: function () {
    return (
      <div className="row">
        <form className="medium-6 medium-offset-3 columns" onSubmit={ this.handleSubmit }>
          <div>
            <label>
              What year is your bike?
              <input type="text" placeholder="year"/>
            </label>
          </div>
          <div>
            <label>
              Enter the bike brand:
              <input type="text" placeholder="brand"/>
            </label>
          </div>
          <div>
            <label>
              Enter the bike model:
              <input type="text" placeholder="model"/>
            </label>
          </div>
          <div>
            <label>Select the Bike Category</label>
            <select>
              <option value="mtn-bike">Mountain Bike</option>
              <option value="road-bike">Road Bike</option>
            </select>
          </div>
          <div>
            <label>
              Enter your zip code &#40;optional&#41;:
              <input type="text" placeholder="zip code"/>
            </label>
          </div>
          <div>
            <button type="submit" className="hollow button">Add Bike!</button>
          </div>
        </form>
      </div>
    )
  },
});

module.exports = AddBike;
