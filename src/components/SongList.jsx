
const songs = [
  { id: 1, title: "Neon Dreams", artist: "Synthwave Hero", duration: "3:45" },
  { id: 2, title: "Sunset Vibes", artist: "Emma Stone", duration: "4:20" },
  { id: 3, title: "Lightspeed", artist: "DJ Pulse", duration: "2:55" },
];

function SongList() {
  return (
    <div style={styles.list}>
      {songs.map((song) => (
        <div key={song.id} style={styles.songItem}>
          <div style={styles.playIcon}>🔴</div>
          <div>
            <h4>{song.title}</h4>
            <p>{song.artist}</p>
          </div>
          <span>{song.duration}</span>
        </div>
      ))}
    </div>
  );
}

const styles = {
  list: { marginTop: "10px" },
  songItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
  playIcon: {
    color: "red",
    fontSize: "24px",
  },
};

export default SongList;
