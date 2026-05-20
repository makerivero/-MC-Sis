import { Code2, HeartHandshake, Rocket, ShieldCheck, Sparkles, TabletSmartphone } from "lucide-react";

const benefits = [
  {
    title: "Diseño que destaca",
    text: "Sitios únicos que reflejan tu marca y conectan.",
    icon: Sparkles,
    color: "from-[#ff2d87] to-[#ff8a24]"
  },
  {
    title: "Rendimiento real",
    text: "Velocidad, SEO y código optimizado.",
    icon: Rocket,
    color: "from-[#d8ff00] to-[#a6ff00]"
  },
  {
    title: "Adaptado a todo",
    text: "Experiencia perfecta en móvil, tablet y desktop.",
    icon: TabletSmartphone,
    color: "from-[#ff4f5f] to-[#ff8a24]"
  },
  {
    title: "Seguridad ante todo",
    text: "Protegemos tu sitio y los datos de tus usuarios.",
    icon: ShieldCheck,
    color: "from-[#ffd166] to-[#d8ff00]"
  },
  {
    title: "Acompañamiento",
    text: "Te asesoramos en cada paso del camino.",
    icon: HeartHandshake,
    color: "from-[#ff2d87] to-[#ff4f5f]"
  },
  {
    title: "Escalable",
    text: "Tu sitio crece junto con tu negocio.",
    icon: Code2,
    color: "from-[#ff8a24] to-[#ffd166]"
  }
];

export function Services() {
  return (
    <section id="servicios" className="bg-[#fff7ea] px-5 py-16 text-[#1d1026] md:px-8 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.36fr_1.64fr] lg:items-center">
        <div>
          <h2 className="text-3xl font-black uppercase leading-tight md:text-4xl">
            Beneficios que
            <br />
            marcan la diferencia.
          </h2>
        </div>

        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-6">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="w-[220px] shrink-0 snap-start rounded-[18px] border border-[#1d1026]/8 bg-white p-4 shadow-[0_16px_38px_rgba(36,9,45,0.08)] sm:w-auto">
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.color} text-[#16051f]`}>
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-black">{benefit.title}</h3>
              <p className="mt-2 text-xs leading-5 text-[#66586f]">{benefit.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
