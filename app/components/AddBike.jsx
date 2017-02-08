const React = require('react');
const BikeService = require('BikeService');

const AddBike = React.createClass({
  handleSubmit: function (e) {
    let year = this.refs.year.value;
    let brand = this.refs.brand.value;
    let model = this.refs.model.value;
    let category = this.refs.category.value;
    let zip = this.refs.zip.value;
    let imagePath = this.refs.image.value;

    console.log(imagePath);

    e.preventDefault();

    if (year && brand && model && category) {
      let bike = { year, brand, model, category, image: imagePath };

      this.refs.year.value = '';
      this.refs.brand.value = '';
      this.refs.model.value = '';
      this.refs.zip.value = '';

      BikeService.addBike(bike).then(function(res) {

        console.log(res.data);

        /*this.setState({
          bikeImage: res.data.image
        });*/
      }, function(err) {
        console.log('Something went wrong.', err);
      });
    } else {
      console.log('Add bike details');
    }
  },

  render: function () {
    return (
      <div className="row">
        <form className="medium-6 medium-offset-3 columns" onSubmit={ this.handleSubmit }>
          <div>
            <label>
              Upload Photo
              <input type="file" ref="image"/>
            </label>
          </div>
          <div>
            <label>
              What year is your bike?
              <input type="text" ref="year" placeholder="year"/>
            </label>
          </div>
          <div>
            <label>
              Enter the bike brand:
              <input type="text" ref="brand" placeholder="brand"/>
            </label>
          </div>
          <div>
            <label>
              Enter the bike model:
              <input type="text" ref="model" placeholder="model"/>
            </label>
          </div>
          <div>
            <label>Select the Bike Category</label>
            <select ref="category">
              <option value="mtn-bike">Mountain Bike</option>
              <option value="road-bike">Road Bike</option>
            </select>
          </div>
          <div>
            <label>
              Enter your zip code &#40;optional&#41;:
              <input type="text" ref="zip" placeholder="zip code"/>
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
