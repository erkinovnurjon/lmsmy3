import Image from "next/image";

export default function Logo({ size = "default", dark = false }: { size?: "sm" | "default" | "lg"; dark?: boolean }) {
  const sizes = {
    sm: { img: 28, text: "text-sm" },
    default: { img: 36, text: "text-lg" },
    lg: { img: 44, text: "text-xl" },
  };
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2.5">
      <Image src="/logo.png" alt="LMS.uz" width={s.img} height={s.img} className="shrink-0" />
      <span className={`${s.text} font-extrabold tracking-tight ${dark ? "text-white" : "text-blue-900"}`}>
        LMS<span className={dark ? "text-blue-300" : "text-blue-600"}>.uz</span>
      </span>
    </div>
  );
}
