"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1 initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.6}} transition={{duration:.5,ease:"easeOut"}}
            className="text-4xl sm:text-5xl/tight font-extrabold text-[#E3C9AE]">
            Custom Millwork, Kitchens & Closets — built with precision.
          </motion.h1>
          <motion.p initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.6}} transition={{duration:.55, ease:"easeOut", delay:.05}}
            className="mt-5 text-[#BFA382] text-lg">
            NEWOOD crafts premium cabinetry and architectural millwork with CNC precision and timeless craftsmanship.
          </motion.p>
        </div>
        <motion.div initial={{opacity:0, scale:.98}} whileInView={{opacity:1, scale:1}} viewport={{once:true, amount:.5}} transition={{duration:.5, ease:"easeOut"}}
          className="relative h-72 sm:h-96 lg:h-[28rem] rounded-3xl overflow-hidden shadow-xl">
          <Image src="/portfolio/IMG_2390_1200.webp" alt="Kitchen hero" fill priority sizes="(min-width:1024px) 50vw, 100vw" style={{objectFit:"cover"}} />
        </motion.div>
      </div>
    </section>
  );
}
