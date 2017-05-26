import { combineReducers } from 'redux';
import dimensions from './dimensions';
import position from './position';
import map from './map';
import venues from './venues';

export default combineReducers({
  dimensions,
  position,
  map,
  venues,
});
