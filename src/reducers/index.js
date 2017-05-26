import { combineReducers } from 'redux';
import dimensions from './dimensions';
import position from './position';
import map from './map';

export default combineReducers({
  dimensions,
  position,
  map,
});
