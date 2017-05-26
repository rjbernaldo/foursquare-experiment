import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div>
        <h3 style={{ marginTop: '0px' }}>User Details</h3>
        <p>Latitude: { this.props.lat }</p>
        <p>Longitude: { this.props.lng }</p>
      </div>
    );
  }
}

UserDetails.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

UserDetails.defaultProps = {
  lat: 0,
  lng: 0,
};

export default UserDetails;
