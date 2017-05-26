import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Map extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const API_KEY = process.env.API_KEY;
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`);
    document.head.appendChild(script);

    window.initMap = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          this.initMap(lat, lng);
          this.props.setPosition(lat, lng);
        });
      } else {
        alert('User geolocation is unavailable.');
      }
    };
  }

  initMap(lat, lng) {
    const map = new google.maps.Map(
      document.getElementById('map'),
      { zoom: 17, center: { lat, lng } },
    );

    const marker = new google.maps.Marker({
      icon: {
        url: 'http://www.iconsdb.com/icons/preview/tropical-blue/circle-outline-xxl.png',
        scaledSize: new google.maps.Size(20, 20),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 50),
      },
      position: { lat, lng },
      map,
    });

    this.props.setMap(map);
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
  setMap: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

export default Map;
