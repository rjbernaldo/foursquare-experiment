import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

const mapStateToProps = state => ({
  height: state.dimensions.height,
  sidebarWidth: state.dimensions.sidebarWidth,
  lat: state.position.lat,
  lng: state.position.lng,
});

export default connect(mapStateToProps)(Sidebar);
