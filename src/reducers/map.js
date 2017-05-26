import { SET_MAP } from '../actions';

export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case SET_MAP:
      return action.map;
    default:
      return state;
  }
};
