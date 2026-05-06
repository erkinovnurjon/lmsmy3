"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "HEMIS integratsiya qancha vaqt oladi?", a: "Standart integratsiya 2-3 hafta. Murakkab holatlar uchun 4-5 hafta. Biz HEMIS API bilan to'liq sinxronizatsiyani ta'minlaymiz." },
  { q: "AI-Proctoring qanchalik aniq?", a: "Bizning AI tizimi 95% aniqlikda qoidabuzarliklarni aniqlaydi. Yolg'on pozitiv natijalari 2% dan kam." },
  { q: "Kiberxavfsizlik xulosasi qanday ishlaydi?", a: "Har bir imtihon tugagandan so'ng tizim avtomatik xavfsizlik hisobotini shakllantiradi. Shubhali harakatlar, IP manzillar, ekran faoliyati — barchasi hujjatlashtiriladi." },
  { q: "Qo'llab-quvvatlash qanday?", a: "1 yil bepul texnik qo'llab-quvvatlash. Muammolar 2 soat ichida hal qilinadi. 24/7 Telegram guruh va maxsus menejer biriktiriladi." },
  { q: "Narxlash qanday?", a: "Talabalar soniga qarab oylik to'lov. Demo bron qiling — biz sizning OTM uchun maxsus taklif tayyorlaymiz." },
  { q: "Mavjud LMS dan ko'chish mumkinmi?", a: "Ha, biz to'liq migratsiya xizmatini taqdim etamiz. Barcha ma'lumotlar xavfsiz ko'chiriladi." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative overflow-hidden border-t border-slate-100 bg-white py-16 sm:py-24">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-blue-900 sm:text-4xl">Ko&apos;p beriladigan savollar</h2>
        </motion.div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`card rounded-xl transition-all ${isOpen ? "ring-1 ring-blue-200" : ""}`}
              >
                <button onClick={() => setOpenIndex(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                  <span className="text-sm font-semibold text-slate-800">{faq.q}</span>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={18} className="shrink-0 text-slate-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-500">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
