import { useEffect } from "react";
import Header from "../components/Header";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Awards from "../components/Awards";
import Exhibitions from "../components/Exhibitions";
import Education from "../components/Education";
import Contact from "../components/Contact";
import ScrollVelocity from "../components/ScrollVelocity";

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
      <Header />
      <About />
      <ScrollVelocity
        texts={["Obras obras", "Portfolio protfolio"]}
        velocity={velocity}
        className="custom-scroll-text"
      />
      <Gallery />
      <Awards />
      <Exhibitions />
      <Education />
      <Contact />
    </>
  );
}
export default Home;
