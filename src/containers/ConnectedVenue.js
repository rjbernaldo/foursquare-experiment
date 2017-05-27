import { connect } from 'react-redux';
import Venue from '../components/Venue';
import { setCurrentMarker } from '../actions';

const mapStateToProps = state => ({
  currentMarker: state.map.currentMarker,
});

const mapDispatchToProps = dispatch => ({
  setCurrentMarker: (currentMarker) => {
    dispatch(setCurrentMarker(currentMarker));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Venue);
