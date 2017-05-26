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

          const map = new google.maps.Map(
            document.getElementById('map'),
            { zoom: 17, center: { lat, lng } },
          );

          const marker = new google.maps.Marker({
            position: { lat, lng },
            map,
          });

          this.props.setMap(map);
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
      <div id="map" style={{ height, width, float }}>
        {
          this.props.map
            ? <span />
            : <h1>Loading</h1>
        }
      </div>
    );
  }
}

Map.propTypes = {
  setMap: PropTypes.func.isRequired,
  setPosition: PropTypes.func.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  map: PropTypes.object,
};

Map.defaultProps = {
  height: 0,
  width: 0,
  map: null,
};

export default Map;
