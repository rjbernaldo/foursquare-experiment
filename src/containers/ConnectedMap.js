import { connect } from 'react-redux';
import Map from '../components/Map';
import { renderMap, setPosition } from '../actions';

const mapStateToProps = state => ({
  height: state.dimensions.height,
  width: state.dimensions.width,
});

const mapDispatchToProps = dispatch => ({
  renderMap: (lat, lng) => {
    dispatch(renderMap(lat, lng));
  },
  setPosition: (lat, lng) => {
    dispatch(setPosition(lat, lng));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
