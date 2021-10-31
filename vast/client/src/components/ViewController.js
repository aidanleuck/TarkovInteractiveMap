import React from 'react';
import {useZoom} from '../helperFunctions/panAndZoomHook';
import image from '../Images/customsMap.jpg'
import '../CSS/map.css'

// Main functional component that holds state of the map view
export const ViewController = () =>{
    // State of the component
    const{
        imageContainerRef,
        onWheel,
        onMouseDown,
        translateX,
        translateY,
        scale,

    } = useZoom();
        return (
            <div
              className="Image-container"
              ref={imageContainerRef}
              onWheel={onWheel}
              onMouseDown = {onMouseDown}
            >
              <div
                style={{
                  WebkitTransform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                  WebkitTransition: '.5s ease-in-out .1s',
                }}
              >
                <img
                  className="map"
                  alt="panable-and-zoomable"
                  src={image}
                />
              </div>
            </div>
          );
} 