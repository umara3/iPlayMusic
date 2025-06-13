
import { useState } from "react";
import Header from "../components/Header";

const categoriesData = [
  { id: 1, title: "Pop Music", list: ["Top Hits", "Party", "New Releases"] },
  { id: 2, title: "Rock", list: ["Classic Rock", "Alternative", "Indie"] },
  { id: 3, title: "Jazz", list: ["Smooth Jazz", "Swing", "Blues"] },
  { id: 4, title: "Hip-Hop", list: ["Rap Battles", "90s Hip-Hop", "Trap"] },
  { id: 5, title: "Electronic", list: ["House", "Techno", "EDM"] },
  { id: 6, title: "Country", list: ["Modern Country", "Classic", "Folk"] },
  { id: 7, title: "Classical", list: ["Symphony", "Opera", "Piano"] },
  { id: 8, title: "Reggae", list: ["Roots Reggae", "Dancehall", "Ska"] },
  { id: 9, title: "Latin", list: ["Salsa", "Reggaeton", "Cumbia"] }
];

const cardColors = ["#FF69B4", "#007BFF", "#FFD700", "#32CD32", "#FF4500", "#6A5ACD", "#40E0D0", "#DC143C", "#8A2BE2"];


function Categories() {
  const [expanded, setExpanded] = useState(null);

  const toggleList = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div style={styles.container}>
      <Header title="CATEGORIES" />

      {/* Gradient Heading */}
      <h2 style={styles.heading}>Categories</h2>

      {/* Multi-Colored Dropdown 
      <select style={styles.dropdown}>
        <option>Choose a category</option>
        <option>Music Genres</option>
        <option>Top Charts</option>
      </select>*/}

      {/* Cards Section */}
      <div style={styles.cardsContainer}>
        {categoriesData.map((category, index) => (
          <div key={category.id} style={{...styles.card, backgroundColor: cardColors[index % cardColors.length] }}  onClick={() => toggleList(category.id)}>
            <h3 style={styles.cardTitle}>{category.title}</h3>
            <span style={styles.dots}>{expanded === category.id ? "..." : "..."}</span>
            {expanded === category.id && (
              <ul style={styles.list}>
                {category.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    margin: "0 auto",
  padding: "2em 2em",
  width: "450px",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: "40px",
    fontWeight: "bold",
    textAlign: "left",
    margin: "20px 0",
    backgroundImage: "linear-gradient(to right, #EE0979, #FF6A00)", 
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  dropdown: {
    width: "325px",
    height: "54px",
    fontSize: "18px",
    background: "linear-gradient(45deg, #FF6A00, #EE0979, #50C878)",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    padding: "10px",
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "15px",
    marginTop: "20px",
  },
  card: {
    padding: "15px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    cursor: "pointer",
    position: "relative",
    transition: "0.3s",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  },
  dots: {
    position: "absolute",
    right: "15px",
    fontSize: "22px",
    color: "white",
    top: "15px",
  },
  list: {
    marginTop: "10px",
    paddingLeft: "20px",
    fontSize: "16px",
  },
};

export default Categories;
