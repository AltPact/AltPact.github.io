import { useReducer, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import "../Styles/main.css";
import clsx from "clsx";
// import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

export default function Navbar() {
    const [drawerOpen, toggleDrawer] = useReducer((currentState) => !currentState, false);

    return (
        <header>
            <h3>Ashley's Website</h3>
            <nav className={clsx(drawerOpen && "responsive_nav")}>
                <a href="/#">Home</a>
                <a href="/my-work">My Work</a>
                <a href="/articles">Articles</a>
                <a href="/about-me">About me</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={toggleDrawer}>
                    <FaTimes />
                </button>
            </nav>
            <button
                className="nav-btn"
                onClick={toggleDrawer}>
                <FaBars />
            </button>
        </header>
    );
}
