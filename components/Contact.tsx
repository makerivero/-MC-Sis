"use client";

import { Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { contactEmail } from "@/lib/data";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="bg-[#fff6ea] px-5 py-14 text-ink md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div>
          <h2 className="text-3xl font-black leading-tight md:text-4xl">¿Listo para llevar tu negocio al siguiente nivel?</h2>
          <p className="mt-4 text-sm leading-6 text-ink/64">Escribinos y contanos tu proyecto. Te respondemos rápido.</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <a
            href={`mailto:${contactEmail}?subject=Consulta%20para%20cotizar%20web%20o%20app`}
            className="inline-flex items-center gap-4 rounded-lg border border-rose/20 bg-white p-4 shadow-[0_14px_34px_rgba(36,9,45,0.08)]"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-rose to-orange text-white">
              <Mail className="h-6 w-6" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase text-ink/48">Email</span>
              <span className="block truncate text-xl font-black text-ink">{contactEmail}</span>
            </span>
          </a>

          <form onSubmit={handleSubmit} className="rounded-lg border border-ink/10 bg-white p-4 shadow-[0_14px_34px_rgba(36,9,45,0.08)]">
            <div className="grid gap-3 md:grid-cols-2">
              <input name="name" type="text" required placeholder="Nombre" className="rounded-lg border border-ink/10 bg-[#fff9f1] px-4 py-3 text-ink outline-none focus:border-rose" />
              <select name="projectType" className="rounded-lg border border-ink/10 bg-[#fff9f1] px-4 py-3 text-ink outline-none focus:border-rose" defaultValue="Landing page">
                <option>Landing page</option>
                <option>Tienda online</option>
                <option>Catálogo digital</option>
                <option>Sistema de turnos</option>
                <option>App web / sistema</option>
              </select>
            </div>
            <textarea
              name="message"
              required
              rows={3}
              placeholder="Contanos qué vendés y qué necesitás crear."
              className="mt-3 w-full resize-none rounded-lg border border-ink/10 bg-[#fff9f1] px-4 py-3 text-ink outline-none focus:border-rose"
            />
            <button type="submit" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#24092d] px-6 py-3 font-black text-white transition hover:bg-rose">
              <Send className="h-4 w-4" />
              Preparar consulta
            </button>
            {sent ? <div className="mt-3 rounded-lg bg-lime/20 p-3 text-sm font-bold text-ink">Consulta preparada. Podés escribirnos a {contactEmail}</div> : null}
          </form>
        </div>
      </div>
    </section>
  );
}
