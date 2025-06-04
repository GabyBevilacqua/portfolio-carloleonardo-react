import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/gallery.css";

const artworks = [
      {
    id: "obra04",
    src: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1749052832/ada007_yp44re.webp",
    title: "El Ada",
    year: 2023,
  },
    {
    id: "obra06",
    src: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1748164593/fenix003_nbk6xe.webp",
    title: "Ave Fenix",
    year: 2022,
  },
  {
    id: "obra1",
    src: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1748163179/tucusito008_jbrlth.webp",
    title: "Tucusito (Colibrí)",
    year: 2021,
  },
  {
    id: "obra5",
    src: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1749050905/arbol1010_ixjrmw.webp",
    title: "Analogía de la arboleda",
    year: 2021,
  },
    {
    id: "obra14",
    src: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1742578979/retorcida001_st6ja6.jpg",
    title: "Volumen abstracto",
    year: 2014,
  },
  {
    id: "obra13",
    src: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1742578909/IMG_0133_vdrmjp.jpg",
    title: "Gárgola",
    year: 2013,
  },
  {
    id: "obra25",
    src: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1742491156/001_o9cd4r.jpg",
    title: "Conversasión",
    year: 2011,
  },
  {
    id: "obra2",
    src: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1741890451/delicadeza03_xej2c4.jpg",
    title: "Delicadeza Salvaje",
    year: 2010,
  },
  {
    id: "obra3",
    src: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1741893334/mascara01_est8mf.jpg",
    title: "La Ultima Mascara",
    year: 2010,
  },
  {
    id: "obra24",
    src: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1742490538/ahogado01_rogwiy.jpg",
    title: "Ahogado",
    year: 2006,
  },

  {
    id: "obra26",
    src: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1742491553/complaciendo_la_locura-01_w5xtfn.jpg",
    title: "Complaciendo a la locura",
    year: 2002,
  },
  {
    id: "obra27",
    src: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1742416603/aduccion1-03_iayvjr.jpg",
    title: "Aducción II",
    year: 2002,
  },
    {
    id: "obra30",
    src: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1742136256/contucion03_gp1kei.jpg",
    title: "La Contución",
    year: 2001,
  },
  {
    id: "obra28",
    src: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1742143800/lavida05_zigwtm.jpg",
    title: "Por la vida",
    year: 2000,
  },
  {
    id: "obra29",
    src: "https://res.cloudinary.com/dzqgni1qi/image/upload/v1742138206/falsa07_xbkbpx.jpg",
    title: "Falsa Seguridad",
    year: 2000,
  },

];

const Gallery = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/obra/${id}`); // Redirige a la página de la obra con el ID
  };

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-content">
        <div className="gallery-grid">
          {artworks.map((art) => (
            <div
              className="gallery-item"
              key={art.id}
              onClick={() => handleClick(art.id)}
              tabIndex={0}
              role="button"
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") handleClick(art.id);
              }}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={art.src}
                  alt={art.title}
                  className="gallery-image"
                  data-id={art.id}
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-text">
                    <h3>{art.title}</h3>
                    <p>{art.year}</p>                  
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallery;
