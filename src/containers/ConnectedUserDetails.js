import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';

const mapStateToProps = state => ({
  lat: state.map.lat,
  lng: state.map.lng,
});

const mapDispatchToProps = dispatch => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
