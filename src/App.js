import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Bloge from "./pages/Bloge";

function App() {
  return (
    <Router>
      {/* Նավիգացիոն համակարգ */}
      <nav>
        <ul>
          <li>
            <Link to="/">Գլխավոր էջ</Link>
          </li>
          <li>
            <Link to="/about">Մեր մասին</Link>
          </li>
          <li>
            <Link to="/contact">Հետադարձ կապ</Link>
          </li>
          <li>
            <Link to="/work">Աշխատանք</Link>
          </li>
          <li>
            <Link to="/bloge">Բլոգ</Link>
          </li>
        </ul>
      </nav>

      {/* Ռոուտները */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/bloge" element={<Bloge />} />
          {/* 404 - Ոչ պատշաճ էջ */}
          <Route path="*" element={<h2>404 - Էջը չի գտնվել</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
