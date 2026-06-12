import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

// Make sure these match the exact file names in your assets/images folder!
import rfcImg from "../assets/images/rfc.png";
import interiorImg from "../assets/images/interior.png";

const projectsData = [
  {
    id: 1,
    title: "RFC Restaurant",
    description: "A modern restaurant website focused on branding and customer experience. Designed with a premium aesthetic to drive reservations and beautifully showcase the menu.",
    image: rfcImg,
    tech: ["React", "Tailwind CSS", "Node.js", "Express"],
    liveUrl: "https://rfc-restaurant-k5rc.vercel.app/",
    githubUrl: "https://github.com/alokmaurya1234/rfc-restaurant",
  },
  {
    id: 2,
    title: "Interiorveerji",
    description: "A professional interior design website built to showcase services and a high-end portfolio. Engineered for fast load times and seamless lead generation.",
    image: interiorImg,
    tech: ["React", "Tailwind CSS", "MongoDB", "Framer Motion"],
    liveUrl: "https://www.interiorveerji.com/",
    githubUrl: "https://github.com/alokmaurya1234/aastha-interior",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white px-6 md:px-16 lg:px-24 py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[3px] text-[#811111] text-sm mb-4 font-semibold"
          >
            Portfolio
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[3rem] md:text-[4rem] leading-none text-[#111] mb-6"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            Selected Works
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[3px] bg-[#811111]"
          />
        </div>

        {/* Projects Container */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {projectsData.map((project, index) => {
            const isEven = index % 2 !== 0;

            return (
              <div 
                key={project.id} 
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}
              >
                
                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full lg:w-[55%] relative group overflow-hidden rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] bg-gray-100"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-cover object-center aspect-video"
                    />
                  </motion.div>
                  {/* Subtle dark overlay on hover to make it feel tactile */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />
                </motion.div>

                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full lg:w-[45%] flex flex-col items-start"
                >
                  <h3 
                    className="text-4xl font-semibold text-gray-900 mb-6"
                    style={{ fontFamily: "Cormorant Garamond" }}
                  >
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-4 py-1.5 bg-[#F3F1EC] text-gray-800 rounded-full text-xs font-semibold uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-4 w-full">
                    {/* Added target="_blank" so they open in a new tab */}
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-2 bg-[#811111] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#630b0b] transition-all whitespace-nowrap"
                    >
                      Live Demo
                      <FiExternalLink className="text-lg" />
                    </a>
                    
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-8 py-3.5 rounded-full text-sm font-medium hover:border-[#811111] hover:text-[#811111] transition-all whitespace-nowrap"
                    >
                      GitHub
                      <FiGithub className="text-lg" />
                    </a>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}