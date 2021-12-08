import React, { Component } from 'react'
import { ViewToolBar } from './components/Toolbar.js'
import { ViewController } from "./components/ViewController.js"
import { ViewMarker } from './components/Marker.js'
import { Header } from "./components/Header.js"
import { LoginForm } from "./components/Login.js"
import image from './Images/customsMap.jpg'
import './CSS/app.css'

function App() {
    return (
        <div>
            <Header/>
            <ViewToolBar/>
            <ViewMarker/>
            <ViewController/>
            <LoginForm/>
        </div>
    ); 
}
 
export default App
