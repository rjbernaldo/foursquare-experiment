import { SET_VENUES, RENDER_VENUES, SET_PARAMS } from '../actions';

const initialState = {
  isFetched: false,
  isRendered: false,
  radius: 800,
  limit: 10,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RENDER_VENUES:
      return Object.assign({}, state, { isRendered: true });
    case SET_VENUES:
      return Object.assign({}, state, {
        isFetched: true,
        data: action.venues,
      });
    case SET_PARAMS:
      return Object.assign({}, state, {
        isFetched: false,
        radius: action.radius,
        limit: action.limit,
        isRendered: false,
        data: [],
      });
    default:
      return state;
  }
};
