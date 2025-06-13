
//import './App.css'
/*import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Playlist from "./pages/Playlist";
import Featured from "./pages/Featured";

function App() {
  

  return (
    <>
   <Router>
    <Routes>
     <Route path="/playlist" element={<Playlist />} />
     <Route path="/featured" element={<Featured />} />
      </Routes>
    </Router>   
    </>
  )
}

export default App;*/


/*import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Playlist from "./pages/Playlist";
import Featured from "./pages/Featured";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div style={{
      backgroundColor: darkMode ? "#341931" : "#fff",
      color: darkMode ? "#fff" : "#000",
      minHeight: "100vh",
      transition: "background-color 0.3s ease"
    }}>
      <Routes> 
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/featured" element={<Featured />} />
      </Routes>

      
      <Footer toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;*/


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Playlist from "./pages/Playlist";
import Featured from "./pages/Featured";
import Categories from "./pages/Categories";
import Footer from "./components/Footer";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div style={{
      backgroundColor: darkMode ? "#341931" : "#fff",
      color: darkMode ? "#fff" : "#000",
      minHeight: "100vh",
      transition: "background-color 0.3s ease"
    }}>
      
      

      
        <Routes>
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      

      
      <Footer toggleTheme={toggleTheme} darkMode={darkMode} />
    </div>
  );
}

export default App;

