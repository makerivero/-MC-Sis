"use client";

import Image from "next/image";
import {
  ChefHat,
  ClipboardList,
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
import { SectionHeading } from "@/components/SectionHeading";

const demoScreens = [
  {
    title: "Restaurant",
    brand: "Fuego & Miga",
    description: "Carta visual, reservas, pedidos y promociones para vender desde celular.",
    image: "/demo-screens/restaurant.png",
    icon: ChefHat,
    accent: "from-rose via-orange to-amber",
    tags: ["Mobile", "Reservas", "Menú"],
    devices: ["Celular", "Tablet", "Desktop"]
  },
  {
    title: "Tienda de accesorios",
    brand: "Volt Case",
    description: "Productos, carrito, categorías, ofertas y experiencia de compra rápida.",
    image: "/demo-screens/accessories.png",
    icon: ShoppingBag,
    accent: "from-fuchsia-500 via-rose to-orange",
    tags: ["Tienda", "Carrito", "Ofertas"],
    devices: ["Celular", "Web", "Checkout"]
  },
  {
    title: "Estudio contable",
    brand: "Nexo Contable",
    description: "Servicios, vencimientos, portal de clientes y consulta guiada.",
    image: "/demo-screens/accounting.png",
    icon: ReceiptText,
    accent: "from-rose via-coral to-lime",
    tags: ["Portal", "Checklist", "Turnos"],
    devices: ["Web", "Panel", "Mobile"]
  },
  {
    title: "Obra social",
    brand: "Viva Salud",
    description: "Credencial digital, accesos rápidos, turnos y cuenta de afiliado.",
    image: "/demo-screens/health.png",
    icon: Stethoscope,
    accent: "from-mint via-rose to-orange",
    tags: ["Credencial", "Turnos", "Cuenta"],
    devices: ["App web", "Mobile", "Portal"]
  },
  {
    title: "Servicio técnico",
    brand: "FixLab",
    description: "Presupuesto, seguimiento de reparación y solicitud de retiro.",
    image: "/demo-screens/repair.png",
    icon: Wrench,
    accent: "from-rose via-orange to-lime",
    tags: ["Estado", "Retiro", "Soporte"],
    devices: ["Mobile", "Panel", "WhatsApp"]
  },
  {
    title: "Mayorista",
    brand: "Lúpulo Mayorista",
    description: "Stock en vivo, compra por caja, descuentos por volumen y pedidos.",
    image: "/demo-screens/wholesale.png",
    icon: Store,
    accent: "from-amber via-orange to-rose",
    tags: ["Stock", "Pedidos", "B2B"],
    devices: ["Web", "Mobile", "Admin"]
  }
];

export function InteractiveDemos() {
  return (
    <section id="demos" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Demos reales"
          title="Webs y apps multiplataforma, mostradas como las vería un cliente"
          description="Cada demo usa una pantalla vertical completa dentro de una máscara de celular. Podés desplazar la imagen para simular navegación real sin cargar la página con funciones innecesarias."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            { icon: Smartphone, text: "Mobile first" },
            { icon: TabletSmartphone, text: "Tablet ready" },
            { icon: Laptop, text: "Desktop responsive" },
            { icon: ClipboardList, text: "Paneles y flujos internos" }
          ].map((item) => (
            <span key={item.text} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/7 px-4 py-2 text-sm font-semibold text-white/72">
              <item.icon className="h-4 w-4 text-amber" />
              {item.text}
            </span>
          ))}
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {demoScreens.map((demo) => (
            <article key={demo.title} className="overflow-hidden rounded-lg border border-white/10 bg-white/7 shadow-soft backdrop-blur-xl">
              <div className={`bg-gradient-to-br ${demo.accent} p-5`}>
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-white/20 bg-ink/30 p-3 text-white">
                    <demo.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase text-white/74">{demo.title}</p>
                    <h3 className="mt-1 text-3xl font-black text-white">{demo.brand}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/78">{demo.description}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5 p-5 md:grid-cols-[0.75fr_1fr] md:items-center">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {demo.tags.map((tag) => (
                      <span key={tag} className="rounded-lg border border-white/10 bg-ink/55 px-3 py-2 text-xs font-bold text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 rounded-lg border border-white/10 bg-ink/55 p-4">
                    <div className="mb-3 flex items-center gap-2 text-sm font-bold text-amber">
                      <MonitorSmartphone className="h-4 w-4" />
                      Multiplataforma
                    </div>
                    <div className="grid gap-2">
                      {demo.devices.map((device) => (
                        <div key={device} className="flex items-center justify-between rounded-lg bg-white/7 px-3 py-2 text-sm text-white/70">
                          <span>{device}</span>
                          <span className="h-2 w-2 rounded-full bg-lime" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contacto"
                    className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-amber px-4 py-3 text-sm font-black text-ink transition hover:bg-rose hover:text-white"
                  >
                    Quiero algo así
                  </a>
                </div>

                <PhoneMask image={demo.image} title={demo.brand} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneMask({ image, title }: { image: string; title: string }) {
  return (
    <div className="mx-auto w-full max-w-[330px] rounded-[2.2rem] border border-white/18 bg-black p-3 shadow-soft">
      <div className="rounded-[1.65rem] bg-ink p-3">
        <div className="mb-3 flex items-center justify-between px-2">
          <span className="text-xs font-bold text-white/64">{title}</span>
          <span className="h-4 w-20 rounded-full bg-white/14" />
        </div>
        <div className="relative h-[560px] overflow-y-auto rounded-[1.25rem] bg-white overscroll-contain demo-phone-scroll">
          <Image
            src={image}
            alt={`Demo mobile de ${title}`}
            width={900}
            height={2400}
            sizes="330px"
            className="h-auto w-full"
          />
        </div>
        <p className="mt-3 text-center text-xs font-semibold text-white/42">Deslizá dentro del celular</p>
      </div>
    </div>
  );
}
