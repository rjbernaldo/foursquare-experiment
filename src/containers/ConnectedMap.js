import { connect } from 'react-redux';
import Map from '../components/Map';
import { attachScript } from '../actions';

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
