import { FETCH_VENUES, SET_VENUES } from '../actions';

const initialState = {
  isFetched: false,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VENUES:
      return Object.assign({}, state, { isFetched: true, data: action.venues });
    default:
      return state;
  }
};
