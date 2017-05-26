import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ConnectedUserDetails from '../containers/ConnectedUserDetails';
import ConnectedVenues from '../containers/ConnectedVenues';

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
        <ConnectedUserDetails />
        <ConnectedVenues />
      </div>
    );
  }
}

Sidebar.propTypes = {
  height: PropTypes.number,
  sidebarWidth: PropTypes.number,
};

Sidebar.defaultProps = {
  height: 0,
  sidebarWidth: 0,
};

export default Sidebar;
