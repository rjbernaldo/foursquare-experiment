import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Map extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const API_KEY = process.env.API_KEY;
    const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', googleMapsUrl);
    document.head.appendChild(script);

    window.initMap = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          this.props.renderMap(lat, lng);
          this.props.setPosition(lat, lng);
        });
      } else {
        alert('User geolocation is unavailable.');
      }
    };
  }

  render() {
    const height = this.props.height;
    const width = this.props.width;
    const float = 'left';

    return (
      <div id="map" style={{ height, width, float }} />
    );
  }
}

Map.propTypes = {
  renderMap: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Map;
