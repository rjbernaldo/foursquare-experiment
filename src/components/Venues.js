import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Venues extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const lat = this.props.lat;
    const lng = this.props.lng;

    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const VERSION = process.env.VERSION;
    const url = `https://api.foursquare.com/v2/venues/search?ll=${lat},${lng}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`;

    if (lat && lng) {
      fetch(url)
        .then(res => res.json())
        .then((res) => {
          console.log('foursquare', res.response.venues);
        });
    }
    return (
      <div>
        <h3>Venues</h3>
      </div>
    );
  }
}

Venues.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

Venues.defaultProps = {
  lat: 0,
  lng: 0,
};

export default Venues;
