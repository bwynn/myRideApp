const React = require('react');

const ProfileDetails = require('ProfileDetails');
const BikeList = require('BikeList');

const Profile = React.createClass({
  getInitialState: function () {
    return {
      user: {
        username: 'bwynn',
        accountCreated: 'Two Days Ago',
        email: 'bwynn@bwynn.io',
        bikes: [
          {
            model: '5010 C',
            brand: 'Santa Cruz',
            year: '2016',
            image: 'image1.jpg',
            id: 1,
          },
          {
            model: 'P 666',
            brand: 'Specialized',
            year: '2013',
            image: 'image2.jpg',
            id: 2,
          }
        ]
      },
      signedIn: true,
    }
  },
  render: function () {
    let { user } = this.state;
    return (
      <div>
        <ProfileDetails user={ user }/>
        <BikeList bikes={ user.bikes }/>
      </div>
    );
  },
});

module.exports = Profile;

// <div className="bike-list">Bike List Component</div>
