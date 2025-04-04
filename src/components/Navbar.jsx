import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="header" smooth={true} duration={500}>
              Inicio
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="about" smooth={true} duration={500}>
              Sobre mí
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="gallery" smooth={true} duration={500}>
              Galería
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="awards" smooth={true} duration={500}>
              Premios
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="exhibitions" smooth={true} duration={500}>
              Exhibiciones
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="education" smooth={true} duration={500}>
              Educación
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="contact" smooth={true} duration={500}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;