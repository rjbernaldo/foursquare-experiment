export const SET_DIMENSIONS = 'SET_DIMENSIONS';
export const SET_POSITION = 'SET_POSITION';
export const SET_MAP = 'SET_MAP';

export function setDimensions(height, width, sidebarWidth) {
  return {
    type: SET_DIMENSIONS,
    height,
    width,
    sidebarWidth,
  };
}

export function setPosition(lat, lng) {
  return {
    type: SET_POSITION,
    lat,
    lng,
  };
}

export function setMap(map) {
  return {
    type: SET_MAP,
    map,
  };
}
