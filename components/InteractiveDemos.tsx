"use client";

import Image from "next/image";
import {
  ChefHat,
  Laptop,
  MonitorSmartphone,
  ReceiptText,
  ShoppingBag,
  Smartphone,
  Stethoscope,
  Store,
  TabletSmartphone,
  Wrench
} from "lucide-react";

const demoScreens = [
  {
    title: "Restaurant",
    brand: "Fuego & Miga",
    description: "Carta visual, reservas y pedidos desde una experiencia mobile premium.",
    image: "/demo-screens/restaurant.png",
    icon: ChefHat,
    tags: ["Menú", "Reserva", "Pedido"]
  },
  {
    title: "Tienda de accesorios",
    brand: "Volt Case",
    description: "Catálogo, productos, carrito y promociones para vender más rápido.",
    image: "/demo-screens/accessories.png",
    icon: ShoppingBag,
    tags: ["Tienda", "Carrito", "Ofertas"]
  },
  {
    title: "Estudio contable",
    brand: "Nexo Contable",
    description: "Servicios, vencimientos, consulta y portal de clientes.",
    image: "/demo-screens/accounting.png",
    icon: ReceiptText,
    tags: ["Portal", "Checklist", "Consulta"]
  },
  {
    title: "Obra social",
    brand: "Viva Salud",
    description: "Credencial digital, turnos, accesos rápidos y cuenta de afiliado.",
    image: "/demo-screens/health.png",
    icon: Stethoscope,
    tags: ["App web", "Turnos", "Cuenta"]
  },
  {
    title: "Servicio técnico",
    brand: "FixLab",
    description: "Presupuestos, seguimiento de reparación y retiro a domicilio.",
    image: "/demo-screens/repair.png",
    icon: Wrench,
    tags: ["Estado", "Retiro", "Soporte"]
  },
  {
    title: "Mayorista",
    brand: "Lúpulo Mayorista",
    description: "Stock real, pedidos por caja y condiciones para clientes B2B.",
    image: "/demo-screens/wholesale.png",
    icon: Store,
    tags: ["Stock", "Pedidos", "B2B"]
  }
];

export function InteractiveDemos() {
  return (
    <section id="demos">
      <div className="bg-[#fff6ea] px-5 py-14 text-ink md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-black uppercase text-rose">Sitios que enamoran</p>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">
              Diseños pensados <span className="text-rose">para cada industria.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-ink/68">
              Cada proyecto es único. Combinamos estrategia, diseño y tecnología para lograr sitios rápidos, modernos y enfocados en resultados.
            </p>
            <a href="#contacto" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#24092d] px-5 py-3 text-sm font-black text-white">
              Ver más proyectos
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/14">→</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
            {demoScreens.map((demo) => (
              <a key={demo.title} href="#demos-interactivos" className="group">
                <div className="overflow-hidden rounded-lg border border-ink/10 bg-white p-2 shadow-[0_16px_40px_rgba(36,9,45,0.10)] transition group-hover:-translate-y-2">
                  <Image src={demo.image} alt={demo.brand} width={360} height={620} className="h-52 w-full rounded-md object-cover object-top" />
                </div>
                <p className="mt-3 text-center text-[11px] font-black uppercase text-ink/72">{demo.title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div id="demos-interactivos" className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_7%_18%,rgba(255,92,138,0.18),transparent_26%),radial-gradient(circle_at_92%_8%,rgba(255,159,28,0.16),transparent_24%),linear-gradient(180deg,#1b0625,#08070b)]" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase text-rose">Portfolio navegable</p>
              <h2 className="display-title text-5xl text-white md:text-6xl">
                Probá cada demo como si fuera una web real.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              {[
                { icon: Smartphone, text: "Mobile" },
                { icon: TabletSmartphone, text: "Tablet" },
                { icon: Laptop, text: "Desktop" },
                { icon: MonitorSmartphone, text: "Paneles" }
              ].map((item) => (
                <span key={item.text} className="inline-flex items-center gap-2 rounded-lg bg-white/8 px-4 py-2 text-sm font-bold text-white/72">
                  <item.icon className="h-4 w-4 text-lime" />
                  {item.text}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {demoScreens.map((demo) => (
              <article key={demo.title} className="rounded-[1.6rem] border border-white/10 bg-white/[0.055] p-5 shadow-soft backdrop-blur-xl">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-rose to-orange text-white">
                    <demo.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase text-lime">{demo.title}</p>
                    <h3 className="text-2xl font-black text-white">{demo.brand}</h3>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-6 text-white/64">{demo.description}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {demo.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-white/62">
                      {tag}
                    </span>
                  ))}
                </div>
                <PhoneMask image={demo.image} title={demo.brand} />
                <a href="#contacto" className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-lime px-4 py-3 text-sm font-black text-ink transition hover:bg-rose hover:text-white">
                  Quiero algo así
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMask({ image, title }: { image: string; title: string }) {
  return (
    <div className="mx-auto w-full max-w-[260px] rounded-[2rem] border border-white/18 bg-black p-2.5 shadow-soft">
      <div className="rounded-[1.5rem] bg-ink p-2.5">
        <div className="mb-2 flex items-center justify-between px-2">
          <span className="text-[10px] font-bold text-white/54">{title}</span>
          <span className="h-3 w-16 rounded-full bg-white/14" />
        </div>
        <div className="relative h-[500px] overflow-y-auto rounded-[1.1rem] bg-white overscroll-contain demo-phone-scroll">
          <Image src={image} alt={`Demo mobile de ${title}`} width={900} height={2400} sizes="260px" className="h-auto w-full" />
        </div>
        <p className="mt-2 text-center text-[11px] font-semibold text-white/38">Deslizá dentro del celular</p>
      </div>
    </div>
  );
}
