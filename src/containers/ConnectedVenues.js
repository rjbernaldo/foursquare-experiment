import { connect } from 'react-redux';
import Venues from '../components/Venues';

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = state => ({
  lat: state.position.lat,
  lng: state.position.lng,
});

export default connect(mapStateToProps, mapDispatchToProps)(Venues);
