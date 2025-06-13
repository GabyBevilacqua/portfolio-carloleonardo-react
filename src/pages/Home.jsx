import { useEffect } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Awards from "../components/Awards";
import Exhibitions from "../components/Exhibitions";
import Education from "../components/Education";
import Contact from "../components/Contact";
import ScrollVelocity from "../components/ScrollVelocity";
import Particles from "../components/Particles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircularGallery from "../components/CircularGallery";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const velocity = 100; // Define un valor para velocity

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <div id="top"></div>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div className="name-overlay">
          <h1 className="name-title">CARLOLEONARDO APONTE</h1>
          <p className="name-subtitle">Escultor</p>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/carlo.aponte/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.facebook.com/aponte.carloleonardo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.tiktok.com/@carloleonardoaponte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>
        </div>
      </div>
      {/* <Header /> */}
      <About />
      <ScrollVelocity
        texts={["Obras obras", "Portfolio protfolio"]}
        velocity={velocity}
        className="custom-scroll-text"
      />
      <Gallery />
      <Awards />

      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} />
      </div>

      <Exhibitions />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;
