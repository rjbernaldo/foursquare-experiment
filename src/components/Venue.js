import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Venue extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const data = this.props.data;
    return (
      <li>
        Name: { data.name }
        Categories: {
          data.categories.map(category => category.name).join(', ')
        }
        Contact: { data.contact.phone }
        Location: { data.location.address }
        Lat: { data.location.lat }
        Lng: { data.location.lng }
        Website: { data.url }
      </li>
    );
  }
}

Venue.propTypes = {
  data: PropTypes.object,
};

export default Venue;
