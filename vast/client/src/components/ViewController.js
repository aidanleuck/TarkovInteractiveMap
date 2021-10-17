import React from 'react';
import {useZoom} from '../helperFunctions/panAndZoomHook';
import image from '../Images/map.png'
import '../CSS/map.css'

// Main functional component that holds state of the map view
export const ViewController = () =>{
    // State of the component
    const{
        imageContainerRef,
        onWheel,
        translateX,
        translateY,
        scale,

    } = useZoom();
        return (
            <div
              className="Image-container"
              ref={imageContainerRef}
              onWheel={onWheel}
            >
              <div
                style={{
                  WebkitTransform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
                  WebkitTransition: '.5s ease-in-out'
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