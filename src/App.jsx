import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Artwork from "./pages/Artwork";
import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { AnimatePresence } from "framer-motion";
import PageWrapper from "./components/PageWrapper"; // ✅ Nuevo

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Navbar />
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
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
