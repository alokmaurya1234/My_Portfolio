import { motion } from "framer-motion";

const processSteps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    description: "Diving deep into your brand, understanding your target audience, and mapping out a blueprint for growth.",
    // X and Y coordinates for the Desktop Map (Percentages)
    x: 12.5, 
    y: 30, 
    position: "top"
  },
  {
    id: "02",
    title: "Design & Prototyping",
    description: "Crafting a premium, tailored visual identity and UI/UX design that resonates with your brand's unique aesthetic.",
    x: 37.5, 
    y: 70, 
    position: "bottom"
  },
  {
    id: "03",
    title: "Development & Creation",
    description: "Building lightning-fast websites and producing cinematic, engaging social media content.",
    x: 62.5, 
    y: 30, 
    position: "top"
  },
  {
    id: "04",
    title: "Launch & Growth",
    description: "A seamless launch to the world, providing ongoing support and strategies to fuel your digital presence.",
    x: 87.5, 
    y: 70, 
    position: "bottom"
  }
];

export default function Process() {
  return (
    <section id="process" className="bg-[#F3F1EC] px-6 md:px-12 lg:px-16 py-20 lg:py-32 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase tracking-[3px] text-[#811111] text-sm mb-4 font-semibold"
          >
            How I Work
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[3rem] md:text-[4rem] leading-none text-[#111] mb-6"
            style={{ fontFamily: "Cormorant Garamond" }}
          >
            The Process
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[4px] bg-[#811111]"
          />
        </div>

        {/* ======================================================== */}
        {/* DESKTOP LAYOUT: Horizontal Winding Map                   */}
        {/* ======================================================== */}
        <div className="hidden lg:block relative w-full h-[550px] mt-10">
          
          {/* Thick Winding SVG Path */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            preserveAspectRatio="none" 
            viewBox="0 0 100 100"
          >
            <motion.path
              /* This path draws the exact S-Curve connecting all coordinates */
              d="M -10,30 L 12.5,30 C 25,30 25,70 37.5,70 C 50,70 50,30 62.5,30 C 75,30 75,70 87.5,70 L 110,70"
              fill="none"
              stroke="#811111" // Maroon color
              strokeWidth="1.5" // Thick, chunky line like the reference
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Map Nodes & Content Cards */}
          {processSteps.map((step, index) => (
            <div 
              key={step.id}
              className="absolute"
              style={{ left: `${step.x}%`, top: `${step.y}%` }}
            >
              {/* The Map Point (Circle) */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.2), type: "spring" }}
                className="absolute w-16 h-16 bg-[#811111] rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2 border-[6px] border-[#F3F1EC] shadow-xl z-20"
              >
                <span className="text-white font-bold text-xl font-serif">{step.id}</span>
              </motion.div>

              {/* Text Card (Above or Below the path) */}
              <motion.div
                initial={{ opacity: 0, y: step.position === "top" ? 20 : -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 + (index * 0.2) }}
                className={`absolute w-[280px] -translate-x-1/2 flex flex-col items-center text-center ${
                  step.position === "top" ? "bottom-[50px]" : "top-[50px]"
                }`}
              >
                <h3 
                  className="text-2xl font-bold text-gray-900 mb-3"
                  style={{ fontFamily: "Cormorant Garamond" }}
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] font-medium">
                  {step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ======================================================== */}
        {/* MOBILE LAYOUT: Vertical Timeline                         */}
        {/* ======================================================== */}
        <div className="block lg:hidden relative w-full pt-8">
          {/* Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-[31px] top-0 bottom-0 w-[4px] bg-[#811111] rounded-full z-0"
          />

          <div className="flex flex-col gap-16">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative flex items-start gap-8 z-10">
                {/* Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2, type: "spring" }}
                  className="flex-shrink-0 w-16 h-16 bg-[#811111] rounded-full flex items-center justify-center border-[6px] border-[#F3F1EC] shadow-md"
                >
                  <span className="text-white font-bold text-xl font-serif">{step.id}</span>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.2) }}
                  className="pt-2"
                >
                  <h3 
                    className="text-2xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: "Cormorant Garamond" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] font-medium">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}