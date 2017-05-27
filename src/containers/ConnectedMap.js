import { connect } from 'react-redux';
import Map from '../components/Map';
import { setMap, setPosition } from '../actions';

const mapStateToProps = state => ({
  height: state.dimensions.height,
  width: state.dimensions.width,
});

const mapDispatchToProps = dispatch => ({
  setMap: (map) => {
    dispatch(setMap(map));
  },
  setPosition: (lat, lng) => {
    dispatch(setPosition(lat, lng));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
