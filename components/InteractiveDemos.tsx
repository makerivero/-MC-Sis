"use client";

import { Check, Clock, Filter, MessageCircle, Plus, Search, ShoppingCart, UserCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { demos } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

const products = [
  { name: "Remera MC", price: "$18.000", category: "Indumentaria" },
  { name: "Taza premium", price: "$7.500", category: "Regalos" },
  { name: "Kit oficina", price: "$25.000", category: "Accesorios" }
];

const slots = ["09:30", "10:15", "11:00", "15:30", "17:00"];
const catalogCategories = ["Todos", "Servicios", "Productos", "Promos"];
const tasks = ["Nuevo pedido", "Pago pendiente", "Revisar stock", "Enviar presupuesto"];

export function InteractiveDemos() {
  const [cartCount, setCartCount] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState("10:15");
  const [category, setCategory] = useState("Todos");
  const [doneTasks, setDoneTasks] = useState<string[]>(["Nuevo pedido"]);

  const visibleProducts = useMemo(() => {
    if (category === "Todos") return products;
    if (category === "Promos") return products.slice(0, 2);
    return products.filter((product) => (category === "Servicios" ? product.name.includes("Kit") : !product.name.includes("Kit")));
  }, [category]);

  const toggleTask = (task: string) => {
    setDoneTasks((current) => (current.includes(task) ? current.filter((item) => item !== task) : [...current, task]));
  };

  return (
    <section id="demos" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Demos interactivas"
          title="Una idea clara de lo que podemos construir"
          description="Cada mockup muestra un tipo de solución posible para comercios, servicios, profesionales y marcas que quieren vender, organizarse o mostrarse mejor online."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <DemoFrame title={demos[0].title} description={demos[0].description} icon={demos[0].icon}>
            <div className="overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-white/12 to-white/5">
              <div className="bg-[linear-gradient(135deg,rgba(62,230,255,0.22),rgba(255,140,107,0.16))] p-5">
                <p className="text-sm text-white/70">Café de barrio</p>
                <h3 className="mt-2 text-3xl font-semibold text-white">Desayunos, meriendas y panadería artesanal</h3>
                <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-mint px-4 py-2 text-sm font-semibold text-ink">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </button>
              </div>
              <div className="grid gap-3 p-5 sm:grid-cols-3">
                {["Cafetería", "Pastelería", "Take away"].map((item) => (
                  <span key={item} className="rounded-lg border border-white/10 bg-ink/45 p-3 text-sm text-white/76">
                    {item}
                  </span>
                ))}
              </div>
              <div className="border-t border-white/10 px-5 py-4 text-sm text-white/62">
                Horarios: Lun a Sáb · 8:00 a 20:00
              </div>
            </div>
          </DemoFrame>

          <DemoFrame title={demos[1].title} description={demos[1].description} icon={demos[1].icon}>
            <div className="rounded-lg border border-white/10 bg-ink/50 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/58">Tienda simple</p>
                  <h3 className="text-xl font-semibold text-white">Productos destacados</h3>
                </div>
                <div className="inline-flex items-center gap-2 rounded-lg bg-aqua/12 px-3 py-2 text-aqua">
                  <ShoppingCart className="h-4 w-4" />
                  {cartCount}
                </div>
              </div>
              <div className="grid gap-3">
                {products.map((product) => (
                  <div key={product.name} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/6 p-3">
                    <div>
                      <p className="font-medium text-white">{product.name}</p>
                      <p className="text-sm text-white/52">{product.price}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setCartCount((count) => count + 1)}
                      className="inline-flex items-center gap-2 rounded-lg bg-aqua px-3 py-2 text-sm font-semibold text-ink transition hover:bg-mint"
                    >
                      <Plus className="h-4 w-4" />
                      Agregar
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </DemoFrame>

          <DemoFrame title={demos[2].title} description={demos[2].description} icon={demos[2].icon}>
            <div className="rounded-lg border border-white/10 bg-white/6 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/58">Agenda online</p>
                  <h3 className="text-xl font-semibold text-white">Elegí un horario</h3>
                </div>
                <Clock className="h-5 w-5 text-mint" />
              </div>
              <div className="grid grid-cols-5 gap-2">
                {["L", "M", "M", "J", "V"].map((day, index) => (
                  <span key={day + index} className="rounded-lg border border-white/10 bg-ink/45 py-3 text-center text-sm text-white/60">
                    {day}
                  </span>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedSlot(slot)}
                    className={`rounded-lg border px-3 py-3 text-sm font-semibold transition ${
                      selectedSlot === slot ? "border-mint bg-mint text-ink" : "border-white/10 bg-ink/45 text-white/70 hover:border-aqua/45"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 rounded-lg border border-mint/30 bg-mint/10 p-3 text-sm text-mint">
                <UserCheck className="h-4 w-4" />
                Turno seleccionado: {selectedSlot}
              </div>
            </div>
          </DemoFrame>

          <DemoFrame title={demos[3].title} description={demos[3].description} icon={demos[3].icon}>
            <div className="rounded-lg border border-white/10 bg-ink/50 p-4">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["Ventas del día", "$184.000"],
                  ["Pedidos", "26"],
                  ["Clientes", "142"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-white/6 p-3">
                    <p className="text-xs text-white/50">{label}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex h-36 items-end gap-2 rounded-lg border border-white/10 bg-white/5 p-4">
                {[35, 70, 48, 88, 62, 95, 76].map((height, index) => (
                  <span
                    key={height + index}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-violet/45 via-aqua/70 to-mint"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </DemoFrame>

          <DemoFrame title={demos[4].title} description={demos[4].description} icon={demos[4].icon}>
            <div className="rounded-lg border border-white/10 bg-white/6 p-4">
              <div className="mb-4 flex items-center gap-3 rounded-lg border border-white/10 bg-ink/45 px-3 py-2 text-white/58">
                <Search className="h-4 w-4" />
                Buscar por nombre o categoría
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                {catalogCategories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${
                      category === item ? "border-aqua bg-aqua text-ink" : "border-white/10 bg-ink/45 text-white/64 hover:border-aqua/45"
                    }`}
                  >
                    <Filter className="h-3.5 w-3.5" />
                    {item}
                  </button>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {visibleProducts.map((product) => (
                  <div key={product.name} className="rounded-lg border border-white/10 bg-ink/45 p-3">
                    <div className="mb-3 h-20 rounded-lg bg-[linear-gradient(135deg,rgba(62,230,255,0.28),rgba(99,246,167,0.12))]" />
                    <p className="font-medium text-white">{product.name}</p>
                    <p className="text-sm text-white/50">{product.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </DemoFrame>

          <DemoFrame title={demos[5].title} description={demos[5].description} icon={demos[5].icon}>
            <div className="rounded-lg border border-white/10 bg-ink/50 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/58">Gestión interna</p>
                  <h3 className="text-xl font-semibold text-white">Tareas del equipo</h3>
                </div>
                <span className="rounded-lg bg-violet/18 px-3 py-2 text-sm font-semibold text-violet">{doneTasks.length}/{tasks.length}</span>
              </div>
              <div className="space-y-3">
                {tasks.map((task) => {
                  const done = doneTasks.includes(task);
                  return (
                    <button
                      key={task}
                      type="button"
                      onClick={() => toggleTask(task)}
                      className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/6 p-3 text-left transition hover:border-aqua/45"
                    >
                      <span className={done ? "text-white/45 line-through" : "text-white"}>{task}</span>
                      <span className={`flex h-7 w-7 items-center justify-center rounded-lg ${done ? "bg-mint text-ink" : "bg-white/10 text-white/42"}`}>
                        <Check className="h-4 w-4" />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </DemoFrame>
        </div>
      </div>
    </section>
  );
}

type DemoFrameProps = {
  title: string;
  description: string;
  icon: (typeof demos)[number]["icon"];
  children: React.ReactNode;
};

function DemoFrame({ title, description, icon: Icon, children }: DemoFrameProps) {
  return (
    <article className="group rounded-lg border border-white/10 bg-white/7 p-4 shadow-soft backdrop-blur-xl transition hover:border-aqua/35">
      <div className="mb-5 flex items-start gap-4">
        <div className="rounded-lg border border-aqua/24 bg-aqua/12 p-3 text-aqua">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>
        </div>
      </div>
      {children}
    </article>
  );
}
