import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MARKER_URL = process.env.MARKER_URL;
const CURRENT_MARKER_URL = process.env.CURRENT_MARKER_URL;

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

    let url = MARKER_URL;
    let className = 'list-group-item list-group-item-action flex-column align-items-start';

    if (currentMarker) {
      className = `${className} active`;
      url = CURRENT_MARKER_URL;
      document.getElementById(`${data.id}`).scrollIntoViewIfNeeded();
    }

    const icon = { url, scaledSize, origin, anchor };
    data.marker.setIcon(icon);

    return (
      <div id={ data.id } className={ className } onMouseOver={ () => { this.props.setCurrentMarker(data.id); } }>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{ data.name }</h5>
          <small>{ data.categories.map(category => category.name).join(', ') }</small>
        </div>
        <p className="mb-1">{ data.location.address }</p>
        { data.url ? <small><a href={ data.url }>Website</a></small> : <span /> }
        { data.contact.phone ? <small>{ data.contact.phone }</small> : <span /> }
      </div>
    );
  }
}

Venue.propTypes = {
  setCurrentMarker: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  currentMarker: PropTypes.string,
};

Venue.defaultProps = {
  currentMarker: '',
};

export default Venue;
