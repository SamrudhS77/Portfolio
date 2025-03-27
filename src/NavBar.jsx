import React, { useEffect, useState } from "react";
import "./index.css";

const NavBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`nav-bar ${visible ? "visible" : ""}`}>
      <a href="#home" className="nav-link">Home</a>
      <a href="#projects" className="nav-link">Projects</a>
      <a href="#contact" className="nav-link">Contact</a>
    </nav>
  );
};

export default NavBar;