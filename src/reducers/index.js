import { combineReducers } from 'redux';
import dimensions from './dimensions';
import map from './map';
import venues from './venues';

export default combineReducers({
  dimensions,
  map,
  venues,
});
