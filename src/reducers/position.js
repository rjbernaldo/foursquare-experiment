import { SET_POSITION } from '../actions';

const initialState = {
  lat: 0,
  lng: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POSITION:
      return Object.assign({}, state, {
        lat: action.lat,
        lng: action.lng,
      });
    default:
      return state;
  }
};
