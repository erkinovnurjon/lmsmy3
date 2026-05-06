import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

const footerLinks = [
  {
    title: "Platforma",
    links: [
      { label: "Xususiyatlar", href: "#features" },
      { label: "HEMIS integratsiya", href: "#hemis" },
      { label: "AI-Proctoring", href: "#features" },
      { label: "Natijalar", href: "#results" },
    ],
  },
  {
    title: "Kompaniya",
    links: [
      { label: "Biz haqimizda", href: "#" },
      { label: "FAQ", href: "#faq" },
      { label: "Blog", href: "#" },
      { label: "Bog'lanish", href: "#contact" },
    ],
  },
];

const contacts = [
  { icon: Phone, text: "+998 90 123 45 67" },
  { icon: Mail, text: "info@lms.uz" },
  { icon: MapPin, text: "Toshkent, O'zbekiston" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-12 sm:py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              O&apos;zbekiston OTMlari uchun yagona HEMIS-native o&apos;quv boshqaruv tizimi.
            </p>
            <div className="mt-6 flex gap-3">
              {["Telegram", "Instagram", "YouTube"].map((social) => (
                <a key={social} href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-400 transition-all hover:border-blue-200 hover:text-blue-600 hover:shadow-sm">
                  <span className="text-[10px] font-bold">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">{group.title}</h4>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="group flex items-center gap-1 text-sm text-slate-500 transition-colors hover:text-blue-600">
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 transition-all group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Aloqa</h4>
            <ul className="mt-4 space-y-3">
              {contacts.map((item) => (
                <li key={item.text} className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white border border-slate-200 text-slate-400">
                    <item.icon size={14} />
                  </div>
                  <span className="text-sm text-slate-500">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 py-6 sm:flex-row">
          <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} LMS.uz — Barcha huquqlar himoyalangan</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-slate-400 hover:text-blue-700">Maxfiylik siyosati</a>
            <a href="#" className="text-xs text-slate-400 hover:text-blue-700">Foydalanish shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
