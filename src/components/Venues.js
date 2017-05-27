import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConnectedVenue from '../containers/ConnectedVenue';

class Venues extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const lat = this.props.lat;
    const lng = this.props.lng;
    const radius = this.props.radius;
    const limit = this.props.limit;
    const isFetched = this.props.isFetched;
    const venues = this.props.venues;

    if (lat !== null && lng !== null && !isFetched) {
      this.props.fetchVenues(lat, lng, radius, limit);
    } else if (isFetched && venues.length === 0) {
      alert('No venues found for that query');
    }

    return (
      <div>
        <div className="list-group">
          { venues.map(venue => <ConnectedVenue data={venue} key={venue.id} />) }
        </div>
      </div>
    );
  }
}

Venues.propTypes = {
  fetchVenues: PropTypes.func.isRequired,
  venues: PropTypes.array.isRequired,
  isFetched: PropTypes.bool.isRequired,
  radius: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

Venues.defaultProps = {
  lat: null,
  lng: null,
};

export default Venues;
