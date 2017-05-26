import { connect } from 'react-redux';
import Venues from '../components/Venues';
import { fetchVenues } from '../actions';

const mapDispatchToProps = dispatch => ({
  fetchVenues: (lat, lng) => {
    dispatch(fetchVenues(lat, lng));
  },
});

const mapStateToProps = state => ({
  lat: state.position.lat,
  lng: state.position.lng,
  isFetched: state.venues.isFetched,
  venues: state.venues.data,
  currentMarkerId: state.map.currentMarkerId,
});

export default connect(mapStateToProps, mapDispatchToProps)(Venues);
