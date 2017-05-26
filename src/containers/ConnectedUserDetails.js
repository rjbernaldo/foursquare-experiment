import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({
  lat: state.position.lat,
  lng: state.position.lng,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);