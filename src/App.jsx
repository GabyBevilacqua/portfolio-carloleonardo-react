import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Artwork from "./pages/Artwork";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/PageWrapper";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/obra/:id"
          element={
            <PageWrapper>
              <Artwork />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const location2 = useLocation();

  useGSAP(() => {
    if (window.innerWidth > 768) {
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
      });
    }
  }, []);

  // Solo muestra Navbar en Home
  const showNavbar = location2.pathname === "/";

  return (
    <div id="smooth-wrapper">
      {showNavbar && <Navbar />}
      <div id="smooth-content">
        <AnimatedRoutes />
      </div>
    </div>
  );
}

export default App;