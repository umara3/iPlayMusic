

import Header from "../components/Header";
import bgImage from "../assets/sound-wave.png";

function Artists() {
  return (
    <>
      <div style={styles.container}>
        <div style={styles.background}>
          <Header title="MUSIC" />

          {/* All Artists Heading */}
          <h2 style={styles.heading}>All Artists</h2>
        </div>

        {/* Artist of the Month */}
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>Artist Of The Month</h3>
          <span style={styles.viewAll}>View All</span>
        </div>

        {/* Scrolling Featured Artist of the Month */}
        <div style={styles.scrollContainer}>
  {featuredArtists.map((artist, index) => (
    <div key={index} style={styles.artistWrapper}>
      <img src={artist.image} alt={artist.name} style={styles.featuredImage} className="hover-effect" />
      <div style={styles.overlay}>
        <div style={styles.monthName}>April</div> {/* Month Name in White */}
        <div style={styles.artistNamePink}>{artist.name}</div> {/* Artist Name in Pink */}
      </div>
    </div>
  ))}
</div>


        
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>Featured Artists</h3>
          <span style={styles.viewAll}>View All</span>
        </div>

        
        <div style={styles.circularScroll}>
          {featuredCircleArtists.map((artist, index) => (
            <div key={index} style={styles.circleItem}>
              <img src={artist.image} alt={artist.name} style={styles.circleImage} />
              <div style={styles.artistNameBlack}>{artist.name}</div>
            </div>
          ))}
        </div>

        
        <div style={styles.sectionHeader}>
          <h3 style={styles.sectionTitle}>Top Artists By Country</h3>
        </div>

        {/* Scrollable Country-based Top Artists */}
        <div style={styles.countrySection}>
          {topArtistsByCountry.map((artist, index) => (
            <div key={index} style={{...styles.countryCard, backgroundColor: artist.color }}>
              <div style={styles.placeholder}>
              <div style={styles.top50}>Top 50</div> 
        <div style={styles.countryName}>{artist.country}</div> 
            </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Sample Data
const featuredArtists = [
  { image: "artist1.png", name: "The Weeknd" },
  { image: "artist1.png", name: "Ariana Grande" },
  { image: "artist1.png", name: "Drake" },
];

const featuredCircleArtists = [
  { image: "circle1.png", name: "Taylor Swift" },
  { image: "circle1.png", name: "Ed Sheeran" },
  { image: "circle1.png", name: "Beyoncé"  },

];

const topArtistsByCountry = [
  { country: " US", color: "green" },
  { country: "GLOBAL", color: "blue" },
];

// Styling Object
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
  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  viewAll: {
    fontSize: "16px",
    color: "red",
    cursor: "pointer",
  },
  scrollContainer: {
    display: "flex",
    overflowX: "auto",
    gap: "10px",
  },
  /*featuredImage: {
    width: "275px",
    height: "171.77px",
    borderRadius: "10px",
    transition: "transform 0.3s ease-in-out",
  },
  /*circularScroll: {
    display: "flex",
    overflowX: "auto",
    gap: "10px",

  },
  

 /* circleItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
 /* circleImage: {
   /* width: "98px",
    height: "98px",*/
   /* borderRadius: "100%",
  },*/

  artistNamePink: { // ✅ Used for "Artist of the Month"
    color: "#EE0979",
    fontSize: "18px",
    fontWeight: "bold",
  },
  artistNameBlack: { // ✅ Used for "Featured Artists"
    color: "black",
    
    fontWeight: "extra-light",
  },
  circularScroll: {
    display: "flex",
    overflowX: "auto",
    gap: "10px",
    padding: "10px",
    scrollbarWidth: "none",
  },
  circleItem: {
    textAlign: "center",
  },
  circleImage: {
    width: "98px",
    height: "98px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  artistName: {
    marginTop: "5px",
    fontWeight: "light",
  },
  countrySection: {
    display: "flex",
    overflowX: "auto",
    gap: "10px",
  },
  countryCard: {
    width: "155px",
    height: "155px",
    backgroundColor: "color",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    fontWeight: "bold",
    color: "white",
    marginBottom: "4em",
  },
  
  placeholder: {
    textAlign: "center",
    
  },
  top50: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  countryName: {
    fontSize: "16px",
    color: "white",
    marginTop: "4px", 
  },




 
  artistWrapper: {
    position: "relative",
    display: "inline-block",
  },
  featuredImage: {
    width: "275px",
    height: "171.77px",
    borderRadius: "10px",
  },
  overlay: {
    position: "absolute",
    bottom: "30px", /* Adjust text placement */
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    
  },
  monthName: {
    color: "white",
    fontSize: "14px",
    
    
  },
 

  
};



export default Artists;
