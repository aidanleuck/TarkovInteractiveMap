import {types, zoom} from './actions';

// The initial state of the component
export const initialState = {
    translateX: 0,
    translateY: 0,
    prevMouseX: 0,
    prevMouseY: 0,
    scale: 1,
}

// Handler that determines what method should be called
export const hookHandler = (state, action) => {
    switch (action.type) {
        case types.ZOOM:
            if (state.scale * action.zoomFactor  <= action.maxZoom && state.scale * action.zoomFactor >= action.minZoom ) {
                // Gets the scaled translation the mouse position and the zoom offset values and calculatestranslation
                const scaledTranslation = getScaledTranslation(state, action.zoomFactor);
                const mousePositionOnScreen = { x: action.clientX, y: action.clientY };
                const zOffset = getZoomOffset(action.containerRect, mousePositionOnScreen, action.zoomFactor)
                return {
                    ...state,
                    scale: state.scale * action.zoomFactor,
                    translateX: scaledTranslation.x - zOffset.x,
                    translateY: scaledTranslation.y - zOffset.y
                }

            }
            else{
                return{...state}
            }
            
            default:
                return {...state,
                scale:state.scale,
                translateX: state.translateX,
                translateY: state.translateY}
            
        
    }
};

// Calculates zoom offset values
const getZoomOffset = (containerRect, mousePosition, zoomFactor)  =>{

    // Figures out where the mouse position is in relation to the container
    const zoomOrigin = {
        x: mousePosition.x - containerRect.left,
        y: mousePosition.y - containerRect.top
    }

    // Calculates the distance from the origin (center)
    const currentDistanceCenter = {
        x: containerRect.width/2 - zoomOrigin.x,
        y: containerRect.height/2 - zoomOrigin.y
    }

    // Calculates the distance to the center with the current scale
    const scaledDistanceToCenter = {
        x: currentDistanceCenter.x * zoomFactor,
        y: currentDistanceCenter.y * zoomFactor
    }

    // Calculats the offset from the original origin vs the scaled origin
    const zoomOffset = {
        x: currentDistanceCenter.x - scaledDistanceToCenter.x,
        y: currentDistanceCenter.y - scaledDistanceToCenter.y
    }
    return zoomOffset
}
const getScaledTranslation = (state, zoomFactor) => (
    {
    // Modifies the translation by the zoomfactor
    x: state.translateX * zoomFactor,
    y: state.translateY * zoomFactor,
});