
/*function ArtistSlider() {
  const artists = ["artist1.jpg", "artist2.jpg", "artist3.jpg"];

  return (
    <div style={styles.slider}>
      {artists.map((artist, index) => (
        <img key={index} src={`${artist}`} alt="Artist" style={styles.image} />
      ))}
    </div>
  );
}

const styles = {
  slider: {
    display: "flex",
    overflowX: "scroll",
    gap: "10px",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
};

export default ArtistSlider;*/


function ArtistSlider() {
  const artists = ["/artist1.png", "/artist2.jpg", "/artist3.jpg"]; 

  return (
    <div style={styles.slider}>
      {artists.map((artist, index) => (
        <img key={index} src={artist} alt="Artist" style={styles.image} />
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
    
  },
  image: {
    width: "100px",
    height: "100px",
    
    objectFit: "cover", 
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

