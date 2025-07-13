import React, { useRef } from "react";
import "../styles/education.css";
import FlowingMenu from "./FlowingMenu";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const demoItems = [
    {
      link: "#",
      text: "ESTUDIOS Y TALLERES",
      image:
        "https://res.cloudinary.com/dzqgni1qi/image/upload/v1749749029/marquee03_j3jvaa.webp",
    },
  ];

   const educationRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
  
    useGSAP(() => {
          // Animación del contenedor al entrar en pantalla
      gsap.from(educationRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 80%", // Se activa cuando el 80% de la sección está en la pantalla
          toggleActions: "play none none none", // Reproduce la animación una vez
        },
      });
  
      // Animación de la imagen
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
  
      // Animación del texto
      gsap.from(textRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: educationRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, []);


  return (
    <>
      <div style={{ height: "100px", position: "relative" }}>
        <FlowingMenu items={demoItems} />
      </div>
      <section className="education" id="education" ref={educationRef}>
        <div className="education-image-container" ref={imageRef}>
          <img
            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1749143640/carlo02_vilznt.webp"
            alt="Educacion y estudios"
            className="education-image"
          />
        </div>
        <div className="education-content" ref={textRef}>
          <ul className="education-list">
            <li className="education-item">
              ⚜ “Conocimientos del color” – Taller del Pintor Carlos Valverde
              (1973)
            </li>
            <li className="education-item">
              ⚜ “Lectura de la Narrativa Plástica” – Taller del Pintor Carlos
              Valverde (1974)
            </li>
            <li className="education-item">
              ⚜ “Técnica escrita de Tisani” – Taller del Escultor Guido Franchesi
              (1982)
            </li>
            <li className="education-item">
              ⚜ “Estudios del Diseño” – Taller del Decorador Rafael Fernández
              (1986)
            </li>
            <li className="education-item">
              ⚜ Ingeniería Mecánica – Universidad Central de Venezuela, Caracas
              (Graduado en 1985)
            </li>
            <li className="education-item">
              “Composición de Formas” – Taller del Escultor Francisco Rivera
              (1991)
            </li>
            <li className="education-item">
              ⚜ “Manejo del color y composición” – Taller del Pintor Secundino
              Rivera (1992)
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Education;
