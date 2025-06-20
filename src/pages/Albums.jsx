

import Header from "../components/Header";
//import AlbumList from "./components/AlbumList";
import { Link } from "react-router-dom";



function Albums() {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.background}>
          <Header title="MUSIC" />

          
          <h2 style={styles.heading}>All Albums</h2>
        </div>

        {/* Featured Albums Section */}
        <div style={styles.featuredSection}>
          <h3 style={styles.featuredTitle}>Featured Albums</h3>
          <span style={styles.viewAll}>View All</span>
        </div>

        {/* Featured Albums (Vertical Images) */}
        <div style={styles.featuredAlbums}>
          {featuredAlbums.map((album, index) => (
            <Link key={album.id} to={`/albumdetails/${album.id}`} onClick={() => console.log(album.id)}>
              <img key={index} src={album.image} alt={album.name} style={styles.featuredImage} />
            </Link>
          ))}
        </div>

        {/* New Releases Section */}
        <div style={styles.newReleasesSection}>
          <h3 style={styles.newReleasesTitle}>New Releases</h3>
          <span style={styles.viewAll}>View All</span>
        </div>

        
        <div style={styles.newReleases}>
  {newAlbums.map((album, index) => (
    <div key={index} style={styles.albumItem}>
      {/* Album Image */}
      <img src={album.image} alt={album.name} style={styles.albumImage} />

      {/* Album Name & Artist */}
      <div style={styles.albumDetails}>
        <div style={styles.albumName}>{album.name}</div>
        <div style={styles.albumArtist}>{album.artist}</div>
      </div>

      {/* Song Count */}
      <span style={styles.songCount}>{album.songCount} songs</span>
    </div>
  ))}
</div>

      </div>
    </>
  );
}

const featuredAlbums = [
  { image: "artist1.png", name: "Classic Beats" },
  { image: "artist1.png", name: "Synthwave Era" },
  { image: "artist1.png", name: "Jazz Vibes" },
];

const newAlbums = [
  { image: "artist1.png", name: "Future Bass", artist: "DJ Nova", songCount: 12 },
  { image: "artist1.png", name: "Retro Wave", artist: "Synth Master", songCount: 10 },
  { image: "artist1.png", name: "Lo-Fi Chill", artist: "Relax Tunes", songCount: 15 },
];

const styles = {
  container: {
     margin: "0 auto",
  padding: "2em 2em",
  width: "450px",
  },
  
  heading: {
    textAlign: "left",
    fontSize: "40px",
    fontWeight: "bold",
    margin: "20px 0",
    backgroundImage: "linear-gradient(to right, #EE0979, #FF6A00)", 
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  featuredSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  featuredTitle: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  viewAll: {
    fontSize: "16px",
    color: "red",
    cursor: "pointer",
  },
  featuredAlbums: {
    display: "flex",
    /*flexDirection: "column",*/
    gap: "10px",
    alignItems: "center",
  },
  featuredImage: {
    width: "130px",
    height: "130px",
    borderRadius: "10px",
  },
  newReleasesSection: {
   display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
  },
  newReleasesTitle: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  newReleases: {
    display: "flex",
    flexDirection: "column", 
    marginTop: "15px",
  },
  albumItem: {
    display: "flex",
    flexDirection: "row", 
    alignItems: "center",
    justifyContent: "space-between", 
    width: "100%",
    padding: "10px",
   
  },
   albumImage: {
    width: "50px",
    height: "50px",
    borderRadius: "10px",
    marginRight: "10px",
  },
  albumDetails: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
  },
  albumName: {
    fontWeight: "bold",
  },
  albumArtist: {
    fontSize: "0.8rem",
    color: "gray",
    },
  songCount: {
    flex: 1, 
    textAlign: "right", 
    fontSize: "0.9rem",
    color: "gray",
  },
 
};

export default Albums;
