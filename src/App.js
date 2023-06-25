import "bootstrap/dist/css/bootstrap.min.css";
import "./reset.css";
import "./App.css";

import Home from "./pages/home";
import Profile from "./pages/profile";

import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/contacts" element={<Home />} />
        <Route path="/about" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
