"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, BookOpen, Calendar } from "lucide-react";

const features = [
  { icon: MessageCircle, text: "Savollaringizga tezkor javob" },
  { icon: BookOpen, text: "Kurs va dars materiallari yaratish" },
  { icon: Calendar, text: "Jadval tuzish va rejalashtirish" },
];

export default function AiAssistant() {
  return (
    <section className="relative overflow-hidden border-t border-slate-100 bg-blue-subtle py-16 sm:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-700">
              <Sparkles size={12} />
              AI Yordamchi
            </div>

            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-blue-900 sm:text-3xl">
              NEXTA — shaxsiy{" "}
              <span className="text-gradient-blue">AI yordamchingiz</span>
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-500">
              O&apos;qituvchi va administratorlar uchun AI-powered yordamchi. Savollaringizni yozing — u kurs yaratadi, jadval tuzadi, tahlil qiladi.
            </p>

            <div className="mt-6 space-y-3">
              {features.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                    <f.icon size={15} />
                  </div>
                  <span className="text-sm text-slate-700">{f.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <Image src="/pr2.png" alt="NEXTA AI yordamchi interfeysi" width={800} height={500} className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
