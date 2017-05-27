import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';
import { setParams } from '../actions';

const mapStateToProps = state => ({
  lat: state.map.lat,
  lng: state.map.lng,
  radius: state.venues.radius,
  limit: state.venues.limit,
});

const mapDispatchToProps = dispatch => ({
  setParams: (radius, limit) => {
    dispatch(setParams(radius, limit));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
