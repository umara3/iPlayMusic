
import Header from "../components/Header";
import ArtistSlider from "../components/ArtistSlider";
import SongList from "../components/SongList";
import bgImage from "../assets//sound-wave.png"; 
function Playlist() {
  return (
    <>
    <div style={styles.container}>
      <div style={styles.background}>
      <Header title="PLAYLISTS" />
      
      {/* Playlist Heading */}
      <h2 style={styles.heading}>Playlists</h2>

      {/* Artist Slider */}
      <ArtistSlider />
      
        
      </div>

      

      {/* Top 50 Heading */}
      <h3 style={styles.top50}>
  TOP 50
  <br /> Rock Ballads
</h3>
      {/* Songs List */}
      <SongList />

      {/* Listen All Button */}
      <button style={styles.listenAll}>LISTEN ALL</button>
    </div>
    </>
  );
}

const styles = {
  
  container: {
    margin: "0 auto",
  padding: "2em 2em",
  width: "450px",
  },
  background: {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "300px",
  },

  

  heading: {
    textAlign: "left",
    fontSize: "24px",
    fontWeight: "bold",
    margin: "10px 0",
    marginLeft: "2em",
    marginbottom: "4em",
    color: "white",
  },
  top50: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    textAlign: "center",
  },
  listenAll: {
    width: "100%",
    padding: "10px",
    border: "2px solid red",
    borderRadius: "30px",
    backgroundColor: "#fff",
    color: "red",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "20px",
    marginBottom: "4em",
  },
};

export default Playlist;
