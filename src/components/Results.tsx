"use client";

import { TrendingUp, Clock, ShieldCheck, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: TrendingUp, value: "40%", label: "Qo'lda kiritish kamaydi", desc: "HEMIS sinxronizatsiya tufayli" },
  { icon: Clock, value: "3x", label: "Tezroq hisobot", desc: "Avtomatik hisobotlar" },
  { icon: ShieldCheck, value: "95%", label: "Imtihon haqqoniyligi", desc: "AI-proctoring yordamida" },
  { icon: GraduationCap, value: "30+", label: "OTM ishonchi", desc: "O'zbekiston bo'ylab" },
];

const testimonials = [
  { quote: "HEMIS bilan sinxronizatsiya eng katta muammomiz edi. LMS.uz buni to'liq hal qildi.", author: "IT bo'lim boshlig'i", org: "Osiyo Xalqaro universiteti" },
  { quote: "AI-proctoring tizimi imtihon jarayonini tubdan o'zgartirdi.", author: "O'quv ishlari bo'yicha prorektor", org: "Iqtisodiyot va Pedagogika universiteti" },
  { quote: "5 haftada to'liq ishga tushirdik. Muammo 2 soat ichida hal bo'ladi.", author: "Rektor yordamchisi", org: "Renessans ta'lim universiteti" },
];

export default function Results() {
  return (
    <section id="results" className="relative overflow-hidden border-t border-slate-100 bg-subtle py-16 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Natijalar
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-blue-900 sm:text-5xl">Raqamlarda isbotlangan</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card card-hover rounded-2xl p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <stat.icon size={22} />
              </div>
              <p className="mt-4 text-4xl font-extrabold text-gradient-blue sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-800">{stat.label}</p>
              <p className="mt-1 text-xs text-slate-500">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-center text-lg font-bold text-slate-800">OTMlar nima deydi</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div key={t.org} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card relative flex flex-col rounded-2xl p-6">
                <div className="absolute -top-3 left-5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 shadow-md">
                  <span className="text-sm text-white">&ldquo;</span>
                </div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-blue-700">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-sky-400 text-white">
                    <span className="text-xs font-bold">{t.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-800">{t.author}</p>
                    <p className="text-[10px] text-slate-500">{t.org}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
