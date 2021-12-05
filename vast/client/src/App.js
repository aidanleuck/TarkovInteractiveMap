import React, { Component } from 'react';
import { ViewToolBar } from './components/Toolbar.js';
import {ViewController} from "./components/ViewController.js"
import { Marker, ViewMarker } from './components/Marker.js';
import image from './Images/customsMap.jpg'
import {Header} from "./components/Header.js"
import './CSS/app.css'
function App() {
  
 // return ViewController({image});
    // return ViewMarker();
  
    return (
        <div>
            <div class="position-fixed" >
                
                <ViewToolBar/>
                
            </div>
            <div>
                <ViewController />
            </div>
        </div>
    ) 
        

}
 
export default App
