import { connect } from 'react-redux';
import Venue from '../components/Venue';
import { setCurrentMarkerId } from '../actions';

const mapStateToProps = state => ({
  currentMarkerId: state.map.currentMarkerId,
});

const mapDispatchToProps = dispatch => ({
  setCurrentMarkerId: (currentMarkerId) => {
    dispatch(setCurrentMarkerId(currentMarkerId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Venue);
