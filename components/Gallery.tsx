"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const photos = [
  { base: "IMG_2390", title: "Matte Black Kitchen with Waterfall Island", caption: "Matte-black cabinetry, marble, integrated lighting." },
  { base: "WHOF9582", title: "Custom Built-in Wall Unit", caption: "High-gloss lacquer with wood shelving & accents." },
  { base: "XPTC4825", title: "Entryway Storage + Desk Combo", caption: "Functional entry unit combining workspace & storage." },
];

export default function Gallery() {
  return (
    <section id="portfolio" className="py-20 border-t border-[#C47A45]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold text-[#E3C9AE]">Selected work</h2>
            <p className="mt-2 text-[#BFA382]">A showcase of NEWOOD craftsmanship — where design meets precision.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((p, i) => (
            <motion.figure key={p.base}
              initial={{opacity:0, y:16}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:.35}}
              transition={{duration:.45, ease:"easeOut", delay:i*0.03}}
              className="group overflow-hidden rounded-2xl border border-[#C47A45]/30 bg-[#0E1116]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={`/portfolio/${p.base}_1200.webp`}
                  alt={p.title}
                  fill
                  sizes="(min-width:1024px) 33vw, 50vw"
                  style={{objectFit:"cover"}}
                />
              </div>
              <figcaption className="px-4 py-3 text-sm">
                <div className="font-semibold text-[#E3C9AE]">{p.title}</div>
                <p className="text-[#BFA382] text-xs mt-1">{p.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
