import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiVolume2, FiVolumeX, FiInfo, FiX } from "react-icons/fi";

import reel1 from "../assets/videos/reel1.mp4";
import reel2 from "../assets/videos/reel2.mp4";
import reel3 from "../assets/videos/reel3.mp4";

// Updated with your custom titles, descriptions, and views
const reelsData = [
  { 
    id: 1, 
    video: reel2, 
    title: "Product shoot",
    description: "Created a product-focused recipe reel for Nectarous Life, featuring their pure honey in a delicious Honey Chilli Mushroom recipe. Bringing products to life through creative visuals and storytelling.",
    views: "12K Views"
  },
  { 
    id: 2, 
    video: reel1,
    title: "Average male life",
    description: "A visual journey through the unseen sacrifices, responsibilities, and struggles that shape a man's life.",
    views: "50K+ Views" 
  },
  { 
    id: 3, 
    video: reel3,
    title: "A day in my life",
    description: "Capturing the essence of everyday moments in a calm and aesthetic form.",
    views: "8.5K Views" 
  },
];

const ReelCard = ({ data, index }) => {
  const videoRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMuted, setIsMuted] = useState(true); 
  
  const isCenter = index === 1;

  const handleMouseEnter = () => {
    if (videoRef.current) videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const toggleMute = (e) => {
    e.stopPropagation(); 
    setIsMuted(!isMuted);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative aspect-[9/16] cursor-pointer flex-shrink-0 transition-all duration-500 ease-out [perspective:1000px]
      ${
        isCenter 
          ? "w-[240px] md:w-[260px] lg:w-[280px] z-10 lg:-translate-y-4" 
          : "w-[200px] md:w-[220px] lg:w-[240px] scale-95 hover:scale-100"
      }`}
    >
      <motion.div
        className="w-full h-full relative [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      >
        
        {/* ================= FRONT FACE (VIDEO) ================= */}
        <div
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-black [backface-visibility:hidden]"
          onClick={handleFlip}
        >
          <video
            ref={videoRef}
            src={data.video}
            muted={isMuted}
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Volume Toggle Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-20 p-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-colors"
          >
            {isMuted ? <FiVolumeX size={16} /> : <FiVolume2 size={16} />}
          </button>

          {/* Info Icon */}
          <div className="absolute top-4 right-4 z-20 p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white pointer-events-none">
            <FiInfo size={16} />
          </div>

          {/* Center Play Indicator */}
          <div className="absolute inset-0 flex items-center justify-center opacity-100 hover:opacity-0 transition-opacity duration-300 pointer-events-none">
            <div className={`flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 ${isCenter ? 'w-16 h-16' : 'w-12 h-12'}`}>
              <svg width={isCenter ? "28" : "20"} height={isCenter ? "28" : "20"} viewBox="0 0 24 24" fill="white" stroke="none">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
        </div>

        {/* ================= BACK FACE (DETAILS) ================= */}
        <div
          className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-[#811111] text-white p-6 lg:p-8 flex flex-col justify-center items-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)]"
          onClick={handleFlip}
        >
          {/* Close Icon */}
          <div className="absolute top-4 right-4 z-20 p-2 bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white pointer-events-none">
            <FiX size={16} />
          </div>

          <h3 className="text-2xl lg:text-3xl font-semibold mb-4" style={{ fontFamily: "Cormorant Garamond" }}>
            {data.title}
          </h3>
          
          <p className="text-sm lg:text-[15px] text-white/80 leading-relaxed mb-8">
            {data.description}
          </p>
          
          <span className="px-5 py-2.5 bg-white text-[#811111] rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
            {data.views}
          </span>
        </div>

      </motion.div>
    </div>
  );
};

export default function Reels() {
  return (
    <section id="reels" className="bg-[#F3F1EC] px-6 md:px-16 lg:px-24 py-12 lg:py-16 min-h-screen flex items-center justify-center">
      <div className="max-w-[1400px] mx-auto w-full">
        
        <div className="flex flex-col items-center text-center mb-8 lg:mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[3px] text-[#811111] text-sm mb-3 font-semibold"
          >
            Engagement
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[3rem] md:text-[3.5rem] leading-none text-[#111] mb-5"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Content That Gets Attention
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[3px] bg-[#811111]"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-8 max-w-[1100px] mx-auto">
          {reelsData.map((reel, index) => (
            <ReelCard key={reel.id} data={reel} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}