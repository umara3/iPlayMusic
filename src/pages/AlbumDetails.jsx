

import Header from "../components/Header";

function AlbumDetails() {
  return (
    <section style={styles.bigContainer}>
        
     
      
      <div style={styles.container}>
        <Header title="ALBUM" />
        <h2 style={styles.albumTitle}>Synthwave Dreams</h2>
        <h3 style={styles.songCount}>12 songs</h3>

        
        <div style={styles.genreSection}>
          <span style={styles.genreTitle}>Genres & Hashtags:</span>
          <div style={styles.genreTags}>
            <button style={styles.genreButton}>#Synthwave</button>
            <button style={styles.genreButton}>#Retro</button>
          </div>
        </div>
      </div>

      
      <div style={styles.songsContainer}>
        <h2 style={styles.songsHeading}>All Songs</h2>

        {songs.map((song, index) => (
          <div key={index} style={styles.songItem}>
            <button style={styles.playButton}>▶</button>
            <div>
              <div style={styles.songTitle}>{song.title}</div>
              <div style={styles.songArtist}>{song.artist}</div>
            </div>
            <span style={styles.songDuration}>{song.duration}</span>
          </div>
        ))}
      </div>
    </section>
  );
}


const songs = [
  { title: "Neon Nights", artist: "Neon Pulse", duration: "3:45" },
  { title: "Midnight Drive", artist: "Neon Pulse", duration: "4:12" },
  { title: "Retro Waves", artist: "Neon Pulse", duration: "3:58" },
  { title: "Future Echoes", artist: "Neon Pulse", duration: "4:05" },
];


const styles = {
    bigContainer: {
        margin: "0 auto",
        padding: "2em 2em",
        width: "450px",
       
    },
  container: {
    width: "100%",
    height: "400px",
    backgroundImage: `url('artist1.png')`, 
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
   display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
   
  },
  albumTitle: {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  songCount: {
    fontSize: "18px",
    color: "lightgray",
  },
  genreSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "15px",
  },
  genreTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
  },
  genreTags: {
    display: "flex",
    gap: "10px",
    marginTop: "8px",
  },
  genreButton: {
    backgroundColor: "#EE0979",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "20px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  songsContainer: {
    padding: "20px",
  },
  songsHeading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  songItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid lightgray",
  },
  playButton: {
    background: "linear-gradient(to top right, #ec4899, #f97316)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  songTitle: {
    fontWeight: "bold",
  },
  songArtist: {
    fontSize: "0.8rem",
    color: "gray",
  },
  songDuration: {
    fontSize: "0.9rem",
    color: "gray",
  },
};

export default AlbumDetails;

