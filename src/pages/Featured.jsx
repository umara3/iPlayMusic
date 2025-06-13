
import Header from "../components/Header";
//import Footer from "../components/Footer";

const featuredMovies = [
  { id: 1, image: "/featured1.jpg", title: "The Greatest Showman", category: "Soundtrack" },
  { id: 2, image: "/featured2.jpg", title: "La La Land", category: "Soundtrack" }
];

function Featured() {
  return (
    <>
    <div style={styles.container}>
      <Header title="FEATURED" />

      {/* Featured Heading */}
      <h2 style={styles.heading}>Featured</h2>

      {/* Scrollable Soundtracks */}
      <div style={styles.scrollContainer}>
        {featuredMovies.map((movie) => (
          <div key={movie.id} style={styles.movieCard}>
            <img src={movie.image} alt={movie.title} style={styles.image} />
            <div style={styles.overlay}>
              <h3>{movie.title}</h3>
              <p>{movie.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
}

const styles = {
   /*  body:{
 margin: "0 auto",
  padding: "2em 2em",
  fontFamily: "Arial, sans-serif",
  withth: "100%",
},*/
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
  
  scrollContainer: {
  display: "flex", 
  flexDirection: "column", 
  overflowX: "auto", 
  gap: "20px",
  paddingBottom: "10px",
  scrollbarWidth: "none",
  whiteSpace: "nowrap", 
},

  movieCard: {
    position: "relative",
    minWidth: "250px",
    borderRadius: "10px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
  overlay: {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    color: "#fff",
    fontSize: "18px",
  },
};

// Hide scrollbar for WebKit browsers (Chrome, Safari)
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  .scrollContainer::-webkit-scrollbar {
    display: none;
  }
`;
document.head.appendChild(styleTag);

export default Featured;
