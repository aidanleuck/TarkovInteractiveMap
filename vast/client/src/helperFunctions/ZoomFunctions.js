import { useState } from "react";

// Determines what direction the mouse was moved
export function getDirection(event){
    return event.deltaY;
}

// Updates the scale
export function UpdateScale(event, state, props){
    let newScale = 1;
    const [minZoom, maxZoom, zoomFactor] = [parseFloat(props.minZoom), parseFloat(props.maxZoom), parseFloat(props.zoomFactor)]
    const currentZoom = state.currentZoom;

    if(getDirection(event) <= 0 && (currentZoom + zoomFactor) <= maxZoom){
        newScale = currentZoom + zoomFactor;
    }
    else if(getDirection(event) <= 0){
        newScale = maxZoom;
    }
    else if(getDirection(event) > 0 && (currentZoom - zoomFactor) >= minZoom){
        newScale = currentZoom - zoomFactor
    }
    else if(getDirection(event) > 0){ 
        newScale = minZoom;
    }
    
    return newScale;
}
export function calculateOffsetScale(mousePos, scale){
    const [mousePosX, mousePosY] = [mousePos.x, mousePos.y]
    return [mousePosX*scale, mousePosY*scale]

}

// Gets the new buffer value
export function getBuffer(state, scale){
    const[height, width] = [state.height, state.width]

    const updatedHeight = (height - height/scale)/2;
    const updatedWith = (width - width/scale)/2;

    return [updatedWith, updatedHeight]
}
