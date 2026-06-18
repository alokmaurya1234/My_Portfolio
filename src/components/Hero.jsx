import { motion } from "framer-motion";
import hero from "../assets/images/hero.png";

export default function Hero() {
    return (
        <section id="home" className="bg-[#F3F1EC] min-h-screen overflow-hidden relative px-6 md:px-16 lg:px-24">

            {/* REDUCED TOP PADDING: Changed pt-32 to pt-24 to pull the whole section up */}
            <div className="max-w-[1400px] mx-auto w-full pt-24 pb-8">

                {/* Adjusted min-h calculation to fit the screen better */}
                <div className="grid lg:grid-cols-[55%_45%] items-center min-h-[calc(100vh-100px)] gap-10 w-full">

                    {/* LEFT SIDE */}
                    <div className="w-full relative z-20 flex flex-col items-start mt-10 lg:mt-0">

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="uppercase tracking-[3px] text-[#811111] text-sm mb-3 font-semibold"
                        >
                            Hello, I'm <span className="font-bold">Alok Moriya</span>
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ fontFamily: "Cormorant Garamond" }}
                            className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] leading-[1] tracking-tight text-[#111]"
                        >
                            Helping Businesses <br className="hidden sm:block" />
                            Stand Out <span className="text-[#811111] italic pr-2">Online</span>
                        </motion.h1>

                        {/* Tightened divider margin: Changed my-8 to my-6 */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "60px" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-[3px] bg-[#811111] my-6"
                        />

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="max-w-[480px] text-[17px] leading-[1.6] text-gray-700 font-medium"
                        >
                            I build modern websites, create engaging content, and design digital experiences that help brands attract customers and grow.
                        </motion.p>

                        {/* Tightened button margin: Changed mt-10 to mt-8 */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap items-center gap-4 mt-8 w-full"
                        >
                            <button
                                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                                className="inline-flex items-center justify-center gap-2 bg-[#811111] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#630b0b] transition-all whitespace-nowrap"
                            >
                                View My Work
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 16.8V7H7.2" /></svg>
                            </button>

                            <button
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                                className="inline-flex items-center justify-center gap-2 border border-[#811111] text-[#811111] px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#811111] hover:text-white transition-all whitespace-nowrap"
                            >
                                Let's Talk
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 16.8V7H7.2" /></svg>
                            </button>
                        </motion.div>

                        {/* REDUCED ARROW GAP: Changed mt-20 to mt-10 so it sits nicely above the fold */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="hidden lg:flex flex-row items-end gap-4 mt-10"
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-[1px] h-12 bg-gray-400"></div>
                                <motion.svg
                                    animate={{ y: [0, 5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="mt-1"
                                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#811111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <path d="M12 5v14M19 12l-7 7-7-7" />
                                </motion.svg>
                            </div>
                            <span className="uppercase tracking-[2px] text-xs font-semibold text-gray-500 mb-1">
                                Scroll Down
                            </span>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-full relative flex justify-center items-end h-[450px] lg:h-[650px]">
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-0 w-[80%] max-w-[400px] h-[85%] bg-[#811111] rounded-t-full z-0"
                        />

                        <motion.img
                            src={hero}
                            alt="Alok Moriya"
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="relative z-10 w-full max-w-[500px] h-auto object-contain object-bottom drop-shadow-2xl"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}