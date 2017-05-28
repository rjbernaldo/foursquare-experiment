import { SET_DIMENSIONS } from '../actions/dimensions';

const initialState = {
  height: 0,
  width: 0,
  sidebarWidth: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DIMENSIONS:
      return Object.assign({}, state, {
        height: action.height,
        width: action.width,
        sidebarWidth: action.sidebarWidth,
      });
    default:
      return state;
  }
};
