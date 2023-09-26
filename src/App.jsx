import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

function App() {
  
  const [darkMode, setDarkMode] = React.useState(false);

  const handleClick = function() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    console.log(darkMode);
  }



  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={handleClick} />
      <Main />
    </div>
  )
}
 export default App