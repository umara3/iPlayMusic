



import Header from "../components/Header";
import React, { useState } from "react";

const songs = [
  { id: 1, title: "Old Town Road", artist: "Billy Ray Cyrus", duration: "3:58", image: "./artist1.png" },
  { id: 2, title: "Don't Call Me Up", artist: "Mabel", duration: "2:46", image: "./artist1.png" },
  { id: 3, title: "Let Me Down Slowly", artist: "Alec Benjamin", duration: "4:12", image: "./artist1.png" },
  { id: 4, title: "Here With Me", artist: "Marshmello", duration: "3:37", image: "./artist1.png" },
  { id: 5, title: "Paradise", artist: "Bazzi", duration: "3:12", image: "./artist1.png" },
  { id: 6, title: "Sucker", artist: "Jonas Brothers", duration: "3:56", image: "./artist1.png" },
  { id: 7, title: "Kill This Love", artist: "BLACKPINK", duration: "2:47", image: "./artist1.png" },
  { id: 8, title: "Kill This Love", artist: "BLACKPINK", duration: "2:47", image: "./artist1.png" },
  { id: 9, title: "Kill This Love", artist: "BLACKPINK", duration: "2:47", image: "./artist1.png" },
];

const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", ...Array(10).keys()].map(String);

function Songs() {
  const [selectedId, setSelectedId] = useState(null);
  
  return (
    <div style={styles.container}>
      <Header title="SONGS" />

      <h2 style={styles.heading}>All Songs</h2>

      <div style={styles.wrapper}>
        {/* Song List */}
        <div style={styles.songList}>
          {songs.map((song) => {
            const isSelected = selectedId === song.id;
            return (
              <div
                key={song.id}
                onClick={() => setSelectedId(song.id)}
                style={{
                  ...styles.songItem,
                  backgroundColor: isSelected ? "#ff3b3f" : "#f9f9f9",
                  color: isSelected ? "#fff" : "#000",
                  
                }}
              >
                <div style={styles.playIcon}>
                  <span style={styles.playSymbol}>▶</span>
                </div>

                {isSelected && (
                  <img
                    src={song.image}
                    alt="Album Art"
                    style={styles.albumImage}
                  />
                )}

                <div style={styles.songInfo}>
                  <h3 style={{ ...styles.songTitle, color: isSelected ? "#fff" : "#000" }}>{song.title}</h3>
                  <p style={{ ...styles.songArtist, color: isSelected ? "#fff" : "#666" }}>{song.artist}</p>
                </div>

                <div style={{ ...styles.duration, color: isSelected ? "#fff" : "#666" }}>{song.duration}</div>
              </div>
            );
          })}
        </div>

        {/* Alphabet Sidebar */}
        <div style={styles.alphabetColumn}>
          {alphabet.map((char) => (
            <div key={char} style={styles.alphabetLetter}>
              {char}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: "0 auto",
    padding: "2em",
    width: "450px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    margin: "20px 0",
    backgroundImage: "linear-gradient(to right, #EE0979, #FF6A00)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "left",
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gap: "15px",
    alignItems: "start",
  },
  songList: {
    flex: 1,
  },
  songItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  playIcon: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    backgroundColor: "#ff3b3f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
  },
  playSymbol: {
    color: "#fff",
    fontSize: "14px",
  },
  albumImage: {
    width: "50px",
    height: "50px",
    borderRadius: "5px",
    marginRight: "10px",
  },
  songInfo: {
    flexGrow: 1,
  },
  songTitle: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "bold",
  },
  songArtist: {
    margin: 0,
    fontSize: "14px",
  },
  duration: {
    fontSize: "14px",
  },
  alphabetColumn: {
    marginLeft: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   /* marginTop: "2em",*/
  },
  alphabetLetter: {
    fontSize: "12px",
    padding: "1px",

    color: "#999",
    cursor: "pointer",
    
  },
};

export default Songs;




 
