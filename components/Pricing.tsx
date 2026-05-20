import { CheckCircle2 } from "lucide-react";
import { plans } from "@/lib/data";

export function Pricing() {
  return (
    <section id="planes" className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_86%_22%,rgba(255,92,138,0.22),transparent_24%),linear-gradient(180deg,#21072b,#100513)]" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-black uppercase text-rose">Planes simples</p>
          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            Elegí el plan que <span className="text-rose">impulsa tu proyecto.</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/68">
            Soluciones escalables para emprendedores, pymes y empresas que quieren dar el salto digital sin complicaciones.
          </p>
          <div className="mt-6 rounded-lg border border-white/10 bg-white/7 p-4">
            <p className="text-sm font-bold text-white">Todos los planes incluyen:</p>
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

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`relative overflow-hidden rounded-lg border p-5 shadow-soft transition hover:-translate-y-1 ${plan.surface}`}>
              {plan.highlighted ? <div className="absolute inset-x-8 top-0 rounded-b-md bg-gradient-to-r from-rose to-orange px-3 py-1 text-center text-xs font-black uppercase text-white">Más elegido</div> : null}
              <span className={`mt-3 inline-block rounded-lg border border-white/10 bg-ink/60 px-3 py-1 text-xs font-semibold ${plan.color}`}>{plan.badge}</span>
              <h3 className="mt-5 text-xl font-black text-white">{plan.name}</h3>
              <p className={`mt-4 text-3xl font-black ${plan.color}`}>{plan.price}</p>
              <p className="mt-4 text-sm leading-6 text-white/64">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-white/72">
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${plan.check}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-lime px-4 py-3 text-sm font-black text-ink transition hover:bg-rose hover:text-white">
                Lo quiero
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
