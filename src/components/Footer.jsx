/*import { IoMdSettings } from "react-icons/io";
import { IoContrastOutline } from "react-icons/io5";
import { MdOutlineWifiTethering } from "react-icons/md";
import { IoIosMicrophone } from "react-icons/io";
import { IoMdPulse } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
      <div className='footer'>
        <IoMdPulse size={40} />
        <Link to=""><IoIosMicrophone  size={40} /></Link>
        <Link to=""><MdOutlineWifiTethering  size={40} color='lightgrey' /></Link>
        <Link to=""><IoContrastOutline  size={40} color='lightgrey' /></Link>
       <IoMdSettings size={40} />
      </div>
    );
};
export default Footer;

const styles = {
  footer:{
   
  text-align: center;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
 
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 
}*/



import { IoMdSettings } from "react-icons/io";
import { IoContrastOutline } from "react-icons/io5";
import { MdOutlineWifiTethering } from "react-icons/md";
import { IoIosMicrophone } from "react-icons/io";
import { IoMdPulse } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = ({ toggleTheme }) => {
  return (
    <div style={styles.footer}>
      <IoMdPulse size={40} color="red" />
      <Link to=""><IoIosMicrophone size={40} color="red" /></Link>
      <Link to=""><MdOutlineWifiTethering size={40} color="red" /></Link>
      <IoContrastOutline size={40} color="red" onClick={toggleTheme} style={styles.iconButton} />
      <IoMdSettings size={40} color="red" />
    </div>
  );
};

const styles = {
  
  footer: {
    textAlign: "center",
    left: "38%", // ✅ Centers horizontally
  
    
    position: "fixed",
    bottom: "0",
    margin: "0 auto",
    width: "450px",
    zIndex: "1000",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    
   
  },
  iconButton: {
    cursor: "pointer",
  },
};

export default Footer;
