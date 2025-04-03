import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Artwork from "./pages/Artwork";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obra/:id" element={<Artwork />} />
      </Routes>
    </Router>
  );
}
export default App;
