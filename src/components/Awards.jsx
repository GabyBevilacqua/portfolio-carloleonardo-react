import React, { useRef } from "react";
import "../styles/awards.css";
import FlowingMenu from "./FlowingMenu";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Awards = () => {
  const demoItems = [
    {
      link: "#",
      text: "Premios y reconocimientos",
      image:
        "https://res.cloudinary.com/dzqgni1qi/image/upload/v1749749030/marquee01_etgxib.webp",
    },
  ];

  const awardsRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
        // Animación del contenedor al entrar en pantalla
    gsap.from(awardsRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.5,
      scrollTrigger: {
        trigger: awardsRef.current,
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
        trigger: awardsRef.current,
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
        trigger: awardsRef.current,
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
      <section className="awards" id="awards"  ref={awardsRef}>
        <div className="awards-image-container" ref={imageRef}>
          <img
            src="https://res.cloudinary.com/dzqgni1qi/image/upload/v1749143642/carlo03_nsehlq.webp"
            alt="Premios y reconocimientos"
            className="awards-image"
          />
        </div>
        <div className="awards-content" ref={textRef}>
          <ul className="awards-list">
            <li className="awards-item">
              ⚜ Mención de Honor — “El Ada de los ruidos del pensamiento”, mineral
              de hierro, acero inoxidable y resina con tintas, colaboración con
              la artista Gabriella Bevilacqua. XVII Certamen de Valdepeñas,
              entregado por la AEPE, Valdepeñas, España (Junio 2023).
            </li>
            <li className="awards-item">
              ⚜ Mención especial — “Analogía de la arboleda”, acero inoxidable y
              resina con tintas, colaboración con la artista Gabriella
              Bevilacqua. II Premio Nacional de Escultura María Belén Morales,
              Tenerife, España (2021).
            </li>
            <li className="awards-item">
              ⚜ 1er Premio Nacional de Escultura — “Bolívar y sus circunstancias”,
              mineral de hierro, Certamen Gran Explosión Cultural Bicentenaria,
              Caracas, Venezuela (Julio 2011)
            </li>
            <li className="awards-item">
              ⚜ Premio Ateneo del Hatillo — “La Cultura y La Ignorancia”, mineral
              de hierro, Caracas, Venezuela (Noviembre 1999)
            </li>
            <li className="awards-item">
              ⚜ Premiada en “Man Faced With the Future” — “Sueños de baletistas”,
              hierro de bajo carbono, Sao Paulo, Brasil (Febrero 1999)
            </li>
            <li className="awards-item">
              ⚜ Premio Bogotá Plastic Art Award — “Los Comensales”, cabilla y
              forja, Bogotá, Colombia (Julio 1998)
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Awards;
