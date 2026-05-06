"use client";

import { Send, Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-slate-100 bg-blue-subtle py-16 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-700">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Bog&apos;lanish
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-blue-900 sm:text-4xl">Demo bron qiling</h2>
            <p className="mt-4 text-base text-slate-500">30 daqiqalik bepul demo — OTMingiz uchun maxsus ko&apos;rsatamiz. Hech qanday majburiyat yo&apos;q.</p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, text: "+998 90 123 45 67", color: "bg-blue-50 text-blue-600" },
                { icon: Mail, text: "info@lms.uz", color: "bg-sky-50 text-sky-600" },
                { icon: MapPin, text: "Toshkent, O'zbekiston", color: "bg-blue-50 text-blue-600" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color}`}>
                    <item.icon size={18} />
                  </div>
                  <span className="text-sm text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <form className="card rounded-2xl p-6 shadow-lg sm:p-8">
              <div className="space-y-4">
                {[
                  { label: "Ism-familiya", type: "text", placeholder: "Ismingizni kiriting" },
                  { label: "Universitat nomi", type: "text", placeholder: "OTM nomini kiriting" },
                  { label: "Telefon raqam", type: "tel", placeholder: "+998 __ ___ __ __" },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="mb-1.5 block text-xs font-medium text-slate-700">{field.label}</label>
                    <input
                      type={field.type}
                      className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label className="mb-1.5 block text-xs font-medium text-slate-700">Xabar</label>
                  <textarea
                    rows={3}
                    className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none transition-colors focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                    placeholder="Qo'shimcha ma'lumot..."
                  />
                </div>
              </div>
              <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99]">
                <Send size={16} />
                Demo bron qilish
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
