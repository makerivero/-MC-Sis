"use client";

import { Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { contactEmail } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Contacto"
            title="¿Querés cotizar tu página o app web?"
            description="Contanos qué necesitás crear y te respondemos con una orientación de alcance, tiempos y presupuesto."
          />
          <div className="mt-8 rounded-lg border border-aqua/24 bg-aqua/10 p-5">
            <p className="text-sm font-semibold uppercase text-aqua">Email</p>
            <a href={`mailto:${contactEmail}`} className="mt-2 inline-flex items-center gap-2 text-2xl font-semibold text-white transition hover:text-aqua">
              <Mail className="h-5 w-5" />
              {contactEmail}
            </a>
          </div>
          <a
            href={`mailto:${contactEmail}?subject=Consulta%20para%20cotizar%20web%20o%20app`}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-aqua px-6 py-3 font-semibold text-ink transition hover:bg-mint"
          >
            <Send className="h-4 w-4" />
            Escribir por email
          </a>
        </div>

        <form onSubmit={handleSubmit} className="rounded-lg border border-white/10 bg-white/7 p-5 shadow-soft backdrop-blur-xl md:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-white/78">
              Nombre
              <input
                name="name"
                type="text"
                required
                placeholder="Tu nombre o marca"
                className="rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-white outline-none transition placeholder:text-white/32 focus:border-aqua"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-white/78">
              Tipo de proyecto
              <select
                name="projectType"
                className="rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-white outline-none transition focus:border-aqua"
                defaultValue="Landing page"
              >
                <option>Landing page</option>
                <option>Tienda online</option>
                <option>Catálogo digital</option>
                <option>Sistema de turnos</option>
                <option>App web / sistema</option>
              </select>
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm font-medium text-white/78">
            Presupuesto estimado
            <select
              name="budget"
              className="rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-white outline-none transition focus:border-aqua"
              defaultValue="$250.000 a $380.000 ARS"
            >
              <option>$250.000 a $380.000 ARS</option>
              <option>$380.000 a $550.000 ARS</option>
              <option>$550.000 a $750.000 ARS</option>
              <option>Más de $950.000 ARS</option>
              <option>Necesito orientación</option>
            </select>
          </label>

          <label className="mt-4 grid gap-2 text-sm font-medium text-white/78">
            Mensaje
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Contanos qué vendés, qué secciones necesitás o qué sistema querés crear."
              className="resize-none rounded-lg border border-white/10 bg-ink/60 px-4 py-3 text-white outline-none transition placeholder:text-white/32 focus:border-aqua"
            />
          </label>

          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-aqua px-6 py-3 font-semibold text-ink transition hover:bg-mint">
            <Send className="h-4 w-4" />
            Preparar consulta
          </button>

          {sent ? (
            <div className="mt-5 rounded-lg border border-mint/35 bg-mint/12 p-4 text-sm font-medium text-mint">
              Consulta preparada. Podés escribirnos a {contactEmail}
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
