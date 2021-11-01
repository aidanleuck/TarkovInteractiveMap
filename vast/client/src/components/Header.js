import React from 'react';
import styles from '../CSS/nav.css';
//import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div class="bar" id="header">
            <h1 id="logo">VAST</h1>
            <ul class="nav_list" id="header_list">
                <li class="nav_list_element" id="header_list_element">
                    <a><h2>Woods</h2></a>
                </li>
                <li class="nav_list_element" id="header_list_element">
                    <a><h2>Shoreline</h2></a>
                </li>
                <li class="nav_list_element" id="header_list_element">
                    <a><h2>Resort</h2></a>
                </li>
                <li class="nav_list_element" id="header_list_element">
                    <a><h2>Labs</h2></a>
                </li>
                <li class="nav_list_element" id="header_list_element">
                    <a><h2>Interchange</h2></a>
                </li>
                <li class="nav_list_element" id="header_list_element">
                    <a><h2>Factory</h2></a>
                </li>
                <li class="nav_list_element" id="header_list_element">
                    <a><h2>Customs</h2></a>
                </li>
            </ul>
        </div>
    );
}
