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

    return (
        <>
            <Header />
            <About />
            <ScrollVelocity
                texts={['Obras obras', 'Portfolio']}
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
