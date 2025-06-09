import React from "react";
import "../styles/exhibitions.css";
import FlowingMenu from "./FlowingMenu";

const Exhibitions = () => {
  const demoItems = [
    {
      link: "#",
      text: "Exposiciones",
      image:
        "https://res.cloudinary.com/dzqgni1qi/image/upload/v1749472409/carru019_sz6sai.webp",
    },
  ];

  return (
    <>
      <div style={{ height: "100px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>
      <section className="exhibitions" id="exhibitions">
        <div className="exhibitions-content">
          <ul className="exhibitions-list">
            <li className="exhibitions-item">
              Pieza seleccionada en el II Premio Nacional de Escultura María
              Belén Morales — “Tucusito bailando con el viento”, acero
              inoxidable, Universidad de La Laguna, Tenerife, España
              (Enero/Febrero 2022)
            </li>
            <li className="exhibitions-item">
              Exposición colectiva — Museo de Arte Cruz Diez, Ciudad Bolívar,
              Venezuela (2012)
            </li>
            <li className="exhibitions-item">
              Exposición colectiva — Museo de Arte Contemporáneo de Caracas,
              Venezuela (2011)
            </li>
            <li className="exhibitions-item">
              Exposición “Los Colores de América” — C.C. Paseo El Hatillo,
              Venezuela (Octubre 2006)
            </li>
            <li className="exhibitions-item">
              Encuentro por la Diversidad Cultural — Instituto Mirandino de
              Cultura, colectiva, Venezuela (Agosto 2006)
            </li>
            <li className="exhibitions-item">
              Fundación La Ruta del Arte, exposición colectiva — Venezuela
              (2001)
            </li>
            <li className="exhibitions-item">
              Galería Espacio, exposición colectiva — Venezuela (2001)
            </li>
            <li className="exhibitions-item">
              Noel Gallery, exposición colectiva — Charlotte, N.C., Estados
              Unidos (2000–2001)
            </li>
            <li className="exhibitions-item">
              Galería Avepane, exposición colectiva — Venezuela (1999)
            </li>
            <li className="exhibitions-item">
              Galería Casanova Diseños, exposición colectiva — Venezuela (1991)
            </li>
            <li className="exhibitions-item">
              Galería 5, exposición individual — Venezuela (1987–1989)
            </li>
            <li className="exhibitions-item">
              Galería Terranova, exposición individual — Venezuela (1986)
            </li>
            <li className="exhibitions-item">
              Casa Gui, Salón Armando Reverón — Venezuela (1972)
            </li>
          </ul>
        </div>
        <div className="exhibitions-image-container">
          <img
            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1742840943/carlosoldando_tusmd0.webp"
            alt="Exposiciones"
            className="exhibitions-image"
          />
        </div>
      </section>
    </>
  );
};

export default Exhibitions;
