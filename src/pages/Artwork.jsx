import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/artwork.css";

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

  if (!artwork) {
    return <p>Cargando...</p>; // Muestra un mensaje mientras se cargan los datos
  }

  return (
    <section className="artwork" id="artwork">
      <div className="artwork-content">
        {/* Botón para regresar al Home */}
        <button className="back-button" onClick={() => navigate("/")}>   {/* #gallery */}
          Regresar a Home
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
