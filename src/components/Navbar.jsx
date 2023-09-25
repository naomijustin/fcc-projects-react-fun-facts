import React from "react"
import logo from "../assets/react.svg"

// function Navbar() {
//     return (
//         <nav className="navbar">
//             <div className="navFirst">
//                 <img className="nav--logo" src={logo}></img>
//                 <h3 className="nav--logo_text">ReactFacts</h3>
//             </div>            
//             <h4 className="nav--title">React Course - Project 1</h4>
//         </nav>
        
//     )
// }

// export default Navbar


export default function Navbar(props) {
    return (
         <nav 
            className={props.darkMode ? "dark": ""}
        >
            <img 
                className="nav--logo_icon"
                src={logo}
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}