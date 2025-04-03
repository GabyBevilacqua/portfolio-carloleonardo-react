import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";


const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrolling(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <header className={`header ${scrolling ? "scrolled" : ""}`}>
        <nav className="nav-container">
          <h1 className="logo">Carloleonardo Aponte</h1>
  
          {/* Botón de menú hamburguesa */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
  
          {/* Enlaces de navegación */}
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="header" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                  Sobre el artista
                </Link>
              </li>
              <li>
                <Link to="gallery" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                  Galería
                </Link>
              </li>
              <li>
                <Link to="awards" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                  Premios
                </Link>
              </li>
              <li>
                <Link to="exhibitions" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                  Exposiciones
                </Link>
              </li>
              <li>
                <Link to="education" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                  Estudios
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} onClick={() => setMenuOpen(false)}>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  };
  
export default Navbar;