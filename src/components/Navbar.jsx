import { useState, useEffect } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Reels", id: "reels" },
  { name: "Services", id: "services" },
  { name: "Process", id: "process" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Adds a subtle blur/shadow to the navbar when you scroll down
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automatically detects which section is currently on the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Triggers when a section crosses the middle of the screen
      { rootMargin: "-40% 0px -40% 0px" } 
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll function for when you click a link
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#F3F1EC]/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 flex items-center justify-between">
        
        {/* LOGO */}
        <a 
          href="#home" 
          onClick={(e) => handleScrollTo(e, "home")}
          className="text-4xl text-[#811111] font-bold cursor-pointer"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          AM
        </a>

        {/* DESKTOP LINKS - Dots completely removed */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={(e) => handleScrollTo(e, link.id)}
              className="relative flex flex-col items-center group cursor-pointer"
            >
              <span 
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.id ? "text-[#811111]" : "text-gray-900 group-hover:text-[#811111]"
                }`}
              >
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* LET'S TALK BUTTON */}
        <button 
          onClick={(e) => handleScrollTo(e, "contact")}
          className="hidden md:flex items-center gap-2 bg-[#811111] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:bg-white hover:text-[#811111] border border-transparent hover:border-[#811111]"
        >
          Let's Talk <FiArrowUpRight size={16} />
        </button>

      </div>
    </nav>
  );
}