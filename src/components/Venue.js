import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Venue extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const data = this.props.data;
    const currentMarker = this.props.currentMarkerId === data.id;

    if (currentMarker) {
      return (
        <li>
          <span style={{ fontWeight: 'bold' }}>{ data.name }</span>
          <br />
          Categories: { data.categories.map(category => category.name).join(', ') }
          <br />
          Contact: { data.contact.phone }
          <br />
          Location: { data.location.address }
          <br />
          Lat: { data.location.lat }
          <br />
          Lng: { data.location.lng }
          <br />
          Website: { data.url }
          <br />
        </li>
      );
    }

    return (
      <li>{ data.name }</li>
    );
  }
}

Venue.propTypes = {
  data: PropTypes.object,
  currentMarkerId: PropTypes.string,
};

export default Venue;
