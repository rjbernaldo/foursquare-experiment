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
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
        <h1>Sidebar</h1>
      </div>
    );
  }
}

Sidebar.propTypes = {
  height: PropTypes.number,
  sidebarWidth: PropTypes.number,
};

export default Sidebar;
