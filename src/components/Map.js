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
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
      position: { lat, lng },
      map,
    });

    this.props.setMap(map);
  }

  renderVenueMarkers() {
    this.props.venues.forEach((venue) => {
      const lat = venue.location.lat;
      const lng = venue.location.lng;
      const title = venue.name;

      const marker = new google.maps.Marker({
        position: { lat, lng },
        map: this.props.map.obj,
        title,
      });
    });
  }

  render() {
    const height = this.props.height;
    const width = this.props.width;
    const isFetched = this.props.isFetched;
    const isRendered = this.props.isRendered;
    const float = 'left';

    if (isFetched && !isRendered) this.renderVenueMarkers();

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
  venues: PropTypes.array,
  isFetched: PropTypes.bool,
  isRendered: PropTypes.bool,
};

Map.defaultProps = {
  height: 0,
  width: 0,
  map: null,
  venues: [],
  isFetched: false,
  isRendered: false,
};

export default Map;
