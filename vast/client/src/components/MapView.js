import React, { Component } from 'react';
import image from "../Images/map.png";
import "../CSS/map.css";
class MapView extends Component {
    state = {

    }
    render(){
        return (
            <div className = "mapContainer">
                <img className = "map" src = {image}></img>
            </div>
        );

    }
}
export default MapView;