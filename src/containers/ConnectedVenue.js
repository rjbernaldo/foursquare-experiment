import { connect } from 'react-redux';
import Venue from '../components/Venue';

const mapStateToProps = state => ({
  currentMarkerId: state.map.currentMarkerId,
});

export default connect(mapStateToProps)(Venue);
