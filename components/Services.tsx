import { proofPoints, services } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

export function Services() {
  return (
    <section className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Qué podemos crear"
              title="Soluciones web para vender, mostrar y ordenar"
              description="Desde una presencia inicial hasta un sistema interno, la idea es construir algo útil, rápido y alineado a tu negocio."
            />
            <div className="mt-8 grid gap-3">
              {proofPoints.map((point) => (
                <div key={point.title} className="rounded-lg border border-white/10 bg-white/7 p-4">
                  <p className="font-semibold text-white">{point.title}</p>
                  <p className="mt-2 text-sm leading-6 text-white/60">{point.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-lg border border-white/10 bg-white/7 p-5 transition hover:border-aqua/40 hover:bg-aqua/8">
                <service.icon className="h-6 w-6 text-aqua" />
                <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
