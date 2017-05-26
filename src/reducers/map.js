import { SET_MAP, SET_CURRENT_MARKER_ID } from '../actions';

const initialState = {
  google: null,
  currentMarkerId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_MARKER_ID:
      return Object.assign({}, state, { currentMarkerId: action.currentMarkerId });
    case SET_MAP:
      return Object.assign({}, state, { google: action.map });
    default:
      return state;
  }
};
