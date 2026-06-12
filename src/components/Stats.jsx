import { motion } from "framer-motion";

const statsData = [
  {
    id: 1,
    value: "2+",
    label: "Years Experience",
    description: "Learning, building, and growing.",
  },
  {
    id: 2,
    value: "10+",
    label: "Websites Created",
    description: "Modern, responsive, and fast.",
  },
  {
    id: 3,
    value: "50K+",
    label: "Reel Views",
    description: "Engaging content that converts.",
  },
  {
    id: 4,
    value: "100%",
    label: "Client Focused",
    description: "Dedicated to your business growth.",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#F3F1EC] px-6 md:px-16 lg:px-24 pb-20">
      <div className="max-w-[1400px] mx-auto w-full">
        
        {/* Container for the cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-start cursor-default"
            >
              {/* Stat Value */}
              <h3 
                className="text-5xl font-bold text-[#811111] mb-2"
                style={{ fontFamily: "Cormorant Garamond" }}
              >
                {stat.value}
              </h3>
              
              {/* Stat Label */}
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h4>
              
              {/* Stat Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}