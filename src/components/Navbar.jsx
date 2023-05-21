import React from "react"
import logo from "../assets/react.svg"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navFirst">
                <img className="nav--logo" src={logo}></img>
                <h3 className="nav--logo_text">ReactFacts</h3>
            </div>            
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
        
    )
}

export default Navbar