import { useRef, useReducer } from 'react'
import { initialState, hookHandler } from './hookHandler'
import {startPan, zoom, pan} from './actions'

// Custom hook to handle zooming in and out
export const useZoom = () =>{
    // Reducer to bind initial state value to as well as update on the hook
    const [state, dispatch] = useReducer(hookHandler, initialState)
   
    // Reference to the container for the event to wait on
    const imageContainerRef = useRef(null);

    // What to do in the event of a onWheel event handler is asked for
    const onWheel = (event) => {
        // Checks if we scrolled up/down and we have a valid reference to the container
        if(event.deltaY !== 0 && imageContainerRef.current){
            // Gets the bounding rectangle around the container
            const imageContainerRect = imageContainerRef.current.getBoundingClientRect();

            const imageContainerWidth = imageContainerRef.current.clientWidth;
            const imageContainerHeight = imageContainerRef.current.clientHeight;
            const windowSize = {imageContainerWidth, imageContainerHeight};

            // Dispatch the event to the hook handler
            dispatch(zoom(event, imageContainerRect, windowSize))
        } 
    }
    const onMouseMove = (event)=>{
        event.preventDefault();
        const imageContainerWidth = imageContainerRef.current.clientWidth;
        const imageContainerHeight = imageContainerRef.current.clientHeight;

        // Gets the bounding rectangle around the container
        const imageContainerRect = imageContainerRef.current.getBoundingClientRect();
        const windowSize = {imageContainerWidth, imageContainerHeight};
        dispatch(pan(event, windowSize, imageContainerRect))

    }
    const onMouseUpInWindow =(event) =>{
        window.removeEventListener('mouseup', onMouseUpInWindow)
        window.removeEventListener('mousemove', onMouseMove)
    }
    const onMouseDown = (event) =>{
        event.preventDefault();
        const imageContainerWidth = imageContainerRef.current.clientWidth;
        const imageContainerHeight = imageContainerRef.current.clientHeight;

        const windowSize = {imageContainerWidth, imageContainerHeight};
        // Gets the bounding rectangle around the container
        const imageContainerRect = imageContainerRef.current.getBoundingClientRect();

        dispatch(startPan(event, windowSize, imageContainerRect))
        window.addEventListener('mouseup' ,onMouseUpInWindow)
        window.addEventListener('mousemove', onMouseMove)
        
    }
    return {
        ...state,
        imageContainerRef,
        onWheel,
        onMouseDown
        
      }

    
}