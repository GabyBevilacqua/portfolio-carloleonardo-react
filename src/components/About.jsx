import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/about.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [showAll, setShowAll] = useState(false);
  const aboutRef = useRef(null);

  // Utiliza useGSAP para parallax del fondo
  useGSAP(
    () => {
        
      const section = aboutRef.current;
      const bg = section.querySelector(".bg");


          // Si es móvil, no ejecutes GSAP/ScrollTrigger
    if (window.innerWidth <= 768) {
      gsap.set(bg, { clearProps: "all" }); // Limpia cualquier estilo aplicado previamente
      return;
    }

    
      const getRatio = (el) =>
        window.innerHeight / (window.innerHeight + el.offsetHeight);

      gsap.fromTo(
        bg,
        {
          backgroundPosition: `50% ${
            -window.innerHeight * getRatio(section)
          }px`,
        },
        {
          backgroundPosition: `50% ${
            window.innerHeight * (1 - getRatio(section))
          }px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    
    },
    { scope: aboutRef }
  ); // importante para el contexto de GSAP

  // Todos los párrafos en un array
  const paragraphs = [
    "Con más de 30 años esculpiendo el hierro y siete explorando la nobleza del acero inoxidable, Carloleonardo Aponte ha llevado la escultura metálica a nuevos horizontes. Su obra es una fusión entre la solidez del metal y la fluidez del arte pictórico, transformando trazos en volúmenes escultóricos con una maestría única.",
    "Ganador del Premio Nacional de Escultura de Venezuela en 2011, Aponte ha desarrollado técnicas innovadoras como el capeado metálico y el craquelado de acero sobre hierro, generando texturas y contrastes sorprendentes. Su investigación en el movimiento y la flotabilidad de las telas se materializa en esculturas que desafían la rigidez del metal, otorgándole una sensación de ligereza inusual en este medio.",
    "Su trabajo combina contructivismo, modelado metálico y esculpido por capas, logrando piezas únicas que trascienden la escultura tradicional. Además, sus intervenciones con resinas y tintas sobre hierro y acero amplían las posibilidades expresivas de sus creaciones, haciendo de cada obra un universo singular e irrepetible.",
    "El arte de Carloleonardo Aponte no solo es una exploración de materiales, sino una reinvención de la escultura contemporánea. Sus piezas, originales y sin precedentes en el mercado artístico, invitan al espectador a descubrir una nueva dimensión donde el metal cobra vida y movimiento.",
  ];


  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="bg" />
      <div className="about-content">
        <h2 className="about-title">SOBRE EL ARTISTA</h2>
        {paragraphs.map((text, idx) => (
          <p className="about-text" key={idx}>
            {text}
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
