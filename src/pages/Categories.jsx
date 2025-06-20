
/*import { useState } from "react";
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

const cardColors = ["rgb(255, 17, 104)", "rgb(229,64,40)","rgb(241,141,5)", "rgb(242,188,6)", "rgb(94,177,28)", "rgb(58,118,52)", "rgb(10,190,190)", "rgb(0,161,203)", "rgb(17,87,147)"];


function Categories() {
  const [expanded, setExpanded] = useState(null);

  const toggleList = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div style={styles.container}>
      <Header title="CATEGORIES" />

      
      <h2 style={styles.heading}>Categories</h2>

     

      
      <div style={styles.cardsContainer}>
        {categoriesData.map((category, index) => (
          <div key={category.id} style={{...styles.card, backgroundColor: cardColors[index % cardColors.length] }} 
           onClick={() => toggleList(category.id)}>
            <h3 style={styles.cardTitle}>{category.title}</h3>
            <span style={styles.dots}>{expanded === category.id ? "..." : "..."}</span>
            {expanded === category.id && (
              <ul style={styles.list}>
               
                {category.list.map((item, index) => (
                    <span style={styles.arrow}>
                  <li key={index}>{item}</li>
                  </span> 
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
  boxShadow: "0px -5px 10px rgba(128, 128, 128, 0.3)"
    
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
 
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "10px",
    marginTop: "20px",
  },
  card: {
    padding: "15px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    cursor: "pointer",
    position: "relative",
    transition: "0.3s", 
  height: "50%", 
 /* display: "flex",
  justifyContent: "space-between",
  alignItems: "center",*/
   
 /* },
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
    backgroundColor: "#fff",
    top: "100%", 



  },
  arrow: {
   
    color: "black",
  },
};

export default Categories;*/


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

const cardColors = ["rgb(255, 17, 104)", "rgb(229,64,40)","rgb(241,141,5)", "rgb(242,188,6)", "rgb(94,177,28)", "rgb(58,118,52)", "rgb(10,190,190)", "rgb(0,161,203)", "rgb(17,87,147)"];


function Categories() {
  const [expanded, setExpanded] = useState(null);

  const toggleList = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div style={styles.container}>
      <Header title="CATEGORIES" />

      
      <h2 style={styles.heading}>Categories</h2>

     

      
      {/* Cards Section */}
<div style={styles.cardsContainer}>
  {categoriesData.map((category, index) => (
    <div 
      key={category.id} 
      style={{ ...styles.card, backgroundColor: cardColors[index % cardColors.length] }} 
      onClick={() => toggleList(category.id)}
    >
      <h3 style={styles.cardTitle}>{category.title}</h3>
      <span style={styles.dots}>{expanded === category.id ? "..." : "..."}</span>

      {expanded === category.id && (
        <ul style={styles.list}>
          {category.list.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item} <span style={styles.arrow}>&gt;</span> {/* Adds arrow */}
            </li>
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
  boxShadow: "0px -5px 10px rgba(128, 128, 128, 0.3)"
    
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
 
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "10px",
    marginTop: "20px",
  },
  card: {
    padding: "15px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    cursor: "pointer",
    position: "relative",
    transition: "0.3s", 
  height: "50%", 
 /* display: "flex",
  justifyContent: "space-between",
  alignItems: "center",*/
   
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
    fontSize: "15px",
    fontWeight: "light",
    backgroundColor: "#fff",
    /*top: "100%", */
    listStyle: "none",
    padding: "1em",



  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0",
    fontSize: "15px",
    fontWeight: "light",
  },
  arrow: {
    fontSize: "18px",
    color: "black", 
  },
};

export default Categories;


