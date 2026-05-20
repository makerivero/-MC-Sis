import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { plans } from "@/lib/data";

export function Pricing() {
  return (
    <section id="planes" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Planes y precios"
          title="Opciones claras, con niveles que se entienden de un vistazo"
          description="Los planes tienen distinto alcance, distinta energía visual y una progresión comercial más fácil de comparar."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-5">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative overflow-hidden rounded-lg border p-5 shadow-soft transition hover:-translate-y-1 ${plan.surface}`}
            >
              {plan.highlighted ? <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber via-mint to-coral" /> : null}
              <span className={`rounded-lg border border-white/10 bg-ink/60 px-3 py-1 text-xs font-semibold ${plan.color}`}>{plan.badge}</span>
              <h3 className="mt-5 min-h-14 text-xl font-semibold text-white">{plan.name}</h3>
              <p className={`mt-4 text-2xl font-semibold ${plan.color}`}>{plan.price}</p>
              <p className="mt-4 text-sm leading-6 text-white/64">{plan.description}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-white/72">
                    <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${plan.check}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-4xl rounded-lg border border-white/10 bg-white/7 p-5 text-center text-sm leading-7 text-white/64">
          Los valores son orientativos y pueden variar según funcionalidades, cantidad de secciones, integraciones y complejidad del proyecto.
        </p>
      </div>
    </section>
  );
}
