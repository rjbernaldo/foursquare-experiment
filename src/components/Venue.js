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

    const onMouseOver = () => {
      console.log('onmouseover');
      const mouseoverIcon = {
        url: 'http://games.stanford.edu/gamemaster/games/chinesecheckers/green.png',
        scaledSize: new google.maps.Size(20, 20),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 50),
      };

      data.marker.setIcon(mouseoverIcon);
      // this.props.setCurrentMarkerId(data.id);
    };

    const onMouseOut = () => {
      console.log('onmouseout');
      const mouseoutIcon = {
        url: 'https://cdn1.iconfinder.com/data/icons/material-core/20/check-circle-outline-blank-128.png',
        scaledSize: new google.maps.Size(20, 20),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 50),
      };

      data.marker.setIcon(mouseoutIcon);
    };

    return (
      <a id={ data.id } href="#" className={ className } onMouseOver={ onMouseOver } onMouseOut={ onMouseOut }>
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
  setCurrentMarkerId: PropTypes.func.isRequired,
  data: PropTypes.object,
  currentMarkerId: PropTypes.string,
};

export default Venue;
