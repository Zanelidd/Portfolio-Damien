import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./App.css";
import WelcomePage from "./pages/WelcomePage.jsx";
import Layout from "./layouts/Layout.jsx";
import { useState } from "react";
import { DarkModeContext } from "./Context/DarkModeProvider.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact";
import { DarkModeContextType } from "./services/types.js";

function App() {
  const [darkMode, setDarkMode] = useState<DarkModeContextType>();
  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </DarkModeContext.Provider>
  );
}

export default App;
