import Artworks from "./components/artworks/Artworks";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Contact from "./components/contact/Contact";
import Artwork from "./components/artworks/Artwork";

export default function App() {
  const location = useLocation();
  return (
    <div className="grid grid-rows-small md:grid-cols-main font-Montserrat">
      <Navbar />
      <Routes
        location={location}
        key={location.key}
      >
        <Route path="/" element={<Artworks />} />
        <Route
          path="/:id"
          element={<Artwork />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </div>
  );
}
