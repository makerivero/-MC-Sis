"use client";

import {
  BadgePercent,
  Calculator,
  Check,
  ClipboardCheck,
  Clock,
  FileCheck2,
  HeartPulse,
  Minus,
  PackageCheck,
  Plus,
  Search,
  ShoppingBag,
  Star,
  Truck,
  UtensilsCrossed,
  Wrench
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { demos } from "@/lib/data";

const restaurantMenu = {
  Entradas: [
    { name: "Bruschettas", price: 5200, tag: "Para compartir" },
    { name: "Empanadas criollas", price: 4200, tag: "Horno de barro" }
  ],
  Principales: [
    { name: "Sorrentinos de calabaza", price: 9800, tag: "Más pedido" },
    { name: "Bife con papas rotas", price: 12800, tag: "Recomendado" }
  ],
  Postres: [
    { name: "Flan mixto", price: 3900, tag: "Casero" },
    { name: "Tiramisú", price: 4600, tag: "Nuevo" }
  ]
};

const accountingServices = {
  Monotributo: ["Alta y recategorización", "Facturación", "Vencimientos"],
  "Responsable inscripto": ["IVA", "Ganancias", "Libros digitales"],
  Sueldos: ["Liquidación", "Recibos", "ART y cargas sociales"]
};

const healthPlans = {
  Joven: { price: "$18.500", coverage: 62, perks: ["Clínica médica", "Odontología", "Teleconsulta"] },
  Familia: { price: "$42.000", coverage: 78, perks: ["Pediatría", "Guardia", "Descuentos farmacia"] },
  Integral: { price: "$68.000", coverage: 92, perks: ["Especialistas", "Internación", "Estudios complejos"] }
};

const accessoryProducts = [
  { name: "Funda MagSafe", price: "$14.500", color: "bg-rose" },
  { name: "Auriculares Pro", price: "$38.000", color: "bg-orchid" },
  { name: "Cargador rápido", price: "$22.000", color: "bg-amber" }
];

const repairSteps = ["Ingresado", "Diagnóstico", "Presupuesto", "En reparación", "Listo"];

const stockItems = [
  { name: "Yerba 1kg", code: "YER-001", stock: 18, min: 30, price: "$1.950" },
  { name: "Aceite 900ml", code: "ACE-090", stock: 64, min: 40, price: "$1.320" },
  { name: "Harina 000", code: "HAR-000", stock: 11, min: 25, price: "$720" },
  { name: "Arroz largo fino", code: "ARR-001", stock: 85, min: 50, price: "$890" }
];

export function InteractiveDemos() {
  const [restaurantTab, setRestaurantTab] = useState<keyof typeof restaurantMenu>("Principales");
  const [restaurantCart, setRestaurantCart] = useState(2);
  const [reservedTable, setReservedTable] = useState(false);

  const [accountingService, setAccountingService] = useState<keyof typeof accountingServices>("Monotributo");
  const [docs, setDocs] = useState(["DNI", "Constancia CUIT"]);

  const [healthPlan, setHealthPlan] = useState<keyof typeof healthPlans>("Familia");
  const [specialty, setSpecialty] = useState("Clínica médica");
  const [healthRequested, setHealthRequested] = useState(false);

  const [accessoryColor, setAccessoryColor] = useState("Negro");
  const [accessoryCart, setAccessoryCart] = useState(1);

  const [device, setDevice] = useState("Celular");
  const [repairStep, setRepairStep] = useState(2);
  const [urgentRepair, setUrgentRepair] = useState(false);

  const [stockQuery, setStockQuery] = useState("");
  const [stockOrder, setStockOrder] = useState(8);

  const currentRestaurantItems = restaurantMenu[restaurantTab];
  const currentDocs = accountingServices[accountingService];
  const selectedHealthPlan = healthPlans[healthPlan];
  const lowStock = stockItems.filter((item) => item.stock < item.min).length;
  const visibleStock = useMemo(
    () => stockItems.filter((item) => item.name.toLowerCase().includes(stockQuery.toLowerCase()) || item.code.toLowerCase().includes(stockQuery.toLowerCase())),
    [stockQuery]
  );

  const toggleDoc = (doc: string) => {
    setDocs((current) => (current.includes(doc) ? current.filter((item) => item !== doc) : [...current, doc]));
  };

  return (
    <section id="demos" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Demos por rubro"
          title="No vendemos una plantilla: mostramos cómo se sentiría tu negocio online"
          description="Cada demo representa un caso comercial distinto. Son maquetas de interfaz con decisiones reales: menú, carrito, turnos, documentos, stock, estados y consultas."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          <DemoFrame demo={demos[0]}>
            <PhoneFrame title="Fuego Sur" subtitle="Restaurant · Palermo">
              <ScreenRail>
                <div className="min-w-full">
                  <ImageCard src="/demo-assets/restaurant.svg" alt="Restaurant con plato principal" />
                  <div className="mt-3 rounded-lg bg-gradient-to-br from-orange via-coral to-amber p-4 text-ink">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold uppercase">Mesa, take away y delivery</p>
                        <h3 className="mt-2 text-3xl font-black leading-tight">Cocina de autor para pedir en 2 toques</h3>
                      </div>
                      <UtensilsCrossed className="h-9 w-9 shrink-0" />
                    </div>
                    <button
                      type="button"
                      onClick={() => setReservedTable((value) => !value)}
                      className="mt-4 rounded-lg bg-ink px-4 py-2 text-sm font-bold text-white"
                    >
                      {reservedTable ? "Mesa reservada" : "Reservar mesa"}
                    </button>
                  </div>
                </div>

                <div className="min-w-full">
                  <div className="rounded-lg bg-white/8 p-3">
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {(Object.keys(restaurantMenu) as Array<keyof typeof restaurantMenu>).map((tab) => (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setRestaurantTab(tab)}
                          className={`shrink-0 rounded-lg px-3 py-2 text-sm font-semibold ${
                            restaurantTab === tab ? "bg-amber text-ink" : "bg-ink/60 text-white/70"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    <div className="mt-4 space-y-3">
                      {currentRestaurantItems.map((item) => (
                        <div key={item.name} className="flex items-center gap-3 rounded-lg bg-ink/60 p-3">
                          <Image src="/demo-assets/restaurant.svg" alt="" width={56} height={56} className="h-14 w-14 rounded-lg object-cover" />
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-white">{item.name}</p>
                            <p className="text-xs text-amber">{item.tag}</p>
                            <p className="text-sm text-white/60">${item.price.toLocaleString("es-AR")}</p>
                          </div>
                          <button type="button" onClick={() => setRestaurantCart((count) => count + 1)} className="rounded-lg bg-amber p-2 text-ink">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="min-w-full">
                  <div className="rounded-lg border border-amber/35 bg-ink/92 p-4 shadow-soft">
                    <p className="text-sm text-white/58">Resumen del pedido</p>
                    <div className="mt-4 space-y-3">
                      <div className="flex justify-between text-white"><span>Sorrentinos</span><span>$9.800</span></div>
                      <div className="flex justify-between text-white"><span>Bife con papas</span><span>$12.800</span></div>
                      <div className="flex justify-between text-amber"><span>{restaurantCart} items</span><span>Enviar pedido</span></div>
                    </div>
                  </div>
                </div>
              </ScreenRail>
            </PhoneFrame>
          </DemoFrame>

          <DemoFrame demo={demos[1]}>
            <BrowserShell title="Estudio Norte">
              <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-lg bg-lime/12 p-4">
                  <ImageCard src="/demo-assets/accounting.svg" alt="Panel visual para estudio contable" />
                  <Calculator className="h-8 w-8 text-lime" />
                  <h3 className="mt-4 text-2xl font-bold text-white">Consulta contable guiada</h3>
                  <p className="mt-2 text-sm leading-6 text-white/62">El cliente elige su situación y la web arma una lista clara de próximos pasos.</p>
                  <div className="mt-4 grid gap-2">
                    {(Object.keys(accountingServices) as Array<keyof typeof accountingServices>).map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setAccountingService(service)}
                        className={`rounded-lg px-3 py-2 text-left text-sm font-semibold ${
                          accountingService === service ? "bg-lime text-ink" : "bg-white/8 text-white/70"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/7 p-4">
                  <p className="text-sm font-semibold text-lime">Documentación requerida</p>
                  <div className="mt-4 space-y-3">
                    {["DNI", "Constancia CUIT", ...currentDocs].map((doc) => {
                      const checked = docs.includes(doc);
                      return (
                        <button key={doc} type="button" onClick={() => toggleDoc(doc)} className="flex w-full items-center justify-between rounded-lg bg-ink/55 p-3 text-left">
                          <span className="text-sm text-white">{doc}</span>
                          <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${checked ? "bg-lime text-ink" : "bg-white/10 text-white/40"}`}>
                            <Check className="h-4 w-4" />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="mt-4 rounded-lg bg-lime/10 p-3">
                    <p className="text-sm text-white/66">Avance de consulta</p>
                    <div className="mt-2 h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-lime" style={{ width: `${Math.min(100, docs.length * 24)}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </BrowserShell>
          </DemoFrame>

          <DemoFrame demo={demos[2]}>
            <PhoneFrame title="Salud Viva" subtitle="Obra social · Credencial digital">
              <ScreenRail>
                <div className="min-w-full">
                  <ImageCard src="/demo-assets/health.svg" alt="Credencial digital de salud" />
                  <div className="mt-3 rounded-lg bg-gradient-to-br from-rose via-orchid to-steel p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/78">Plan activo</p>
                        <h3 className="text-3xl font-black text-white">{healthPlan}</h3>
                      </div>
                      <HeartPulse className="h-10 w-10 text-white" />
                    </div>
                    <p className="mt-5 text-2xl font-bold text-white">{selectedHealthPlan.price}</p>
                    <p className="text-sm text-white/72">Cobertura mensual estimada</p>
                  </div>
                </div>

                <div className="min-w-full">
                  <div className="grid grid-cols-3 gap-2">
                    {(Object.keys(healthPlans) as Array<keyof typeof healthPlans>).map((plan) => (
                      <button
                        key={plan}
                        type="button"
                        onClick={() => {
                          setHealthPlan(plan);
                          setHealthRequested(false);
                        }}
                        className={`rounded-lg py-2 text-sm font-bold ${healthPlan === plan ? "bg-rose text-white" : "bg-white/8 text-white/62"}`}
                      >
                        {plan}
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 rounded-lg bg-white/8 p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/64">Cobertura</span>
                      <span className="font-bold text-rose">{selectedHealthPlan.coverage}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10">
                      <div className="h-2 rounded-full bg-gradient-to-r from-rose to-orchid" style={{ width: `${selectedHealthPlan.coverage}%` }} />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedHealthPlan.perks.map((perk) => (
                        <button key={perk} type="button" onClick={() => setSpecialty(perk)} className={`rounded-lg px-3 py-2 text-xs font-semibold ${specialty === perk ? "bg-orchid text-white" : "bg-ink/60 text-white/62"}`}>
                          {perk}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="min-w-full">
                  <button type="button" onClick={() => setHealthRequested(true)} className="w-full rounded-lg bg-rose px-4 py-3 font-bold text-white">
                    {healthRequested ? `Turno solicitado: ${specialty}` : "Solicitar turno"}
                  </button>
                  <div className="mt-4 rounded-lg bg-white/8 p-4">
                    <p className="text-sm text-white/62">Próxima disponibilidad</p>
                    <p className="mt-2 text-2xl font-bold text-white">Jueves 16:30</p>
                    <p className="text-sm text-rose">{specialty}</p>
                  </div>
                </div>
              </ScreenRail>
            </PhoneFrame>
          </DemoFrame>

          <DemoFrame demo={demos[3]}>
            <PhoneFrame title="Accesorios Glow" subtitle="Tienda mobile">
              <ImageCard src="/demo-assets/accessories.svg" alt="Accesorios para celular" />
              <div className="rounded-lg bg-gradient-to-br from-violet via-orchid to-coral p-4">
                <p className="text-sm font-bold text-white/82">Combo destacado</p>
                <h3 className="mt-2 text-3xl font-black text-white">Funda + vidrio + cargador</h3>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">$49.900</span>
                  <span className="rounded-lg bg-white px-3 py-1 text-sm font-bold text-ink">15% OFF</span>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-white/8 p-4">
                <p className="text-sm font-semibold text-white">Color seleccionado: {accessoryColor}</p>
                <div className="mt-3 flex gap-2">
                  {["Negro", "Rosa", "Azul", "Lima"].map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setAccessoryColor(color)}
                      className={`h-9 flex-1 rounded-lg border text-xs font-bold ${
                        accessoryColor === color ? "border-white bg-white text-ink" : "border-white/10 bg-white/7 text-white/62"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-3">
                {accessoryProducts.map((product) => (
                  <div key={product.name} className="flex items-center gap-3 rounded-lg bg-white/8 p-3">
                    <span className={`h-12 w-12 rounded-lg ${product.color}`} />
                    <div className="flex-1">
                      <p className="font-semibold text-white">{product.name}</p>
                      <p className="text-sm text-white/56">{product.price}</p>
                    </div>
                    <button type="button" onClick={() => setAccessoryCart((count) => count + 1)} className="rounded-lg bg-orchid p-2 text-white">
                      <ShoppingBag className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-lg bg-orchid/16 p-3">
                <span className="text-sm text-white/70">Carrito</span>
                <span className="font-bold text-orchid">{accessoryCart} productos</span>
              </div>
            </PhoneFrame>
          </DemoFrame>

          <DemoFrame demo={demos[4]}>
            <BrowserShell title="FixLab Servicio Técnico">
              <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
                <div className="rounded-lg bg-orange/12 p-4">
                  <ImageCard src="/demo-assets/repair.svg" alt="Servicio técnico y reparación" />
                  <Wrench className="h-8 w-8 text-orange" />
                  <h3 className="mt-4 text-2xl font-bold text-white">Seguimiento de reparación</h3>
                  <div className="mt-5 grid grid-cols-3 gap-2">
                    {["Celular", "Notebook", "Consola"].map((item) => (
                      <button key={item} type="button" onClick={() => setDevice(item)} className={`rounded-lg px-2 py-3 text-sm font-bold ${device === item ? "bg-orange text-ink" : "bg-white/8 text-white/62"}`}>
                        {item}
                      </button>
                    ))}
                  </div>
                  <button type="button" onClick={() => setUrgentRepair((value) => !value)} className={`mt-4 w-full rounded-lg px-4 py-3 font-bold ${urgentRepair ? "bg-rose text-white" : "bg-white/8 text-white/70"}`}>
                    {urgentRepair ? "Prioridad urgente activada" : "Marcar como urgente"}
                  </button>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/7 p-4">
                  <p className="text-sm font-semibold text-orange">Ticket #{device.slice(0, 3).toUpperCase()}-284</p>
                  <div className="mt-4 space-y-3">
                    {repairSteps.map((step, index) => (
                      <button key={step} type="button" onClick={() => setRepairStep(index)} className="flex w-full items-center gap-3 rounded-lg bg-ink/55 p-3 text-left">
                        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${index <= repairStep ? "bg-orange text-ink" : "bg-white/10 text-white/40"}`}>
                          {index <= repairStep ? <Check className="h-4 w-4" /> : index + 1}
                        </span>
                        <span className={index <= repairStep ? "font-semibold text-white" : "text-white/52"}>{step}</span>
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg bg-amber/10 p-3 text-sm text-amber">
                    Presupuesto estimado: {urgentRepair ? "$48.000 con prioridad" : "$36.000"}
                  </div>
                </div>
              </div>
            </BrowserShell>
          </DemoFrame>

          <DemoFrame demo={demos[5]}>
            <BrowserShell title="Mayorista Centro">
              <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-lg bg-aqua/10 p-4">
                  <ImageCard src="/demo-assets/wholesale.svg" alt="Depósito mayorista con stock" />
                  <PackageCheck className="h-8 w-8 text-aqua" />
                  <h3 className="mt-4 text-2xl font-bold text-white">Stock y pedidos internos</h3>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <StatPill label="Productos" value="428" color="text-aqua" />
                    <StatPill label="Alertas" value={String(lowStock)} color="text-amber" />
                    <StatPill label="Pedido actual" value={`${stockOrder} cajas`} color="text-lime" />
                    <StatPill label="Despachos" value="17" color="text-coral" />
                  </div>
                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-ink/60 px-3 py-2">
                    <Search className="h-4 w-4 text-white/46" />
                    <input
                      value={stockQuery}
                      onChange={(event) => setStockQuery(event.target.value)}
                      placeholder="Buscar producto o código"
                      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/36"
                    />
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/7 p-4">
                  <div className="space-y-3">
                    {visibleStock.map((item) => {
                      const alert = item.stock < item.min;
                      return (
                        <div key={item.code} className="rounded-lg bg-ink/55 p-3">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="font-semibold text-white">{item.name}</p>
                              <p className="text-xs text-white/48">{item.code} · {item.price}</p>
                            </div>
                            <span className={`rounded-lg px-2 py-1 text-xs font-bold ${alert ? "bg-amber text-ink" : "bg-lime/16 text-lime"}`}>
                              {item.stock} un.
                            </span>
                          </div>
                          <div className="mt-3 h-2 rounded-full bg-white/10">
                            <div className={`h-2 rounded-full ${alert ? "bg-amber" : "bg-lime"}`} style={{ width: `${Math.min(100, (item.stock / item.min) * 70)}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 flex items-center justify-between rounded-lg bg-aqua/10 p-3">
                    <button type="button" onClick={() => setStockOrder((count) => Math.max(0, count - 1))} className="rounded-lg bg-white/10 p-2 text-white">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="font-bold text-aqua">Reponer {stockOrder} cajas</span>
                    <button type="button" onClick={() => setStockOrder((count) => count + 1)} className="rounded-lg bg-aqua p-2 text-ink">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </BrowserShell>
          </DemoFrame>
        </div>
      </div>
    </section>
  );
}

type Demo = (typeof demos)[number];

function DemoFrame({ demo, children }: { demo: Demo; children: ReactNode }) {
  return (
    <article className="overflow-hidden rounded-lg border border-white/10 bg-white/7 shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/22">
      <div className={`bg-gradient-to-br ${demo.accent} p-5`}>
        <div className="flex items-start gap-4">
          <div className={`rounded-lg border p-3 ${demo.iconClass}`}>
            <demo.icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{demo.title}</h3>
            <p className="mt-2 text-sm leading-6 text-white/66">{demo.description}</p>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-5">{children}</div>
    </article>
  );
}

function PhoneFrame({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return (
    <div className="mx-auto max-w-sm rounded-[2rem] border border-white/18 bg-black p-3 shadow-soft">
      <div className="rounded-[1.45rem] bg-ink p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="font-bold text-white">{title}</p>
            <p className="text-xs text-white/48">{subtitle}</p>
          </div>
          <span className="h-3 w-16 rounded-full bg-white/14" />
        </div>
        <div className="max-h-[520px] overflow-y-auto pr-1">{children}</div>
      </div>
    </div>
  );
}

function BrowserShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/12 bg-ink/80">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/6 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose" />
          <span className="h-3 w-3 rounded-full bg-amber" />
          <span className="h-3 w-3 rounded-full bg-lime" />
        </div>
        <p className="text-sm font-semibold text-white/72">{title}</p>
        <div className="flex items-center gap-2 text-white/40">
          <Clock className="h-4 w-4" />
          <ClipboardCheck className="h-4 w-4" />
          <FileCheck2 className="h-4 w-4" />
          <Truck className="h-4 w-4" />
          <BadgePercent className="h-4 w-4" />
          <Star className="h-4 w-4" />
        </div>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

function ScreenRail({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3">
        {children}
      </div>
      <p className="text-center text-xs font-semibold text-white/42">Arrastrá para ver más pantallas</p>
    </div>
  );
}

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mb-4 overflow-hidden rounded-lg border border-white/10 bg-white/8">
      <Image src={src} alt={alt} width={900} height={620} className="h-44 w-full object-cover" />
    </div>
  );
}

function StatPill({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="rounded-lg bg-white/8 p-3">
      <p className="text-xs text-white/46">{label}</p>
      <p className={`mt-1 text-xl font-bold ${color}`}>{value}</p>
    </div>
  );
}
