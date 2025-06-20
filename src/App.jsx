


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Playlist from "./pages/Playlist";
import Featured from "./pages/Featured";
import Categories from "./pages/Categories";
import Songs from "./pages/Songs";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import AlbumDetails from "./pages/AlbumDetails";
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
          <Route path="/" element={<Featured />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/albumdetails" element={<AlbumDetails />} />
        </Routes>
      

      <Footer toggleTheme={toggleTheme} darkMode={darkMode} />
      
    </div>
  );
}

export default App;

