import Header from "../components/Header";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Awards from "../components/Awards";
import Exhibitions from "../components/Exhibitions";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Gallery />
            <Awards />
            <Exhibitions />
            <Education />
            <Contact />
        </>
    );
}
export default Home;
