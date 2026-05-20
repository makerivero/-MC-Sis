import { ArrowRight, Mail, MonitorSmartphone, Sparkles } from "lucide-react";
import Image from "next/image";
import { contactEmail } from "@/lib/data";

const previewCards = [
  { src: "/demo-screens/restaurant.png", label: "Restaurant" },
  { src: "/demo-screens/accessories.png", label: "Tienda" },
  { src: "/demo-screens/accounting.png", label: "Contable" }
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-5 pb-16 pt-28 md:px-8 md:pb-20 md:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_16%,rgba(255,92,138,0.34),transparent_28%),radial-gradient(circle_at_78%_60%,rgba(255,159,28,0.22),transparent_30%),linear-gradient(135deg,#23062c_0%,#120616_48%,#07070b_100%)]" />
      <div className="absolute right-0 top-0 -z-10 h-[560px] w-[56vw] rounded-bl-[45%] bg-gradient-to-br from-rose via-coral to-orange opacity-90 blur-0" />
      <div className="absolute bottom-10 right-10 -z-10 text-[18vw] font-black text-white/5">MC</div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-lime/40 bg-lime/10 px-3 py-2 text-sm font-black uppercase text-lime">
            <Sparkles className="h-4 w-4" />
            Diseño · Desarrollo · Resultados
          </div>

          <h1 className="display-title max-w-4xl text-5xl text-white md:text-7xl">
            Creamos páginas web y web apps que hacen crecer tu negocio.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/76">
            Diseño creativo, desarrollo moderno y experiencias multiplataforma para convertir visitantes en clientes.
          </p>

          <div className="mt-7 flex max-w-xl flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={`mailto:${contactEmail}?subject=Consulta%20de%20proyecto%20MC-Sis`}
              className="inline-flex flex-1 items-center justify-between gap-4 rounded-lg border border-white/12 bg-white/10 p-3 text-left shadow-soft transition hover:bg-white/15"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-rose to-orange text-white">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-bold uppercase text-white/58">Escribinos a</span>
                <span className="block truncate text-lg font-black text-white">{contactEmail}</span>
              </span>
              <ArrowRight className="h-5 w-5 text-white" />
            </a>

            <div className="rounded-lg px-2 py-1">
              <p className="text-xs font-bold uppercase text-white/66">Sitios profesionales desde</p>
              <p className="display-title text-4xl text-lime">$250.000 <span className="text-base">ARS</span></p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {["Mobile first", "Tablet", "Desktop", "Panel admin"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-lg bg-white/8 px-3 py-2 text-sm font-bold text-white/74">
                <MonitorSmartphone className="h-4 w-4 text-lime" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-1/2 h-16 w-16 rounded-full bg-lime" />
          <div className="absolute -right-4 top-14 h-24 w-24 rounded-full bg-orange" />
          <div className="relative rounded-[2rem] border border-white/24 bg-[#fff4e8] p-6 shadow-soft">
            <div className="mb-5 flex justify-center gap-8 text-[10px] font-bold uppercase text-ink/54">
              <span>Landing pages</span>
              <span>Tiendas online</span>
              <span>Web apps</span>
            </div>
            <div className="grid gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-center">
              <div>
                <h2 className="text-3xl font-black leading-tight text-ink">
                  Experiencias digitales que <span className="text-rose">conectan</span> y venden.
                </h2>
                <a href="#demos" className="mt-5 inline-flex items-center gap-2 rounded-lg border border-ink/15 px-4 py-2 text-sm font-black text-ink">
                  Ver proyectos
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="overflow-hidden rounded-[1.4rem]">
                <Image
                  src="/demo-screens/accounting.png"
                  alt="Vista previa de proyecto web multiplataforma"
                  width={900}
                  height={1200}
                  className="h-64 w-full object-cover object-top"
                  priority
                />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {previewCards.map((card) => (
                <div key={card.label} className="overflow-hidden rounded-lg border border-ink/10 bg-white p-2">
                  <Image src={card.src} alt={card.label} width={220} height={320} className="h-28 w-full rounded-md object-cover object-top" />
                  <p className="mt-2 text-center text-[10px] font-black uppercase text-ink/72">{card.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
