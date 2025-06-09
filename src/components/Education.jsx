import React from "react";
import "../styles/education.css";
import FlowingMenu from "./FlowingMenu";

const Education = () => {
  const demoItems = [
    {
      link: "#",
      text: "ESTUDIOS Y TALLERES DE INVESTIGACION",
      image:
        "https://res.cloudinary.com/dzqgni1qi/image/upload/v1742662490/chef-profile_mk5dba.jpg",
    },
  ];

  return (
    <>
      <div style={{ height: "100px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>
      <section className="education" id="education">
        <div className="education-image-container">
          <img
            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1749143640/carlo02_vilznt.webp"
            alt="Educacion y estudios"
            className="education-image"
          />
        </div>
        <div className="education-content">
          <ul className="education-list">
            <li className="education-item">
              “Conocimientos del color” – Taller del Pintor Carlos Valverde
              (1973)
            </li>
            <li className="education-item">
              “Lectura de la Narrativa Plástica” – Taller del Pintor Carlos
              Valverde (1974)
            </li>
            <li className="education-item">
              “Técnica escrita de Tisani” – Taller del Escultor Guido Franchesi
              (1982)
            </li>
            <li className="education-item">
              “Estudios del Diseño” – Taller del Decorador Rafael Fernández
              (1986)
            </li>
            <li className="education-item">
              Ingeniería Mecánica – Universidad Central de Venezuela, Caracas
              (Graduado en 1985)
            </li>
            <li className="education-item">
              “Composición de Formas” – Taller del Escultor Francisco Rivera
              (1991)
            </li>
            <li className="education-item">
              “Manejo del color y composición” – Taller del Pintor Secundino
              Rivera (1992)
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Education;
