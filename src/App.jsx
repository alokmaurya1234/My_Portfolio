import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// Import your Stats component if you have one
import Stats from "./components/Stats"; 
import About from "./components/About";
import Projects from "./components/Projects";
import Reels from "./components/Reels";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* 1. Global Custom Cursor & Navbar */}
      <CustomCursor />
      <Navbar />
      
      {/* 2. SECTIONS IN EXACT NAVBAR ORDER */}
      
      {/* --- HOME --- */}
      <Hero /> 
      <Stats /> {/* Stats usually sits right below Hero */}
      
      {/* --- ABOUT --- */}
      <About /> 

      {/* --- PROJECTS --- */}
      <Projects /> 

      {/* --- REELS --- */}
      <Reels /> 

      {/* --- SERVICES --- */}
      <Services /> 

      {/* --- PROCESS --- */}
      <Process /> 

      {/* --- CONTACT --- */}
      <Contact /> 
      
    </div>
  );
}