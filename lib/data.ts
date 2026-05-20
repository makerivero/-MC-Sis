import {
  BadgeCheck,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  CalendarClock,
  ChefHat,
  CreditCard,
  FileText,
  LayoutDashboard,
  MonitorSmartphone,
  ReceiptText,
  Rocket,
  ShoppingBag,
  Stethoscope,
  Store,
  UsersRound,
  Wrench
} from "lucide-react";

export const contactEmail = "makerivero@gmail.com";

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portfolio", href: "#demos" },
  { label: "Planes", href: "#planes" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" }
];

export const heroMetrics = [
  { label: "Sitios rápidos", value: "98%" },
  { label: "Listos para mobile", value: "100%" },
  { label: "Precio inicial", value: "$250k" }
];

export const demos = [
  {
    id: "restaurant",
    title: "Restaurant y delivery",
    description: "Menú mobile, categorías, reserva rápida y pedido visual.",
    icon: ChefHat,
    accent: "from-orange/28 via-coral/20 to-amber/18",
    iconClass: "text-amber bg-orange/16 border-orange/28"
  },
  {
    id: "accounting",
    title: "Estudio contable",
    description: "Servicios, turnos, consulta guiada y documentos requeridos.",
    icon: ReceiptText,
    accent: "from-lime/20 via-mint/14 to-steel/18",
    iconClass: "text-lime bg-lime/12 border-lime/28"
  },
  {
    id: "health",
    title: "Obra social o salud",
    description: "Planes, cobertura, credencial visual y solicitud de turno.",
    icon: Stethoscope,
    accent: "from-rose/22 via-orchid/16 to-aqua/12",
    iconClass: "text-rose bg-rose/12 border-rose/30"
  },
  {
    id: "accessories",
    title: "Venta de accesorios",
    description: "Tienda mobile con variantes, carrito y combos destacados.",
    icon: ShoppingBag,
    accent: "from-violet/24 via-steel/16 to-coral/14",
    iconClass: "text-violet bg-violet/14 border-violet/32"
  },
  {
    id: "repair",
    title: "Servicio de reparación",
    description: "Ingreso de equipo, estado del trabajo y presupuesto visual.",
    icon: Wrench,
    accent: "from-amber/22 via-orange/16 to-mint/12",
    iconClass: "text-orange bg-orange/14 border-orange/30"
  },
  {
    id: "wholesale",
    title: "Mayorista con stock",
    description: "Inventario, alertas, pedidos y control interno de productos.",
    icon: LayoutDashboard,
    accent: "from-aqua/16 via-lime/16 to-amber/16",
    iconClass: "text-aqua bg-aqua/12 border-aqua/28"
  }
] as const;

export const plans = [
  {
    name: "Plan Inicial",
    price: "$250.000 ARS",
    badge: "Start",
    color: "text-lime",
    check: "text-lime",
    surface: "border-white/12 bg-white/6",
    description: "Sitio one page para presencia digital rápida.",
    features: ["One page", "Diseño personalizado", "Hasta 5 secciones", "Formulario de contacto", "Optimización SEO básica"]
  },
  {
    name: "Plan Presencia Plus",
    price: "$380.000 ARS",
    badge: "Plus",
    highlighted: true,
    color: "text-rose",
    check: "text-rose",
    surface: "border-rose/45 bg-rose/8",
    description: "Sitio completo para comercios y servicios.",
    features: ["Varias secciones", "Galería o catálogo simple", "Diseño responsive", "Integración con redes", "Optimización visual"]
  },
  {
    name: "Plan Tienda Básica",
    price: "$550.000 ARS",
    badge: "Shop",
    color: "text-amber",
    check: "text-amber",
    surface: "border-amber/28 bg-amber/8",
    description: "Catálogo con carrito visual y consulta de compra.",
    features: ["Catálogo de productos", "Carrito visual", "Categorías básicas", "Botón de compra o consulta", "Ideal para vender simple"]
  },
  {
    name: "Plan Tienda Pro",
    price: "$750.000 ARS",
    badge: "Grow",
    color: "text-coral",
    check: "text-coral",
    surface: "border-coral/30 bg-coral/8",
    description: "Tienda más completa para negocios con más productos.",
    features: ["Tienda más completa", "Categorías", "Carrito avanzado visual", "Panel simulado de pedidos", "Más productos y promociones"]
  },
  {
    name: "Plan App Web / Sistema",
    price: "desde $950.000 ARS",
    badge: "Scale",
    color: "text-orchid",
    check: "text-orchid",
    surface: "border-orchid/30 bg-orchid/8",
    description: "Web app o sistema interno para organizar procesos.",
    features: ["Dashboard administrativo", "Gestión de datos", "Funciones a medida", "Panel interno", "Soporte prioritario"]
  }
];

export const services = [
  { title: "Páginas institucionales", icon: BriefcaseBusiness, color: "text-rose bg-rose/10" },
  { title: "Landing pages", icon: Rocket, color: "text-lime bg-lime/10" },
  { title: "Tiendas online", icon: CreditCard, color: "text-amber bg-amber/10" },
  { title: "Catálogos digitales", icon: Boxes, color: "text-coral bg-coral/10" },
  { title: "Sistemas de turnos", icon: CalendarClock, color: "text-orchid bg-orchid/10" },
  { title: "Dashboards administrativos", icon: BarChart3, color: "text-aqua bg-aqua/10" },
  { title: "Apps web internas", icon: MonitorSmartphone, color: "text-steel bg-steel/10" },
  { title: "Sitios para profesionales", icon: FileText, color: "text-mint bg-mint/10" },
  { title: "Webs para comercios", icon: Store, color: "text-orange bg-orange/10" }
];

export const processSteps = [
  "Descubrimos",
  "Diseñamos",
  "Desarrollamos",
  "Lanzamos",
  "Acompañamos"
];

export const proofPoints = [
  { title: "Diseño que destaca", text: "Sitios únicos que reflejan tu marca y conectan con tu público." },
  { title: "Rendimiento real", text: "Velocidad, SEO y código optimizado para publicar sin vueltas." },
  { title: "Adaptado a todo", text: "Experiencia perfecta en celular, tablet y escritorio." }
];

export const dashboardRows = [
  { label: "Web responsive", status: "Mobile + desktop", amount: "$250k" },
  { label: "Tienda online", status: "Carrito + catálogo", amount: "$550k" },
  { label: "Web app interna", status: "Panel + procesos", amount: "$950k" }
];

export const trustBadges = [
  { label: "Vercel ready", icon: BadgeCheck },
  { label: "React + Next.js", icon: MonitorSmartphone },
  { label: "SEO base", icon: UsersRound }
];
