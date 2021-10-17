const ZOOM_FACTOR = 0.1;
const ZOOMFACTOR_IN = 1 + ZOOM_FACTOR;
const ZOOMFACTOR_OUT = 1 - ZOOM_FACTOR;
const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

// Keeps track of each type of functions that can be called
export const types = {
    ZOOM: 'ZOOM',
    START_PAN: 'START_PAN',
    PAN: 'PAN',
}

// Gets default states for zoom
export const zoom = (event, containerRect)=>({
    type: types.ZOOM,
    zoomFactor: event.deltaY < 0 ? ZOOMFACTOR_IN : ZOOMFACTOR_OUT,
    minZoom: MIN_ZOOM,
    maxZoom: MAX_ZOOM,
    clientX: event.clientX,
    clientY: event.clientY,
    containerRect: containerRect
});
export const startPan = (event) =>({
    type: types.START_PAN,
    clientX: event.clientX,
    clientY: event.clientY
})
export const pan = (event) =>({
    type: types.PAN,
    clientX: event.clientX,
    clientY: event.clientY
})