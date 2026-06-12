import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiInstagram, FiLinkedin, FiMail, FiCheckCircle } from "react-icons/fi";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle"); // "idle", "sending", or "success"

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulating a network request to show the animation
    setTimeout(() => {
      setFormStatus("success");
      e.target.reset(); // Clear the form
      
      // Reset the button back to normal after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-[#111] text-white px-6 md:px-16 lg:px-24 pt-16 lg:pt-24 pb-8 rounded-t-[2rem] lg:rounded-t-[3rem] relative z-20 mt-[-1.5rem]">
      <div className="max-w-[1200px] mx-auto w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 lg:mb-24">
          
          {/* ================= LEFT SIDE: TYPOGRAPHY ================= */}
          <div className="flex flex-col items-start">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="uppercase tracking-[3px] text-[#811111] text-xs mb-4 font-bold"
            >
              Start A Project
            </motion.p>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1] mb-8"
              style={{ fontFamily: "Cormorant Garamond" }}
            >
              Let's build <br/> 
              <span className="text-gray-400 italic">something</span> <br/>
              great.
            </motion.h2>

            <motion.a 
              href="mailto:alokmaurya908@gmail.com"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group flex items-center gap-3 text-xl md:text-2xl font-light hover:text-[#811111] transition-colors duration-500 mb-10"
            >
              alokmaurya908@gmail.com
              <span className="p-2.5 bg-white/10 rounded-full group-hover:bg-[#811111] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500">
                <FiArrowUpRight size={20} />
              </span>
            </motion.a>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4"
            >
              <SocialLink href="https://github.com/alokmaurya1234" icon={<FiGithub size={20} />} />
              <SocialLink href="https://www.linkedin.com/in/alok-maurya-/" icon={<FiLinkedin size={20} />} />
              <SocialLink href="https://www.instagram.com/filmaloklife/" icon={<FiInstagram size={20} />} />
            </motion.div>
          </div>

          {/* ================= RIGHT SIDE: COMPACT FORM ================= */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
              
              <div className="relative group">
                <input 
                  type="text" 
                  id="name"
                  placeholder="What's your name?" 
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-base text-white placeholder-gray-500 focus:outline-none focus:border-[#811111] transition-colors duration-300 peer"
                  required
                  disabled={formStatus === "sending" || formStatus === "success"}
                />
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  id="email"
                  placeholder="Your email address" 
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-base text-white placeholder-gray-500 focus:outline-none focus:border-[#811111] transition-colors duration-300 peer"
                  required
                  disabled={formStatus === "sending" || formStatus === "success"}
                />
              </div>

              <div className="relative group">
                <textarea 
                  id="message"
                  placeholder="Tell me about your project..." 
                  rows="3"
                  className="w-full bg-transparent border-b border-white/20 pb-3 text-base text-white placeholder-gray-500 focus:outline-none focus:border-[#811111] transition-colors duration-300 resize-none peer"
                  required
                  disabled={formStatus === "sending" || formStatus === "success"}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={formStatus === "sending" || formStatus === "success"}
                className={`self-start flex items-center gap-3 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 mt-2
                  ${formStatus === "success" 
                    ? "bg-green-600 text-white cursor-default" 
                    : "bg-[#811111] text-white hover:bg-white hover:text-[#111]"
                  }`}
              >
                {formStatus === "idle" && <>Send Message <FiMail size={16} /></>}
                {formStatus === "sending" && "Sending..."}
                {formStatus === "success" && <>Message Sent <FiCheckCircle size={16} /></>}
              </button>

            </form>
          </motion.div>

        </div>

        {/* ================= FOOTER BOTTOM ================= */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} Alok Maurya. All rights reserved.</p>
          
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Available for freelance opportunities
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors"
          >
            Back to top ↑
          </button>
        </div>

      </div>
    </section>
  );
}

const SocialLink = ({ href, icon }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:bg-[#811111] hover:text-white hover:border-[#811111] transition-all duration-300"
  >
    {icon}
  </a>
);