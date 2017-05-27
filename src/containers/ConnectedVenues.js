import { connect } from 'react-redux';
import Venues from '../components/Venues';
import { fetchVenues } from '../actions';

const mapStateToProps = state => ({
  lat: state.map.lat,
  lng: state.map.lng,
  radius: state.venues.radius,
  limit: state.venues.limit,
  isFetched: state.venues.isFetched,
  venues: state.venues.data,
});

const mapDispatchToProps = dispatch => ({
  fetchVenues: (lat, lng, radius, limit) => {
    dispatch(fetchVenues(lat, lng, radius, limit));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Venues);
