import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Preloader from "./components/PreLoader";
import Certification from "./components/Certification";
import Cursor from "./components/Cursor";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 500 });

    
    
      
      setTimeout(() => {
        setLoading(false); 
      }, 2000); 
    
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Cursor/>
                  <Intro />
                  <About />
                  <Skills />
                  <Projects />
                  <Certification/>
                  <Contact />
                </>
              }
            />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
