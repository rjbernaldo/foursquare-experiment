export const SET_DIMENSIONS = 'SET_DIMENSIONS';
export const SET_POSITION = 'SET_POSITION';
export const SET_MAP = 'SET_MAP';
export const SET_CURRENT_MARKER_ID = 'SET_CURRENT_MARKER_ID';
export const SET_VENUES = 'SET_VENUES';
export const RENDER_VENUES = 'RENDER_VENUES';

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
  return (dispatch, getState) => {
    const CLIENT_ID = process.env.CLIENT_ID;
    const CLIENT_SECRET = process.env.CLIENT_SECRET;
    const VERSION = process.env.VERSION;
    const url = `https://api.foursquare.com/v2/venues/search?ll=${lat},${lng}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`;

    return fetch(url)
      .then(res => res.json())
      .then((res) => {
        const map = getState().map.google;
        const venues = res.response.venues.map((venue) => {
          const title = venue.name;
          const mouseoutIcon = {
            url: 'https://cdn1.iconfinder.com/data/icons/material-core/20/check-circle-outline-blank-128.png',
            scaledSize: new google.maps.Size(20, 20),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 50),
          };
          const mouseoverIcon = {
            url: 'http://games.stanford.edu/gamemaster/games/chinesecheckers/green.png',
            scaledSize: new google.maps.Size(20, 20),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 50),
          };

          const marker = new google.maps.Marker({
            icon: mouseoutIcon,
            position: { lat: venue.location.lat, lng: venue.location.lng },
            map,
            title,
          });

          marker.addListener('mouseover', () => {
            dispatch(setCurrentMarkerId(venue.id));
            marker.setIcon(mouseoverIcon);
          });

          marker.addListener('mouseout', () => {
            marker.setIcon(mouseoutIcon);
          });

          return Object.assign({}, venue, { marker });
        });

        dispatch(setVenues(venues));
      });
  };
}

export function setVenues(venues) {
  return {
    type: SET_VENUES,
    venues,
  };
}

export function renderVenues() {
  return {
    type: RENDER_VENUES,
  };
}

export function setCurrentMarkerId(currentMarkerId) {
  return {
    type: SET_CURRENT_MARKER_ID,
    currentMarkerId,
  };
}
