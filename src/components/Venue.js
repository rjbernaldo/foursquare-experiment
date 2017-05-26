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
    const className = currentMarker
      ? 'list-group-item list-group-item-action flex-column align-items-start active'
      : 'list-group-item list-group-item-action flex-column align-items-start';

    if (currentMarker) document.getElementById(`${data.id}`).scrollIntoView();

    return (
      <a id={ data.id } href="#" className={ className }>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{ data.name }</h5>
          <small>{ data.categories.map(category => category.name).join(', ') }</small>
        </div>
        <p className="mb-1">{ data.location.address }</p>
        <p className="mb-1">{ data.contact.phone }</p>
        <small>{ data.url }</small>
      </a>
    );
  }
}

Venue.propTypes = {
  data: PropTypes.object,
  currentMarkerId: PropTypes.string,
};

export default Venue;
