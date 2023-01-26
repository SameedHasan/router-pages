import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
const App = () => {
  return (
    <div>
      <BrowserRouter basename="/">
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
