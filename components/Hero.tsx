import { ArrowRight, Mail, Star } from "lucide-react";
import Image from "next/image";
import { contactEmail } from "@/lib/data";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#16051f] px-5 pb-16 pt-28 md:px-12 md:pb-20 md:pt-36 xl:px-[72px]">
      <div className="absolute right-[-6%] top-20 hidden h-[430px] w-[46vw] rounded-bl-[34%] rounded-tl-[18%] bg-[radial-gradient(circle_at_70%_24%,rgba(216,255,0,0.28),transparent_15%),linear-gradient(135deg,#ff2d87,#ff5a3d,#ff9f1c)] opacity-88 lg:block" />
      <div className="absolute right-[9%] top-40 hidden h-5 w-5 rounded-full bg-[#d8ff00] md:block" />
      <div className="absolute right-[4%] top-80 hidden h-16 w-16 rounded-full bg-[#d8ff00] opacity-90 md:block" />
      <div className="absolute left-[54%] top-72 hidden h-24 w-24 bg-[radial-gradient(circle,#ff2d87_2px,transparent_3px)] bg-[length:16px_16px] opacity-45 lg:block" />

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-6 inline-flex rounded-full border border-[#d8ff00]/55 bg-[#d8ff00]/8 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#d8ff00]">
            Diseño • Desarrollo • Resultados
          </div>

          <h1 className="display-title max-w-[700px] text-[42px] text-[#fff9f0] sm:text-[52px] md:text-[64px] xl:text-[74px]">
            Creamos páginas web
            <br />y <span className="bg-gradient-to-r from-[#ff2d87] via-[#ff4f5f] to-[#ff8a24] bg-clip-text text-transparent">web apps</span>
            <br />que hacen crecer
            <br />tu negocio<span className="text-[#d8ff00]">.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#d8cddd]">
            Diseño creativo, desarrollo moderno y experiencias digitales que convierten visitantes en clientes.
          </p>

          <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center">
            <a
              href={`mailto:${contactEmail}?subject=Consulta%20de%20proyecto%20MC-Sis`}
              className="flex w-full max-w-[430px] items-center gap-4 rounded-[28px] border border-white/12 bg-white/8 p-3 shadow-soft transition hover:-translate-y-1 hover:bg-white/12"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ff4f5f] to-[#ff8a24] text-white">
                <Mail className="h-6 w-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-black uppercase text-white/52">Escribinos a</span>
                <span className="block truncate text-lg font-black text-white">{contactEmail}</span>
              </span>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/12 text-white">
                <ArrowRight className="h-5 w-5" />
              </span>
            </a>

            <div>
              <p className="text-xs font-black uppercase leading-tight text-white/70">
                Sitios profesionales
                <br />
                desde
              </p>
              <p className="display-title mt-1 text-4xl text-[#d8ff00]">$250.000 <span className="text-base">ARS</span></p>
              <span className="mt-1 block h-1.5 w-40 rounded-full bg-gradient-to-r from-[#ff2d87] to-[#ff8a24]" />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative rounded-[32px] bg-[#fff7ea] p-5 text-[#1d1026] shadow-[0_40px_100px_rgba(0,0,0,0.34)] md:p-7">
            <div className="mb-6 flex justify-center gap-6 text-[10px] font-black uppercase text-[#66586f]">
              <span>Diseño</span>
              <span>Desarrollo</span>
              <span>Campañas</span>
            </div>
            <div className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
              <div>
                <h2 className="text-3xl font-black leading-tight">
                  Experiencias digitales que <span className="text-[#ff4f5f]">conectan</span> y venden.
                </h2>
                <a href="#demos" className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#1d1026]/15 px-4 py-2 text-sm font-black">
                  Ver proyectos
                  <ArrowRight className="h-4 w-4" />
                </a>
                <div className="mt-5 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((item) => (
                      <span key={item} className="h-8 w-8 rounded-full border-2 border-[#fff7ea] bg-gradient-to-br from-[#ff2d87] to-[#ffd166]" />
                    ))}
                  </div>
                  <div className="text-xs">
                    <p className="font-black">5.0 ★★★★★</p>
                    <p className="text-[#66586f]">Clientes felices</p>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-[24px]">
                <Image
                  src="/demo-screens/accounting.png"
                  alt="Mockup visual de experiencia digital"
                  width={900}
                  height={1200}
                  className="h-72 w-full object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="absolute right-4 top-16 rounded-3xl bg-white/92 p-4 text-center text-[#1d1026] shadow-soft backdrop-blur">
            <p className="text-2xl font-black">+56%</p>
            <p className="text-xs text-[#66586f]">más consultas</p>
          </div>
          <div className="absolute -right-3 bottom-20 rounded-3xl bg-white/92 p-4 text-[#1d1026] shadow-soft backdrop-blur">
            <p className="text-xs text-[#66586f]">Tráfico orgánico</p>
            <p className="text-2xl font-black text-[#ff4f5f]">+128%</p>
          </div>
          <div className="absolute -left-4 bottom-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#d8ff00] text-[#16051f] shadow-soft">
            <Star className="h-8 w-8 fill-current" />
          </div>
        </div>
      </div>
    </section>
  );
}
