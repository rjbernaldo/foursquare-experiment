import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const height = this.props.height;
    const width = this.props.sidebarWidth;
    const overflowY = 'scroll';
    const float = 'left';
    const margin = '8px';

    return (
      <div style={{ height, width, overflowY, float, margin }}>
        <h3 style={{ marginTop: '0px' }}>User Details</h3>
        <p>Latitude: { this.props.lat }</p>
        <p>Longitude: { this.props.lng }</p>

        <h3>Venues</h3>
      </div>
    );
  }
}

Sidebar.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  height: PropTypes.number,
  sidebarWidth: PropTypes.number,
};

Sidebar.defaultProps = {
  lat: 0,
  lng: 0,
  height: 0,
  sidebarWidth: 0,
};

export default Sidebar;
