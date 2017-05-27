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
    let height = window.innerHeight;
    let fullWidth = window.innerWidth;
    let width = Math.floor(fullWidth * (2 / 3));
    let sidebarWidth = Math.floor(fullWidth * (1 / 3)) - 16;

    this.props.setDimensions(height, width, sidebarWidth);

    window.addEventListener('resize', () => {
      height = window.innerHeight;
      fullWidth = window.innerWidth;
      width = Math.floor(fullWidth * (2 / 3));
      sidebarWidth = Math.floor(fullWidth * (1 / 3)) - 16;

      this.props.setDimensions(height, width, sidebarWidth);
    });
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
