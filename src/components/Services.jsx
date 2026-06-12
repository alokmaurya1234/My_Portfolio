import { motion } from "framer-motion";
import { FiLayout, FiVideo, FiTrendingUp, FiArrowRight } from "react-icons/fi";

const servicesData = [
  {
    id: 1,
    title: "Website Development",
    description: "Fast, responsive and modern websites for businesses and personal brands.",
    icon: <FiLayout className="text-4xl" />,
  },
  {
    id: 2,
    title: "Content Creation",
    description: "Professional reels and social media content to increase engagement.",
    icon: <FiVideo className="text-4xl" />,
  },
  {
    id: 3,
    title: "Brand Presence",
    description: "Helping businesses create a strong digital identity online.",
    icon: <FiTrendingUp className="text-4xl" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#F3F1EC] px-6 md:px-16 lg:px-24 py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[3px] text-[#811111] text-sm mb-4 font-semibold"
          >
            What I Do
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[3rem] md:text-[4rem] leading-none text-[#111] mb-6"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            My Services
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[3px] bg-[#811111]"
          />
        </div>

        {/* Uniform Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              /* Added h-full and w-full to force equal sizing, removed the stagger */
              className="group relative h-full w-full bg-white p-10 lg:p-12 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 flex flex-col items-start transition-all duration-500 hover:bg-[#811111] hover:-translate-y-2 hover:shadow-2xl cursor-pointer overflow-hidden"
            >
              
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-[#F3F1EC] group-hover:bg-white/10 flex items-center justify-center mb-8 transition-colors duration-500 text-[#811111] group-hover:text-white">
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 
                className="text-2xl font-semibold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500"
                style={{ fontFamily: "Cormorant Garamond" }}
              >
                {service.title}
              </h3>
              
              <p className="text-gray-600 group-hover:text-white/80 leading-relaxed font-medium transition-colors duration-500 mb-8">
                {service.description}
              </p>

              {/* Hidden Arrow - mt-auto pushes it to the bottom so it aligns perfectly across all cards */}
              <div className="mt-auto flex items-center gap-2 text-[#811111] group-hover:text-white font-semibold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                Discuss Project <FiArrowRight />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}