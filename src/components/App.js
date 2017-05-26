import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConnectedMap from '../containers/ConnectedMap';
import ConnectedSidebar from '../containers/ConnectedSidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    const bodyMargin = 16;
    const height = window.innerHeight - bodyMargin;
    const fullWidth = window.innerWidth - bodyMargin;
    const width = Math.floor(fullWidth * (2 / 3));
    const sidebarWidth = Math.floor(fullWidth * (1 / 3)) - bodyMargin;

    this.props.setDimensions(height, width, sidebarWidth);
  }

  render() {
    return (
      <div>
        <ConnectedMap />
        <ConnectedSidebar />
      </div>
    );
  }
}

App.propTypes = {
  setDimensions: PropTypes.func.isRequired,
};

export default App;
