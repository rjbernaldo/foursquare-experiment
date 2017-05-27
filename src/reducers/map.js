import { SET_MAP, SET_CURRENT_MARKER, SET_RADIUS, SET_POSITION } from '../actions';

const initialState = {
  google: null,
  currentMarker: null,
  lat: null,
  lng: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_MARKER:
      return Object.assign({}, state, { currentMarker: action.currentMarker });
    case SET_MAP:
      return Object.assign({}, state, { google: action.map });
    case SET_RADIUS:
      return Object.assign({}, state, { radius: action.radius });
    case SET_POSITION:
      return Object.assign({}, state, {
        lat: action.lat,
        lng: action.lng,
      });
    default:
      return state;
  }
};
