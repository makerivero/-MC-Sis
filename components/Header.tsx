"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { contactEmail, navItems } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#16051f]/88 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-12 xl:px-[72px]">
        <a href="#inicio" className="flex items-center gap-3" aria-label="MC-Sis inicio">
          <span className="relative h-11 w-14 overflow-hidden">
            <Image
              src="/demo-screens/mc-sis-logo-clean.png"
              alt=""
              width={170}
              height={57}
              className="h-11 w-auto max-w-none object-contain"
              priority
            />
          </span>
          <span className="text-2xl font-black text-[#fff9f0]">MC-Sis</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} className="group relative text-sm font-bold text-[#d8cddd] transition hover:text-white">
              {item.label}
              {index === 0 ? <span className="absolute -bottom-3 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-magenta" /> : null}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${contactEmail}?subject=Consulta%20de%20proyecto%20MC-Sis`}
          className="btn-gradient hidden items-center gap-3 px-5 py-3 text-sm font-black shadow-[0_12px_24px_rgba(255,45,135,0.26)] lg:inline-flex"
        >
          HABLEMOS
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/18">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-2xl border border-white/14 bg-white/7 p-3 text-white lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#16051f]/96 px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 font-bold text-white/78 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a href={`mailto:${contactEmail}`} className="btn-gradient mt-3 inline-flex items-center justify-center gap-2 px-5 py-3 font-black">
              HABLEMOS
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
