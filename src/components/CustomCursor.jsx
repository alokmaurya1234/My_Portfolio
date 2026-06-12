import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // THE FIX: Track whether the mouse is currently inside the browser window
  const [isMouseActive, setIsMouseActive] = useState(false);
  
  const [isVisible] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );

  useEffect(() => {
    if (!isVisible) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX - 1, y: e.clientY - 1 });
      // If the mouse is moving, it must be inside the window
      if (!isMouseActive) setIsMouseActive(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest(".cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // THE FIX: Event handlers for leaving and entering the browser document
    const handleMouseLeave = () => setIsMouseActive(false);
    const handleMouseEnter = () => setIsMouseActive(true);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    
    // Listen for the mouse leaving/entering the HTML document
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, isMouseActive]);

  if (!isVisible) return null;

  const cursorVariants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1,
      rotate: 15,
      // THE FIX: Fade out smoothly when mouse leaves the window
      opacity: isMouseActive ? 1 : 0, 
    },
    hover: {
      x: mousePosition.x,
      y: mousePosition.y,
      scale: 1.15,
      rotate: 25,
      opacity: isMouseActive ? 1 : 0,
    }
  };

  return (
    <motion.div
      variants={cursorVariants}
      animate={isHovering ? "hover" : "default"}
      transition={{ 
        // We use tween for X/Y for zero-lag tracking, but add a quick duration for opacity fading
        x: { type: "tween", ease: "linear", duration: 0 },
        y: { type: "tween", ease: "linear", duration: 0 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.15 }
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ transformOrigin: "1px 1px" }}
    >
      <svg 
        width="28" 
        height="28" 
        viewBox="0 0 28 28" 
        fill="#811111" 
        stroke="#ffffff" 
        strokeWidth="2" 
        strokeLinejoin="round" 
        strokeLinecap="round"
        className="drop-shadow-lg"
      >
        <path d="M 1 1 L 10 25 L 14 14 L 25 10 Z" />
      </svg>
    </motion.div>
  );
}