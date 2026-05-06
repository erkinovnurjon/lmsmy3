"use client";

import Image from "next/image";
import {
  FileCheck, AlertTriangle, Lock, Eye, UserX, MonitorSmartphone, Mic,
  ArrowLeftRight, RefreshCw, Users, BookOpen, ScanSearch, FileText,
  BadgeCheck, PenTool, Sparkles, Languages,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: "cybersecurity",
    title: "Kiberxavfsizlik xulosasi",
    subtitle: "Har bir imtihon uchun xavfsizlik hisoboti",
    description: "Imtihon yakunlangandan so'ng tizim avtomatik ravishda kiberxavfsizlik xulosasini shakllantiradi. Barcha xavflar, shubhali harakatlar va xavfsizlik buzilishlari haqida to'liq ma'lumot.",
    color: "blue",
    image: null,
    details: [
      { icon: FileCheck, title: "Batafsil hisobot", desc: "Har bir talaba uchun individual xulosa" },
      { icon: AlertTriangle, title: "Xavf darajasi", desc: "Yuqori, o'rta va past xavf aniqlash" },
      { icon: Lock, title: "Raqamli imzo", desc: "Har bir xulosa raqamli imzo bilan" },
    ],
  },
  {
    id: "autoproctoring",
    title: "AutoProctoring",
    subtitle: "AI asosida to'liq avtomatik nazorat",
    description: "Inson aralashuvisiz imtihon jarayonini to'liq nazorat qiluvchi AI tizim. Yuz aniqlash, ekran monitoring, ovoz tahlili — barchasi avtomatik.",
    color: "sky",
    image: "/projects/proctoring.png",
    details: [
      { icon: Eye, title: "Yuz aniqlash", desc: "Talabani identifikatsiya va kuzatish" },
      { icon: UserX, title: "Ikkinchi shaxs", desc: "Begona shaxs — darhol ogohlantirish" },
      { icon: MonitorSmartphone, title: "Ekran monitoring", desc: "Tab/dastur o'tishni aniqlash" },
      { icon: Mic, title: "Ovoz tahlili", desc: "Begona ovozlarni aniqlash" },
    ],
  },
  {
    id: "hemis",
    title: "HEMIS integratsiya",
    subtitle: "Davlat tizimi bilan to'liq sinxronizatsiya",
    description: "O'zbekiston OTMlari uchun majburiy HEMIS tizimi bilan ikki tomonlama real-time sinxronizatsiya. Talabalar, fanlar, baholar — barchasi avtomatik.",
    color: "blue",
    image: null,
    details: [
      { icon: ArrowLeftRight, title: "Ikki tomonlama sinxron", desc: "LMS ↔ HEMIS avtomatik" },
      { icon: RefreshCw, title: "Real-time yangilanish", desc: "5 daqiqa ichida sinxronlanadi" },
      { icon: Users, title: "Talabalar/O'qituvchilar", desc: "Ro'yxat, guruh — sinxron" },
      { icon: BookOpen, title: "Fanlar va baholar", desc: "Kredit, soatlar — ikki tomonlama" },
    ],
  },
  {
    id: "plagiat",
    title: "AI Plagiat Tekshirish",
    subtitle: "Matnni kiritish va plagiatni aniqlash",
    description: "Talabalar ishlarini AI yordamida plagiatga tekshirish. Original matn foizini aniqlash, manbalarni ko'rsatish va grammatika tahlili.",
    color: "sky",
    image: "/pr.png",
    details: [
      { icon: ScanSearch, title: "Plagiat aniqlash", desc: "AI asosida original matn foizi" },
      { icon: FileText, title: "Manba ko'rsatish", desc: "Qayerdan olinganini ko'rsatadi" },
      { icon: BadgeCheck, title: "Grammatika tahlili", desc: "Imloviy xatolarni tekshirish" },
    ],
  },
  {
    id: "contentai",
    title: "Kontent AI",
    subtitle: "AI yordamida kontent yaratish",
    description: "O'qituvchilar uchun AI-powered kontent yaratish vositasi. Test savollari, dars materiallari — barchasini AI yordamida tez tayyorlang.",
    color: "blue",
    image: "/contentai.png",
    details: [
      { icon: PenTool, title: "Test yaratish", desc: "AI avtomatik test generatsiya qiladi" },
      { icon: Sparkles, title: "Dars materiallari", desc: "Mavzu bo'yicha kontent yaratish" },
      { icon: Languages, title: "Ko'p tilli", desc: "O'zbek, rus va ingliz tillarida" },
    ],
  },
];

