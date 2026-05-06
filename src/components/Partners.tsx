"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  { name: "Osiyo Xalqaro universiteti", logo: "/partners/1.png" },
  { name: "Iqtisodiyot va Pedagogika universiteti", logo: "/partners/2.png" },
  { name: "\"Ipak yo'li\" xalqaro universiteti", logo: "/partners/3.png" },
  { name: "Toshkent Amaliy Fanlar universiteti", logo: "/partners/4.png" },
  { name: "Aniq va ijtimoiy fanlar universiteti", logo: "/partners/5.png" },
  { name: "Qo'qon davlat universiteti", logo: "/partners/6.png" },
  { name: "Farg'ona davlat universiteti", logo: "/partners/7.png" },
  { name: "Termiz iqtisodiyot va servis universiteti", logo: "/partners/8.png" },
  { name: "Renessans ta'lim universiteti", logo: "/partners/9.png" },
  { name: "O'zbekiston milliy universiteti Jizzax", logo: "/partners/10.png" },
  { name: "Toshkent Menejment va Iqtisodiyot Instituti", logo: "/partners/11.png" },
  { name: "Yangi Asr universiteti", logo: "/partners/12.png" },
  { name: "Termiz davlat universiteti", logo: "/partners/13.png" },
];

export default function Partners() {
  return (
    <section className="relative border-t border-slate-100 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
          Bizga ishongan universitetlar
        </p>
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent sm:w-32" />

        <motion.div
          className="flex gap-5 mb-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {[...partners, ...partners].map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex shrink-0 items-center rounded-xl border border-slate-100 bg-white px-5 py-3 shadow-sm transition-all hover:shadow-md hover:scale-105"
            >
              <Image src={p.logo} alt={p.name} width={200} height={60} className="h-10 w-auto shrink-0 object-contain sm:h-12" />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex gap-5"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {[...partners.slice().reverse(), ...partners.slice().reverse()].map((p, i) => (
            <div
              key={`rev-${p.name}-${i}`}
              className="flex shrink-0 items-center rounded-xl border border-slate-100 bg-white px-5 py-3 shadow-sm transition-all hover:shadow-md hover:scale-105"
            >
              <Image src={p.logo} alt={p.name} width={200} height={60} className="h-10 w-auto shrink-0 object-contain sm:h-12" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
