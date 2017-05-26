export const SET_DIMENSIONS = 'SET_DIMENSIONS';
export const SET_POSITION = 'SET_POSITION';
export const SET_MAP = 'SET_MAP';
export const SET_VENUES = 'SET_VENUES';

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

export function fetchVenues(lat, lng) {
  return (dispatch) => {
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const VERSION = process.env.VERSION;
    const url = `https://api.foursquare.com/v2/venues/search?ll=${lat},${lng}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`;

    return fetch(url)
      .then(res => res.json())
      .then((res) => {
        dispatch(setVenues(res.response.venues));
      });
  };
}

export function setVenues(venues) {
  return {
    type: SET_VENUES,
    venues,
  };
}
