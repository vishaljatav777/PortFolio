import { useState } from "react";
import "./Heder.css";

function Heder() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // This function will close the mobile menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="Heder">
      <h1>VJ</h1>

      <div className={isMenuOpen ? "Hlin active" : "Hlin"}>
        {/* --- CORRECTED LINKS --- */}
        {/* These now point to section IDs like #home, #about, etc. */}
        <a href="#home" onClick={handleLinkClick}>Home</a>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#skill" onClick={handleLinkClick}>Skill</a>
        <a href="#project" onClick={handleLinkClick}>Project</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>

      <div 
        className={isMenuOpen ? "hamburger active" : "hamburger"}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
}

export default Heder;