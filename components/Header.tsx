"use client";

import { Menu, Send, X } from "lucide-react";
import { useState } from "react";
import { contactEmail, navItems } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/78 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="MC-Sis inicio">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-aqua/40 bg-aqua/12 text-sm font-bold text-aqua shadow-glow">
            MC
          </span>
          <span className="text-xl font-semibold text-white">MC-Sis</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-white/70 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${contactEmail}?subject=Consulta%20de%20proyecto%20MC-Sis`}
          className="hidden items-center gap-2 rounded-lg bg-aqua px-4 py-2.5 text-sm font-semibold text-ink transition hover:bg-mint lg:flex"
        >
          <Send className="h-4 w-4" />
          Consultar proyecto
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-white/14 p-2 text-white lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-ink/95 px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-white/78 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`mailto:${contactEmail}?subject=Consulta%20de%20proyecto%20MC-Sis`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-aqua px-4 py-3 font-semibold text-ink"
            >
              <Send className="h-4 w-4" />
              Consultar proyecto
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
