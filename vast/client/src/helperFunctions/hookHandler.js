import {types, zoom} from './actions';

// The initial state of the component
export const initialState = {
    translateX: 0,
    translateY: 0,
    prevMouseX: 0,
    prevMouseY: 0,
    scale: 1.5,
}

// Handler that determines what method should be called
export const hookHandler = (state, action) => {
    switch (action.type) {
        case types.ZOOM:
            if (state.scale * action.zoomFactor  <= action.maxZoom && state.scale * action.zoomFactor >= action.minZoom ) {
                const scaledTranslation = getScaledTranslation(state, action.zoomFactor);
                const mousePositionOnScreen = { x: action.clientX, y: action.clientY };
                const zOffset = getZoomOffset(action.containerRect, mousePositionOnScreen, action.zoomFactor)

                // Calculates buffer for zooming
                const offsetTranslate = {x: scaledTranslation.x - zOffset.x, y: scaledTranslation.y - zOffset.y}
                const newZoom = action.zoomFactor * state.scale;
                const buffer = calculateBuffer(action.window, action.containerRect, newZoom);

                // Determines translation bounded by the provided buffer
                const {translateX, translateY} = getBufferedTranslation(offsetTranslate, buffer);
               
                return {
                    ...state,
                    scale: state.scale * action.zoomFactor,
                    translateX: translateX,
                    translateY: translateY,
                }
            }
            else{
                return{...state}
            }
            case types.START_PAN:
                return{
                 ...state,
                 prevMouseX: action.clientX,
                 prevMouseY: action.clientY
                }
                
            case types.PAN:
                // Gets how much mouse has moved
                const changeX = action.clientX - state.prevMouseX
                const changeY = action.clientY - state.prevMouseY

                // Calculates the translation
                let translation = {x: state.translateX + changeX, y: state.translateY + changeY};
                
                // Calculate buffer and get the translation bounded by buffer
                const buffer = calculateBuffer(action.window, action.containerRect, state.scale);
                const {translateX, translateY} = getBufferedTranslation(translation, buffer);

                return {...state,
                    translateX: translateX,
                    translateY: translateY,
                    prevMouseX: action.clientX,
                    prevMouseY: action.clientY
                }
            default:
                return {...state,
                scale:state.scale,
                translateX: state.translateX,
                translateY: state.translateY}      
        
    }
};

function getBufferedTranslation(translate, buffer){
    let translateX = translate.x;
    let translateY = translate.y; 

    // If translation is greater than buffer set to max
    if(translateX > buffer.x){
        translateX = buffer.x;
    }
    // We start out at top so don't allow translation to go up
    if(translateY > 0){
        translateY = 0;
    }

    // If translate x is too negative set to max neg
    if(translateX < -buffer.x){
        translateX = -buffer.x;
    }

     // If translate y is too negative set to max neg
    if(translateY < -buffer.y){
        translateY = -buffer.y;
    }
    return {translateX, translateY}
}

const calculateBuffer = (window, containerRect, scale) =>{
  
    // Calculates the distance from the origin (center)
    const currentDistanceCenter = {
       x: containerRect.width/2 - containerRect.left,
       y: containerRect.bottom
   }

   // Calculates the distance to the center with the current scale
   const scaledDistanceToCenter = {
       x: currentDistanceCenter.x * scale,
       y: currentDistanceCenter.y * scale
   }

   // Calculates the current viewport
   const viewPortCenter = {
       x: window.imageContainerWidth/2,
       y: window.imageContainerHeight
   }
   // Calculates the max translation in x and y direction
   const maxTranslation = {
       x: scaledDistanceToCenter.x - viewPortCenter.x,
       y: scaledDistanceToCenter.y - viewPortCenter.y
   }
   return maxTranslation
}

// Calculates zoom offset values
 const getZoomOffset = (containerRect, mousePosition, zoomFactor)  =>{

    // Figures out where the mouse position is in relation to the container
    const zoomOrigin = {
        x: mousePosition.x - containerRect.left,
        y: mousePosition.y + containerRect.bottom/2
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