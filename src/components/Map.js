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
          const map = new google.maps.Map(
            document.getElementById('map'),
            {
              zoom: 17,
              center: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              },
            },
          );

          this.props.setMap(map);
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
  height: PropTypes.number,
  width: PropTypes.number,
  map: PropTypes.object,
};

export default Map;
