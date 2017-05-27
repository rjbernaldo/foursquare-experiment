import { connect } from 'react-redux';
import Venues from '../components/Venues';
import { fetchVenues } from '../actions';

const mapStateToProps = state => ({
  lat: state.map.lat,
  lng: state.map.lng,
  isFetched: state.venues.isFetched,
  venues: state.venues.data,
});

const mapDispatchToProps = dispatch => ({
  fetchVenues: (lat, lng) => {
    dispatch(fetchVenues(lat, lng));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Venues);
