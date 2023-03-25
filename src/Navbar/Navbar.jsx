import React from 'react';
import './Navbar.css';

export default function Navbar() {

    /*
    - When a user is on a certain section
    - A class is added to the related tab in the navbar to indicate that's the section
    - The class is removed once the user leaves the section
    */

    return (
        <ul>
            <li>
                <a href="#/about">About</a>
            </li>
            <li>
                <a href="/#portfolio">Portfolio</a>
            </li>
            <li>
                <a href="/#contact">Contact</a>
            </li>
        </ul>
    )
}
