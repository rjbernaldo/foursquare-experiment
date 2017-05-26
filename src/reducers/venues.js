import { FETCH_VENUES, SET_VENUES, RENDER_VENUES } from '../actions';

const initialState = {
  isFetched: false,
  isRendered: false,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RENDER_VENUES:
      return Object.assign({}, state, { isRendered: true });
    case SET_VENUES:
      return Object.assign({}, state, { isFetched: true, data: action.venues });
    default:
      return state;
  }
};
