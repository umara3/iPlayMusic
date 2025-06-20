



function ArtistSlider() {
  const artists = ["./artist1.png", "./artist1.png", "./artist1.png"]; 
  const centerIndex = Math.floor(artists.length / 2); // Gets center image dynamically

  return (
    <div style={styles.slider}>
      {artists.map((artist, index) => (
        <img 
          key={index} 
          src={artist} 
          alt="Artist"
          style={{
            ...styles.image,
            transform: index === centerIndex ? "scale(1.3)" : "scale(0.9)", // Center bigger, sides smaller
            opacity: index === centerIndex ? "1" : "0.7", // Faded effect for side images
          }}
        />
      ))}
    </div>
  );
}

const styles = {
  slider: {
    display: "flex",
    overflowX: "auto",
    gap: "10px",
    padding: "10px",
    scrollbarWidth: "none",
    justifyContent: "center", // Center alignment
    alignItems: "center",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    transition: "transform 0.3s ease, opacity 0.3s ease", // Smooth effect
  },
};

// ✅ Hide scrollbar in WebKit browsers (Chrome, Safari)
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  .slider::-webkit-scrollbar {
    display: none;
  }
`;
document.head.appendChild(styleTag);

export default ArtistSlider;


