



import React from "react";

const songs = [
  { id: 1, title: "Neon Dreams", artist: "Synthwave Hero", duration: "3:45" },
  { id: 2, title: "Sunset Vibes", artist: "Emma Stone", duration: "4:20" },
  { id: 3, title: "Lightspeed", artist: "DJ Pulse", duration: "2:55" },
  { id: 4, title: "Old Town Road", artist: "Billy Ray Cyrus", duration: "3:58" },
  { id:5, title: "Don’t Call Me Up", artist: "Mabel", duration: "2:46" },
  {id:6, title: "Let Me Down Slowly", artist: "Alec Benjamin", duration: "4:12" },
  {id:7, title: "Here With Me", artist: "Marshmello", duration: "3:37" },
  {id:8, title: "Paradise", artist: "Bazzi", duration: "3:12" },
  
];

const SongList = () => {
  return (
    <div className="songs-container">
      {songs.map((song) => (
        <PlaylistItem
          key={song.id}
          title={song.title}
          artist={song.artist}
          duration={song.duration}
        />
      ))}
    </div>
  );
};

const PlaylistItem = ({ title, artist, duration }) => {
  return (
    <div style={styles.songsContainer}>
  <div style={styles.songItem}>
    <div style={styles.songInfo}>
      <button style={styles.playButton}>▶</button>
      <div>
        <div style={styles.songTitle}>Neon Dreams</div>
        <div style={styles.songArtist}>Synthwave Hero</div>
      </div>
    </div>
    <div style={styles.songDuration}>3:45</div>
  </div>
</div>
  );
};








const styles = {
  
  playIcon: {
    color: "red",
    fontSize: "24px",
  },


songsContainer: {
    flex: 1,
    
    padding: "1rem",
  },
  songItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  songInfo: {
    display: "flex",
    alignItems: "center",
  },
  playButton: {
    background: "linear-gradient(to top right, #ec4899, #f97316)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    marginRight: "1rem",
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

export default SongList;
