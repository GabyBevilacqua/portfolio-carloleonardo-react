import React from "react";
import "../styles/education.css";

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="education-image-container">
        <img
          src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1742840943/carlosoldando_tusmd0.webp"
          alt="Educacion y estudios"
          className="education-image"
        />
      </div>
      <div className="education-content">
        <h2 className="education-title">
          ESTUDIOS Y TALLERES DE INVESTIGACION
        </h2>
        <ul className="education-list">
          <li className="education-item">
            “Conocimientos del color” – Taller del Pintor Carlos Valverde (1969)
          </li>
          <li className="education-item">
            “Lectura de la Narrativa Plástica” – Taller del Pintor Carlos
            Valverde (1970)
          </li>
          <li className="education-item">
            “Composición de Formas” – Taller del Escultor Francisco Rivera
            (1971)
          </li>
          <li className="education-item">
            “Técnica escrita de Tisani” – Taller del Escultor Guido Franchesi
            (1982)
          </li>
          <li className="education-item">
            “Estudios del Diseño” – Taller del Decorador Rafael Fernández (1985)
          </li>
          <li className="education-item">
            Ingeniería Mecánica – Universidad Central de Venezuela, Caracas
            (Graduado en 1985)
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
