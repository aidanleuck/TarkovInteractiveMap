import React, { Component } from 'react'
import { ViewToolBar } from './components/Toolbar.js'
import { ViewController } from "./components/ViewController.js"
import { Marker, ViewMarker } from './components/Marker.js'
import { Header } from "./components/Header.js"
import { LoginForm } from "./components/Login.js"
import image from './Images/customsMap.jpg'
import './CSS/app.css'

function App() {
    return (
        <div>
            <Header/>
            <ViewToolBar/>
            <ViewController/>
            <LoginForm/>
        </div>
    ); 
}
 
export default App
