import { connect } from 'react-redux';
import App from '../components/App';
import { setDimensions } from '../actions';

const mapDispatchToProps = dispatch => ({
  setDimensions: (height, width, sidebarWidth) => {
    dispatch(setDimensions(height, width, sidebarWidth));
  },
  setMap: (map) => {
    dispatch(setMap(map));
  },
});

const mapStateToProps = state => ({
  map: state.map,
});

export default connect(null, mapDispatchToProps)(App);
