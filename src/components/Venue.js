import React, { Component } from 'react';
import PropTypes from 'prop-types';

const markerUrl = process.env.MARKER_URL;
const currentMarkerUrl = process.env.CURRENT_MARKER_URL;

class Venue extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const data = this.props.data;
    const currentMarker = this.props.currentMarker === data.id;
    const scaledSize = new google.maps.Size(20, 20);
    const origin = new google.maps.Point(0, 0);
    const anchor = new google.maps.Point(0, 50);

    let url = markerUrl;
    let className = 'list-group-item list-group-item-action flex-column align-items-start';

    if (currentMarker) {
      className = `${className} active`;
      url = currentMarkerUrl;
      document.getElementById(`${data.id}`).scrollIntoViewIfNeeded();
    }

    const icon = { url, scaledSize, origin, anchor };
    data.marker.setIcon(icon);

    const onMouseOver = () => {
      this.props.setCurrentMarker(data.id);
    };

    return (
      <div id={ data.id } href="#" className={ className } onMouseOver={ onMouseOver }>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{ data.name }</h5>
          <small>{ data.categories.map(category => category.name).join(', ') }</small>
        </div>
        <p className="mb-1">{ data.location.address }</p>
        <p className="mb-1">{ data.contact.phone }</p>
        <small><a href={ data.url }>Website</a></small>
      </div>
    );
  }
}

Venue.propTypes = {
  setCurrentMarker: PropTypes.func.isRequired,
  data: PropTypes.object,
  currentMarker: PropTypes.string,
};

export default Venue;
