import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';
import { changeParams } from '../actions';

const mapStateToProps = state => ({
  lat: state.map.lat,
  lng: state.map.lng,
  radius: state.venues.radius,
  limit: state.venues.limit,
});

const mapDispatchToProps = dispatch => ({
  changeParams: (radius, limit) => {
    dispatch(changeParams(radius, limit));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
