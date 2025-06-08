import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "../styles/artwork.css";
import ShinyText from "../components/ShinyText.";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Artwork = () => {
  const { id } = useParams(); // Obtiene el ID de la obra desde la URL
  const navigate = useNavigate(); // Hook para navegar entre rutas
  const [artwork, setArtwork] = useState(null);

  useEffect(() => {
    // Carga los datos desde el archivo JSON
    fetch("/data/artworksdata.json")
      .then((response) => response.json())
      .then((data) => {
        const foundArtwork = data.obras.find((obra) => obra.id === id);
        setArtwork(foundArtwork);
      });
  }, [id]);

  useGSAP(() => {
    // Intenta varias veces para asegurar que ScrollSmoother esté listo
    let tries = 0;
    function scrollToTop() {
      tries++;
      if (ScrollSmoother.get()) {
        ScrollSmoother.get().scrollTo(0, true);
      } else if (tries < 10) {
        setTimeout(scrollToTop, 50); // Reintenta hasta 10 veces cada 50ms
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
    setTimeout(scrollToTop, 100);
  });

  if (!artwork) {
    return <p>Cargando...</p>; // Muestra un mensaje mientras se cargan los datos
  }

  return (
    <section className="artwork" id="artwork">
      <div className="artwork-content">
        {/* Botón para regresar al Home */}
        <button className="back-button" onClick={() => navigate("/")}>
          <ShinyText
            text="Regresar a Home"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </button>
        <h2 className="artwork-title">{artwork.titulo}</h2>
        <p className="artwork-description">{artwork.descripcion}</p>
        <p className="artwork-technique">Técnica: {artwork.tecnica}</p>
        <p className="artwork-dimensions">Dimensiones: {artwork.dimensiones}</p>
        <p className="artwork-price">Precio: {artwork.precio}</p>
        <div className="artwork-gallery">
          {artwork.imagenes.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${artwork.titulo} - ${index + 1}`}
              className="artwork-gallery-image"
            />
          ))}
        </div>
      </div>
      {/* Botón flotante para ir arriba */}
      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Ir arriba"
      >
        ▲
      </button>
    </section>
  );
};

export default Artwork;
