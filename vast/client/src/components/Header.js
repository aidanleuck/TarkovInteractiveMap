import React, { useState } from 'react';
import { LoginForm } from "./Login.js"
import '../CSS/header.css';
//import { Link } from "react-router-dom";

export const Header = (props) => {
    const [loginVal, setLoginVal] = useState(props.loggedIn === "true" ? 'Log Out' : 'Log In');
    const [hidden, setHidden] = useState('hidden')
    function clickLogin() {
        if(hidden==="hidden" && props.loggedIn==="false"){
            setHidden("");
        }
        if (props.loggedIn === "true") {
            props.setLogin("false");
            setLoginVal('Log In');

        }
    }
    return (
        <div>
            <nav class="navbar theme1 navbar-expand-lg fixed-top">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <a class="navbar-brand nav-link theme1 justify-content-start" href="#">VAST</a>
                        <ul class="navbar-nav theme1 w-100 justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link theme1" href="#">Customs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link theme1" href="#">Factory</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link theme1" href="#">Interchange</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link theme1" href="#">Labs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link theme1" href="#">Reserve</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link theme1" href="#">Shoreline</a>
                            </li>
                        </ul>
                        <a
                            className={`{theme1 nav-link justify-content-end w-60 login`}
                            onClick={() => clickLogin()}data-bs-toggle="collapse" data-bs-target="#loginForm" aria-expanded="false" aria-controls="loginForm">{loginVal}</a>
                    </div>
                </div>
            </nav>
            <LoginForm loggedIn={props.loggedIn} setLogin={props.setLogin} setLoginVal={setLoginVal} hidden={hidden} setHidden={setHidden}></LoginForm>
        </div>


    );
}
