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

export default connect(null, mapDispatchToProps)(App);
