import { Code2, Heart, Pencil, Rocket, Search } from "lucide-react";
import { processSteps } from "@/lib/data";

const icons = [Search, Pencil, Code2, Rocket, Heart];
const colors = ["bg-rose", "bg-lime", "bg-orange", "bg-amber", "bg-coral"];

export function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden px-5 py-16 md:px-8 md:py-20">
      <div className="absolute inset-0 -z-10 bg-[#1a0622]" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.45fr_1.55fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-black uppercase text-rose">Nuestro proceso</p>
          <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
            Simple, claro y <span className="text-rose">efectivo.</span>
          </h2>
          <p className="mt-5 text-sm leading-6 text-white/64">
            Trabajamos para convertir tu idea en un producto digital que genera resultados.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-5">
          {processSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <article key={step} className="relative">
                <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-[1.2rem] ${colors[index]} text-ink shadow-soft`}>
                  <Icon className="h-7 w-7" />
                </div>
                <p className="display-title text-5xl text-white/90">{index + 1}</p>
                <h3 className="mt-2 text-lg font-black text-white">{step}</h3>
                <p className="mt-2 text-xs leading-5 text-white/54">
                  {["Conocemos tu negocio.", "Creamos una propuesta visual.", "Convertimos el diseño en sitio.", "Probamos y publicamos.", "Seguimos mejorando."][index]}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
