import React, { Component } from 'react';
import { ViewToolBar } from './components/Toolbar.js';
import {ViewController} from "./components/ViewController.js"
import { Marker, ViewMarker } from './components/Marker.js';
import image from './Images/customsMap.jpg'

function App() {
 // return ViewController({image});
 return ViewToolBar();
}
 
export default App
