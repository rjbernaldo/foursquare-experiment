export const SET_DIMENSIONS = 'SET_DIMENSIONS';

export function setDimensions(height, width, sidebarWidth) {
  return {
    type: SET_DIMENSIONS,
    height,
    width,
    sidebarWidth,
  };
}
