import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Big2 from "./pages/Big2";


function App() {
  return (
   <> 
       <Router>

        <Navbar />
        <Routes>
          <Route path="/" element={
          <>
           <Hero />
           <About />
           <Projects />
           <Contact />
          
          
          </>
          } />

          <Route path="/projects/Big2" element={<Big2 />} />
        
        </Routes>

       </Router>
      
     
      
    </>
  );
}

export default App;