export default function KeyFeatures() {
  return (
    <section id="features" className="relative overflow-hidden py-16 sm:py-24 bg-subtle">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Asosiy xususiyatlar
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-blue-900 sm:text-5xl">
            Nima uchun bizni tanlashadi?
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Xavfsizlik, nazorat, integratsiya va AI — barchasi bir platformada
          </p>
        </motion.div>

        {/* Features */}
        <div className="mt-16 space-y-24">
          {features.map((feature, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col gap-10 lg:gap-16 ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} lg:items-center`}
              >
                {/* Text */}
                <div className="flex-1">
                  <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase ${
                    feature.color === "blue"
                      ? "border-blue-200 bg-blue-50 text-blue-700"
                      : "border-sky-200 bg-sky-50 text-sky-700"
                  }`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${feature.color === "blue" ? "bg-blue-600" : "bg-sky-500"}`} />
                    {feature.subtitle}
                  </span>

                  <h3 className="mt-4 text-2xl font-extrabold text-blue-900 sm:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-500">
                    {feature.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {feature.details.map((d, di) => (
                      <motion.div
                        key={d.title}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: di * 0.08 }}
                        className="card card-hover rounded-xl p-4"
                      >
                        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                          feature.color === "blue" ? "bg-blue-50 text-blue-600" : "bg-sky-50 text-sky-600"
                        }`}>
                          <d.icon size={18} />
                        </div>
                        <p className="mt-3 text-sm font-semibold text-slate-800">{d.title}</p>
                        <p className="mt-1 text-xs text-slate-500">{d.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1">
                  {feature.image ? (
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
                      <Image src={feature.image} alt={feature.title} width={700} height={450} className="w-full h-auto" />
                    </div>
                  ) : feature.id === "cybersecurity" ? (
                    <CybersecurityVisual />
                  ) : (
                    <HemisVisual />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CybersecurityVisual() {
  return (
    <div className="card rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-sm font-bold text-slate-800">Xavfsizlik Xulosasi</span>
        </div>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-[10px] font-semibold text-blue-600">PDF Ready</span>
      </div>

      <div className="mt-5 space-y-4">
        {[
          { label: "Yuqori xavf", count: "2 ta", pct: "15%", color: "bg-red-500" },
          { label: "O'rta xavf", count: "8 ta", pct: "35%", color: "bg-amber-400" },
          { label: "Past xavf", count: "145 ta", pct: "85%", color: "bg-blue-500" },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex justify-between text-xs">
              <span className="text-slate-500">{item.label}</span>
              <span className="font-semibold text-blue-700">{item.count}</span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-slate-100 overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${item.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: item.pct }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-xl bg-blue-50 p-4 border border-blue-100">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
          <Lock size={18} />
        </div>
        <div>
          <p className="text-xs font-semibold text-blue-700">Umumiy xavfsizlik bali</p>
          <p className="text-xl font-extrabold text-blue-600">94/100</p>
        </div>
      </div>
    </div>
  );
}

function HemisVisual() {
  return (
    <div className="card rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 rounded-lg bg-blue-50 border border-blue-100 px-3 py-2">
          <div className="h-6 w-6 rounded bg-blue-600 flex items-center justify-center">
            <span className="text-[8px] font-extrabold text-white">L</span>
          </div>
          <span className="text-xs font-bold text-slate-800">LMS.uz</span>
        </div>

        <div className="flex-1 mx-4 relative h-6">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200" />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-blue-500 shadow-md shadow-blue-500/30"
            animate={{ left: ["10%", "90%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-sky-500 shadow-md shadow-sky-500/30"
            animate={{ left: ["90%", "10%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-sky-50 border border-sky-100 px-3 py-2">
          <div className="h-6 w-6 rounded bg-sky-500 flex items-center justify-center">
            <span className="text-[8px] font-extrabold text-white">H</span>
          </div>
          <span className="text-xs font-bold text-slate-800">HEMIS</span>
        </div>
      </div>

      <div className="space-y-2">
        {[
          { entity: "Talabalar", count: "2,847", status: "synced", time: "2s oldin" },
          { entity: "Fanlar", count: "156", status: "synced", time: "5s oldin" },
          { entity: "Baholar", count: "12,430", status: "syncing", time: "hozir" },
          { entity: "Davomat", count: "8,291", status: "synced", time: "1m oldin" },
        ].map((item, i) => (
          <motion.div
            key={item.entity}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between rounded-lg bg-slate-50 p-3"
          >
            <div className="flex items-center gap-2">
              <div className={`h-2 w-2 rounded-full ${item.status === "syncing" ? "bg-amber-400 animate-pulse" : "bg-blue-500"}`} />
              <span className="text-xs font-medium text-blue-700">{item.entity}</span>
            </div>
            <span className="text-xs text-slate-400">{item.count}</span>
            <span className={`text-[10px] font-medium ${item.status === "syncing" ? "text-amber-500" : "text-blue-600"}`}>
              {item.status === "syncing" ? "Sinxronlanmoqda" : "Sinxron"}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 border-t border-slate-100 pt-4">
        {[
          { value: "99.9%", label: "Uptime" },
          { value: "<5s", label: "Sinxron vaqti" },
          { value: "0", label: "Dublikatlar" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-lg font-extrabold text-gradient-blue">{s.value}</p>
            <p className="text-[10px] text-slate-400">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
