import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      radius: this.props.radius,
      limit: this.props.limit,
    };
  }

  onClick() {
    const radius = parseFloat(this.state.radius);
    const limit = parseFloat(this.state.limit);
    if (isNaN(radius) || isNaN(limit) || radius <= 0 || limit <= 0) {
      alert('Invalid params');
    } else {
      this.props.changeParams(radius, limit);
    }
  }

  render() {
    const className = 'list-group-item list-group-item-success flex-column align-items-start';

    return (
      <div className="list-group">
        <div href="#" className={ className } style={{ marginBottom: '8px' }}>
          <div className="d-flex w-100 justify-content-between" style={{ marginBottom: '8px' }}>
            <h5 className="mb-1">User Details</h5>
          </div>
          <div className="mb-1">
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon1" style={{ width: '100px' }}>Latitude</span>
              <input
                type="text"
                className="form-control"
                placeholder="0"
                aria-describedby="basic-addon1"
                value={ this.props.lat || '' }
                disabled
              />
            </div>
          </div>
          <div className="mb-1">
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon2" style={{ width: '100px' }}>Longitude</span>
              <input
                type="text"
                className="form-control"
                placeholder="0"
                aria-describedby="basic-addon2"
                value={ this.props.lng || '' }
                disabled
              />
            </div>
          </div>
          <div className="mb-1">
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon3" style={{ width: '100px' }}>Radius</span>
              <input
                type="text"
                className="form-control"
                aria-describedby="basic-addon3"
                value={ this.state.radius }
                onChange={ (e) => { this.setState({ radius: e.target.value }); } }
              />
            </div>
          </div>
          <div className="mb-1">
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon4" style={{ width: '100px' }}>Limit</span>
              <input
                type="text"
                className="form-control"
                aria-describedby="basic-addon4"
                value={ this.state.limit }
                onChange={ (e) => { this.setState({ limit: e.target.value }); } }
              />
            </div>
          </div>
          <div className="mb-1">
            <button type="button" className="btn btn-primary" onClick={ this.onClick }>Change</button>
          </div>
        </div>
      </div>
    );
  }
}

UserDetails.propTypes = {
  changeParams: PropTypes.func.isRequired,
  radius: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

UserDetails.defaultProps = {
  lat: 0,
  lng: 0,
};

export default UserDetails;
