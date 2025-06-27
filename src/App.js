import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Lazy load the Big2 component
const Big2 = lazy(() => import("./pages/Big2"));

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Suspense 
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        }
      >
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </>
            } 
          />
          
          <Route 
            path="/projects/Big2" 
            element={
              <div className="page-transition">
                <Big2 />
              </div>
            } 
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;