import React from "react"
import logo from "../assets/react.svg"

/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navFirst">
                <img src={logo}></img>
                <h1>ReactFacts</h1>
            </div>            
            <h2>React Course - Project 1</h2>
        </nav>
        
    )
}

export default Navbar