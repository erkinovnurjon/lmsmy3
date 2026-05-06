"use client";

import { ArrowRight, Check, BookOpen, Users, Shield, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

const trustPoints = [
  "30+ OTM ishonchi",
  "1 yil bepul qo'llab-quvvatlash",
  "HEMIS bilan avtomatik sinxron",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-40 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-blue-400/5 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              30+ OTM ishonchi bilan ishlaydi
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              HEMIS bilan to&apos;liq sinxron{" "}
              <span className="bg-gradient-to-r from-blue-300 to-sky-300 bg-clip-text text-transparent">
                yagona LMS
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto lg:mx-0 mt-6 max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              Real-time HEMIS sinxronizatsiya, AI-proctoring va{" "}
              <span className="font-semibold text-white">
                1 yil bepul qo&apos;llab-quvvatlash
              </span>{" "}
              — qo&apos;lda kiritish 40% kamayadi.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-blue-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                Demo bron qilish
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white shadow-sm transition-all hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
              >
                Batafsil ma&apos;lumot
              </a>
            </motion.div>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
                    <Check size={12} className="text-green-400" strokeWidth={3} />
                  </div>
                  {point}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile stats - shown only below lg */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden"
          >
            {[
              { value: "2,847", label: "Aktiv talabalar" },
              { value: "156", label: "Aktiv fanlar" },
              { value: "95%", label: "Imtihon haqqoniyligi" },
              { value: "40%", label: "Samaradorlik oshdi" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-sm">
                <p className="text-xl font-extrabold text-white sm:text-2xl">{stat.value}</p>
                <p className="mt-1 text-[10px] text-slate-400 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/20 to-sky-500/20 blur-2xl" />

              {/* Dashboard card */}
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-2xl">
                {/* Top bar */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-3 w-3 rounded-full bg-red-400/60" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/60" />
                  <div className="h-3 w-3 rounded-full bg-green-400/60" />
                  <div className="ml-4 h-6 flex-1 rounded-md bg-white/5" />
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="rounded-xl bg-white/5 border border-white/5 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Users size={16} className="text-blue-400" />
                      <span className="text-xs text-slate-400">Talabalar</span>
                    </div>
                    <p className="text-2xl font-bold text-white">2,847</p>
                    <p className="text-xs text-green-400 mt-1">+12% bu oy</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/5 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BookOpen size={16} className="text-sky-400" />
                      <span className="text-xs text-slate-400">Fanlar</span>
                    </div>
                    <p className="text-2xl font-bold text-white">156</p>
                    <p className="text-xs text-green-400 mt-1">+8 yangi</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/5 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield size={16} className="text-green-400" />
                      <span className="text-xs text-slate-400">Proctoring</span>
                    </div>
                    <p className="text-2xl font-bold text-white">95%</p>
                    <p className="text-xs text-slate-400 mt-1">haqqoniylik</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/5 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 size={16} className="text-purple-400" />
                      <span className="text-xs text-slate-400">Samaradorlik</span>
                    </div>
                    <p className="text-2xl font-bold text-white">40%</p>
                    <p className="text-xs text-green-400 mt-1">oshgan</p>
                  </div>
                </div>

                {/* HEMIS sync bar */}
                <div className="rounded-xl bg-white/5 border border-white/5 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-slate-300">HEMIS sinxronizatsiya</span>
                    <span className="text-xs text-green-400 font-medium flex items-center gap-1">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400/60" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                      </span>
                      Real-time
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-green-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
