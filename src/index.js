import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
const API_KEY = process.env.API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0, width: 0 };
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`);
    document.head.appendChild(script);

    window.initMap = () => {
      const map = new google.maps.Map(
        document.getElementById('map'),
        {
          zoom: 4,
          center: { lat: -25.363, lng: 131.044 },
        },
      );
    };

    this.updateWindowDimensions();
  }

  updateWindowDimensions() {
    const bodyMargin = 16;
    const height = window.innerHeight - bodyMargin;
    const fullWidth = window.innerWidth - bodyMargin;
    const width = Math.floor(fullWidth * (2 / 3));

    this.setState({ height, width });
  }

  render() {
    return (
      <div>
        <div id="map" style={{ height: this.state.height, width: this.state.width }} />
      </div>
    );
  }
}

const ConnectedApp = connect()(App);

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('app'),
);
