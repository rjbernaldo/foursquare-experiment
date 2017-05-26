import { connect } from 'react-redux';
import Map from '../components/Map';
import { setMap } from '../actions';

const mapStateToProps = state => ({
  height: state.dimensions.height,
  width: state.dimensions.width,
});

const mapDispatchToProps = dispatch => ({
  setMap: (map) => {
    dispatch(setMap(map));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
