import React, { Component, useState } from 'react'
import { ViewToolBar } from './components/Toolbar.js'
import { ViewController } from "./components/ViewController.js"
import { ViewMarker } from './components/Marker.js'
import { Header } from "./components/Header.js"
import image from './Images/customsMap.jpg'
import useCookie from 'react-use-cookie';
import './CSS/app.css'

function App() {
    const [login, setLogin] = useCookie('login', false);
    return (
        <div>
            <Header loggedIn={login} setLogin = {setLogin}/>
            <ViewToolBar/>
            <ViewMarker/>
            <ViewController/>
        </div>
    ); 
}
 
export default App
