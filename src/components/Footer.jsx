import "../styles/footer.css";
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <span className="footer-text">
              <div className="footer">
        <p>© 2025 Carlo Leonardo Aponte. Todos los derechos reservados.</p>
        <p>
          Diseñado por{" "}
          <a
            href="https://www.linkedin.com/in/gabriellabevilacqua/"
            target="_blank"
            rel="noopener noreferrer"
            className="designer-link"
          >
            Gabriella Bevilacqua
          </a>
        </p>
        </div>
      </span>
    </footer>
  );
}

export default Footer
