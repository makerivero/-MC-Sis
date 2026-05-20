import { proofPoints, services } from "@/lib/data";

export function Services() {
  return (
    <section id="servicios" className="bg-[#fff6ea] px-5 py-16 text-ink md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="mb-3 text-xs font-black uppercase text-rose">Beneficios que marcan diferencia</p>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">Soluciones web para vender, mostrar y ordenar.</h2>
            <p className="mt-5 max-w-xl text-sm leading-6 text-ink/64">
              Desde una presencia inicial hasta un sistema interno, construimos algo útil, rápido y alineado a tu negocio.
            </p>
            <div className="mt-8 grid gap-3">
              {proofPoints.map((point, index) => (
                <div key={point.title} className="rounded-lg border border-ink/10 bg-white p-4 shadow-[0_14px_34px_rgba(36,9,45,0.08)]">
                  <p className={["text-rose", "text-lime", "text-orchid"][index] + " font-black"}>{point.title}</p>
                  <p className="mt-2 text-sm leading-6 text-ink/62">{point.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-lg border border-ink/10 bg-white p-5 shadow-[0_14px_34px_rgba(36,9,45,0.08)] transition hover:-translate-y-1">
                <div className={`inline-flex rounded-lg p-3 ${service.color}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-black text-ink">{service.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
