import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Venue from './Venue';

class Venues extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const lat = this.props.lat;
    const lng = this.props.lng;
    const isFetched = this.props.isFetched;
    const venues = this.props.venues;

    if (lat !== null && lng !== null && !isFetched) {
      this.props.fetchVenues(lat, lng);
    }

    return (
      <div>
        <h3>Venues</h3>
        <ul>
          { venues.map(venue => <Venue data={venue} />) }
        </ul>
      </div>
    );
  }
}

Venues.propTypes = {
  fetchVenues: PropTypes.func.isRequired,
  venues: PropTypes.array,
  isFetched: PropTypes.bool,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

Venues.defaultProps = {
  venues: [],
  isFetched: false,
  lat: null,
  lng: null,
};

export default Venues;
