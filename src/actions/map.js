const API_KEY = process.env.API_KEY;
const USER_MARKER_URL = process.env.USER_MARKER_URL;

export const SET_MAP = 'SET_MAP';
export const SET_CURRENT_MARKER = 'SET_CURRENT_MARKER';
export const SET_POSITION = 'SET_POSITION';

export function setMap(map) {
  return {
    type: SET_MAP,
    map,
  };
}

export function setPosition(lat, lng) {
  return {
    type: SET_POSITION,
    lat,
    lng,
  };
}

export function setCurrentMarker(currentMarker) {
  return {
    type: SET_CURRENT_MARKER,
    currentMarker,
  };
}

export function attachScript() {
  return (dispatch) => {
    const googleMapsUrl = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`;
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', googleMapsUrl);

    document.head.appendChild(script);

    window.initMap = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          dispatch(renderMap(lat, lng));
          dispatch(setPosition(lat, lng));
        });
      } else {
        alert('User geolocation is unavailable.');
      }
    };
  };
}

export function renderMap(lat, lng) {
  return (dispatch) => {
    const map = new google.maps.Map(
      document.getElementById('map'),
      { zoom: 17, center: { lat, lng } },
    );

    const marker = new google.maps.Marker({
      icon: {
        url: USER_MARKER_URL,
        scaledSize: new google.maps.Size(20, 20),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 50),
      },
      position: { lat, lng },
      map,
    });

    dispatch(setMap(map));
  };
}
