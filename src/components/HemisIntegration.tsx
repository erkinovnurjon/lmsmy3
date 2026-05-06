"use client";

import { Users, BookOpen, ClipboardList, CalendarCheck, Database, ArrowLeftRight, RefreshCw, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const syncItems = [
  { icon: Users, label: "Talabalar", desc: "Ro'yxat, guruh, kurs — avtomatik sinxron" },
  { icon: BookOpen, label: "Fanlar va o'quv reja", desc: "Fan kodi, kredit, soatlar — real-time" },
  { icon: ClipboardList, label: "Baholar", desc: "Oraliq, yakuniy, GPA — ikki tomonlama" },
  { icon: CalendarCheck, label: "Davomat", desc: "Dars jadvali — HEMIS'ga avtomatik" },
  { icon: Users, label: "O'qituvchilar", desc: "Shtat, yuklanish, kafedra — sinxron" },
  { icon: Database, label: "Buyruqlar", desc: "Talaba holati, stipendiya — yangilangan" },
];

const advantages = [
  { icon: ArrowLeftRight, title: "Ikki tomonlama sinxron", desc: "LMS'dagi o'zgarish HEMIS'ga, HEMIS'dagi o'zgarish LMS'ga." },
  { icon: RefreshCw, title: "Real-time yangilanish", desc: "5 daqiqa ichida sinxronlanadi. Kechikish yo'q." },
  { icon: ShieldCheck, title: "HEMIS yangilanishiga moslashuv", desc: "API o'zgarganda 1 yil ichida bepul moslashtiramiz." },
];

export default function HemisIntegration() {
  return (
    <section id="hemis" className="relative overflow-hidden border-t border-slate-100 bg-white py-16 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-700">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
            HEMIS integratsiya
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-blue-900 sm:text-5xl">HEMIS bilan to&apos;liq sinxron</h2>
          <p className="mt-4 text-lg text-slate-500">Qo&apos;lda kiritish 40% kamayadi. Barcha ma&apos;lumotlar bir joyda.</p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-5">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 p-6 md:col-span-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
              <Database size={28} />
            </div>
            <p className="mt-3 text-lg font-bold text-blue-900">LMS.uz</p>
            <p className="mt-1 text-xs text-slate-500">O&apos;quv boshqaruv tizimi</p>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500/60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" /></span>
              <span className="text-[10px] font-medium text-blue-600">Aktiv</span>
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 md:col-span-3">
            {syncItems.map((item, i) => (
              <motion.div key={item.label + item.desc} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="card card-hover flex items-start gap-3 rounded-xl p-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-sky-600">
                  <item.icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                  <p className="mt-0.5 text-xs text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col items-center justify-center rounded-2xl border border-sky-200 bg-sky-50 p-6 md:col-span-1">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500 text-white shadow-md shadow-sky-500/20">
              <ShieldCheck size={28} />
            </div>
            <p className="mt-3 text-lg font-bold text-blue-900">HEMIS</p>
            <p className="mt-1 text-xs text-slate-500">Davlat axborot tizimi</p>
            <div className="mt-3 flex items-center gap-1.5">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500/60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500" /></span>
              <span className="text-[10px] font-medium text-sky-600">Ulangan</span>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {advantages.map((adv, i) => (
            <motion.div key={adv.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card card-hover rounded-2xl p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                <adv.icon size={22} />
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-800">{adv.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{adv.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
