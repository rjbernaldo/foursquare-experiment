import { setCurrentMarker } from './map';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const VERSION = process.env.VERSION;

export const SET_VENUES = 'SET_VENUES';
export const RENDER_VENUES = 'RENDER_VENUES';
export const SET_PARAMS = 'SET_PARAMS';

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

export function changeParams(radius, limit) {
  return (dispatch, getState) => {
    const venues = getState().venues;

    venues.data.forEach((venue) => {
      venue.marker.setMap(null);
    });

    dispatch(setCurrentMarker(null));
    dispatch(setParams(radius, limit));
  };
}

export function setParams(radius, limit) {
  return {
    type: SET_PARAMS,
    radius,
    limit,
  };
}

export function fetchVenues(lat, lng, radius, limit) {
  return (dispatch, getState) => {
    const url = `https://api.foursquare.com/v2/venues/search?intent=browse&ll=${lat},${lng}&radius=${radius}&limit=${limit}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION}`;

    return fetch(url)
      .then(res => res.json())
      .then((res) => {
        const map = getState().map.google;
        const venues = res.response.venues.map((venue) => {
          const title = venue.name;

          const marker = new google.maps.Marker({
            icon: {
              url: 'https://cdn1.iconfinder.com/data/icons/material-core/20/check-circle-outline-blank-128.png',
              scaledSize: new google.maps.Size(20, 20),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(0, 50),
            },
            position: { lat: venue.location.lat, lng: venue.location.lng },
            map,
            title,
          });

          marker.addListener('mouseover', () => {
            dispatch(setCurrentMarker(venue.id));
          });

          return Object.assign({}, venue, { marker });
        });

        dispatch(setVenues(venues));
      });
  };
}
