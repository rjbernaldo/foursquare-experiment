import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const height = this.props.height;
    const width = this.props.sidebarWidth;
    const overflowY = 'scroll';
    const float = 'left';
    const margin = '8px';

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
          console.log('foursquare', res);
        });
    }

    return (
      <div style={{ height, width, overflowY, float, margin }}>
        <h3 style={{ marginTop: '0px' }}>User Details</h3>
        <p>Latitude: { this.props.lat }</p>
        <p>Longitude: { this.props.lng }</p>

        <h3>Venues</h3>
      </div>
    );
  }
}

Sidebar.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  height: PropTypes.number,
  sidebarWidth: PropTypes.number,
};

Sidebar.defaultProps = {
  lat: 0,
  lng: 0,
  height: 0,
  sidebarWidth: 0,
};

export default Sidebar;
