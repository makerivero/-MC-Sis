import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { HeroMockup } from "@/components/HeroMockup";
import { contactEmail } from "@/lib/data";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(125deg,rgba(255,159,28,0.14),transparent_28%,rgba(214,107,255,0.12)_56%,transparent_72%),linear-gradient(180deg,rgba(255,255,255,0.07),transparent_34%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-amber/24 bg-amber/10 px-3 py-2 text-sm text-white/78 backdrop-blur">
            <Sparkles className="h-4 w-4 text-amber" />
            Diseño web comercial para rubros reales
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold text-white md:text-6xl">
            Creamos páginas web y apps para que tu negocio venda, muestre y crezca
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
            Diseñamos sitios modernos, rápidos y listos para usar: desde una landing básica hasta tiendas online y sistemas web personalizados.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#planes" className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber px-6 py-3 font-semibold text-ink transition hover:bg-coral hover:text-white">
              Ver planes
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${contactEmail}?subject=Consulta%20de%20proyecto%20MC-Sis`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/14 bg-white/8 px-6 py-3 font-semibold text-white transition hover:border-rose/50 hover:bg-rose/10"
            >
              <Mail className="h-4 w-4" />
              Contactar por email
            </a>
          </div>

          <div className="mt-8 rounded-lg border border-white/12 bg-gradient-to-br from-amber/16 via-coral/10 to-orchid/12 p-5 shadow-glow">
            <p className="text-sm font-semibold uppercase text-amber">Precio inicial</p>
            <p className="mt-1 text-3xl font-semibold text-white">Desde $250.000 ARS</p>
            <p className="mt-2 text-sm text-white/62">Valores en pesos argentinos. Se ajusta según alcance, secciones e integraciones.</p>
          </div>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}
