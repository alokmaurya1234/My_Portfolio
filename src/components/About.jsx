import { motion } from "framer-motion";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "GitHub",
  "Content Creation",
  "Video Editing",
];

export default function About() {
  return (
    <section id="about" className="bg-[#F3F1EC] px-6 md:px-16 lg:px-24 py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT SIDE: Typography & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start"
          >
            <p className="uppercase tracking-[3px] text-[#811111] text-sm mb-4 font-semibold">
              Discover
            </p>
            
            <h2 
              className="text-[3rem] md:text-[4rem] leading-none text-[#111] mb-6"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Who Am I?
            </h2>
            
            <div className="h-[3px] w-[60px] bg-[#811111] mb-8" />
            
            <p className="text-[17px] leading-[1.8] text-gray-700 font-medium mb-6">
              I'm <span className="text-[#811111] font-bold">Alok Maurya</span>, a web developer and content creator based in Bangalore. 
            </p>
            
            <p className="text-[17px] leading-[1.8] text-gray-700 font-medium">
              I help brands and local businesses build their online presence through modern websites, engaging reels, and digital experiences that convert visitors into loyal customers.
            </p>
          </motion.div>

          {/* RIGHT SIDE: Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100"
          >
            <h3 
              className="text-2xl text-[#111] mb-8 font-semibold"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Skills & Expertise
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                /* LAYER 1: Handles the scroll-in entrance */
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {/* LAYER 2: Handles the continuous looping float (GPU Accelerated) */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2, 
                    }}
                    className="will-change-transform"
                  >
                    {/* LAYER 3: Handles the hover interaction */}
                    <motion.div
                      whileHover={{ scale: 1.05, backgroundColor: "#811111", color: "#ffffff" }}
                      className="px-5 py-2.5 bg-[#F3F1EC] text-gray-800 rounded-full text-sm font-medium transition-colors cursor-default"
                    >
                      {skill}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}