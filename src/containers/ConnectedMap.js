import { connect } from 'react-redux';
import Map from '../components/Map';
import { attachScript } from '../actions/map';

const mapStateToProps = state => ({
  height: state.dimensions.height,
  width: state.dimensions.width,
});

const mapDispatchToProps = dispatch => ({
  attachScript: () => {
    dispatch(attachScript());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
