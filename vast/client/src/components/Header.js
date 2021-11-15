import React from 'react';
import styles from '../CSS/header.css';
//import { Link } from "react-router-dom";

export const Header = () => {
    return (
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
                    <a class="theme1 nav-link justify-content-end" href="#">Login</a>
                </div>
            </div>
        </nav>
    );
}
