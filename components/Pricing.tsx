import { BadgeDollarSign, CheckCircle2 } from "lucide-react";
import { plans } from "@/lib/data";

export function Pricing() {
  return (
    <section id="planes" className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_86%_22%,rgba(255,79,95,0.26),transparent_24%),linear-gradient(180deg,#21072b,#100513)]" />
      <div className="absolute bottom-0 left-0 -z-10 h-48 w-48 rounded-full bg-gradient-to-br from-[#ff2d87] to-[#ff8a24] opacity-70 blur-2xl" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-black uppercase text-rose">Planes simples</p>
          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            Elegí el plan que <span className="bg-gradient-to-r from-[#ff2d87] to-[#ff8a24] bg-clip-text text-transparent">impulsa tu proyecto.</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/68">
            Soluciones escalables para emprendedores, pymes y empresas que quieren dar el salto digital sin complicaciones.
          </p>
          <div className="mt-6 rounded-[22px] border border-white/10 bg-white/7 p-5">
            <p className="text-sm font-black text-white">Todos los planes incluyen:</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {["Diseño 100% responsive", "Optimización SEO básica", "Formulario de contacto", "Soporte post-lanzamiento"].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex min-h-[450px] flex-col overflow-hidden rounded-[24px] border p-6 shadow-soft transition hover:-translate-y-1 ${plan.surface}`}
              >
                {plan.highlighted ? (
                  <div className="absolute inset-x-8 top-0 rounded-b-md bg-gradient-to-r from-[#ff2d87] to-[#ff8a24] px-3 py-1 text-center text-xs font-black uppercase text-white">
                    Más elegido
                  </div>
                ) : null}
                <span className={`mt-3 inline-block text-sm font-black uppercase ${plan.color}`}>{plan.name}</span>
                <h3 className="mt-2 min-h-[58px] text-xl font-black leading-tight text-white/86">{plan.subtitle}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{plan.description}</p>
                <p className={`mt-5 text-[28px] font-black leading-tight ${plan.color}`}>{plan.price}</p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-6 text-white/72">
                      <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${plan.check}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className={`mt-auto inline-flex w-full items-center justify-center px-4 py-3 text-sm font-black ${
                    plan.highlighted ? "btn-gradient" : "btn-lime"
                  }`}
                >
                  LO QUIERO
                </a>
              </article>
            ))}
          </div>

          <aside className="grid gap-5 rounded-[24px] border border-white/12 bg-white/10 p-6 shadow-soft backdrop-blur-xl sm:grid-cols-[auto_1fr_auto] sm:items-center sm:text-left">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff2d87] to-[#ff8a24] text-white">
              <BadgeDollarSign className="h-8 w-8" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-black uppercase text-white">Financiación a medida</h3>
              <p className="mt-2 text-sm leading-6 text-white/66">Consultanos por planes de pago y cuotas para adaptar el proyecto a tu etapa.</p>
            </div>
            <a href="#contacto" className="btn-gradient inline-flex justify-center px-5 py-3 text-sm font-black">
              CONSULTAR
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
