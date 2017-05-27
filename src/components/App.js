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
    this.setDimensions();

    window.addEventListener('resize', () => {
      this.setDimensions();
    });
  }

  setDimensions() {
    const height = window.innerHeight;
    const fullWidth = window.innerWidth;
    const width = Math.floor(fullWidth * (2 / 3));
    const sidebarWidth = Math.floor(fullWidth * (1 / 3)) - 16;

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
