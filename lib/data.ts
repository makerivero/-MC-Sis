import {
  BadgeCheck,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  CalendarClock,
  CreditCard,
  FileText,
  LayoutDashboard,
  MonitorSmartphone,
  PanelsTopLeft,
  Rocket,
  ShoppingBag,
  Store,
  UsersRound
} from "lucide-react";

export const contactEmail = "makerivero@gmail.com";

export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Demos", href: "#demos" },
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
    id: "local",
    title: "Landing para comercio local",
    description: "Portada, servicios, horarios y llamado directo a WhatsApp.",
    icon: Store
  },
  {
    id: "shop",
    title: "Tienda online simple",
    description: "Productos, precios, carrito visual y compras por consulta.",
    icon: ShoppingBag
  },
  {
    id: "booking",
    title: "Sistema de turnos",
    description: "Horarios disponibles, selección de turno y reserva visual.",
    icon: CalendarClock
  },
  {
    id: "dashboard",
    title: "Dashboard administrativo",
    description: "Ventas, pedidos, clientes y métricas para decidir mejor.",
    icon: LayoutDashboard
  },
  {
    id: "catalog",
    title: "Catálogo digital",
    description: "Categorías, filtros y productos sin tienda completa.",
    icon: Boxes
  },
  {
    id: "custom",
    title: "App web personalizada",
    description: "Paneles internos, tareas, estados y gestión a medida.",
    icon: PanelsTopLeft
  }
] as const;

export const plans = [
  {
    name: "Plan Inicial",
    price: "$250.000 ARS",
    badge: "Entrada",
    description: "Ideal para presentar un negocio con una web clara y profesional.",
    features: [
      "Landing page profesional",
      "Diseño responsive",
      "Secciones básicas",
      "Botón de contacto",
      "Ideal para presentar un negocio"
    ]
  },
  {
    name: "Plan Presencia Plus",
    price: "$380.000 ARS",
    badge: "Más pedido",
    highlighted: true,
    description: "Para comercios y servicios que necesitan más contenido y mejor presencia.",
    features: [
      "Página más completa",
      "Varias secciones",
      "Galería o catálogo simple",
      "Optimización visual",
      "Ideal para comercios y servicios"
    ]
  },
  {
    name: "Plan Tienda Básica",
    price: "$550.000 ARS",
    badge: "Venta simple",
    description: "Para mostrar productos y recibir consultas de compra sin sistema complejo.",
    features: [
      "Catálogo de productos",
      "Carrito visual",
      "Botón de compra o consulta",
      "Ideal para vender productos sin sistema complejo"
    ]
  },
  {
    name: "Plan Tienda Pro",
    price: "$750.000 ARS",
    badge: "Escalable",
    description: "Para negocios con más productos, categorías y una experiencia más completa.",
    features: [
      "Tienda más completa",
      "Categorías",
      "Carrito avanzado visual",
      "Panel simulado de pedidos",
      "Ideal para negocios con más productos"
    ]
  },
  {
    name: "Plan App Web / Sistema",
    price: "desde $950.000 ARS",
    badge: "A medida",
    description: "Para organizar procesos internos con un sistema web propio.",
    features: [
      "Dashboard administrativo",
      "Gestión de datos",
      "Funciones a medida",
      "Ideal para negocios que necesitan organizar procesos internos"
    ]
  }
];

export const services = [
  { title: "Páginas institucionales", icon: BriefcaseBusiness },
  { title: "Landing pages", icon: Rocket },
  { title: "Tiendas online", icon: CreditCard },
  { title: "Catálogos digitales", icon: Boxes },
  { title: "Sistemas de turnos", icon: CalendarClock },
  { title: "Dashboards administrativos", icon: BarChart3 },
  { title: "Apps web internas", icon: MonitorSmartphone },
  { title: "Sitios para profesionales", icon: FileText },
  { title: "Webs para comercios", icon: Store }
];

export const processSteps = [
  "Relevamos la idea",
  "Definimos estructura y funciones",
  "Creamos una primera versión visual",
  "Ajustamos diseño y contenido",
  "Publicamos en Vercel",
  "Dejamos lista la web para compartir"
];

export const proofPoints = [
  { title: "Enfoque comercial", text: "Cada sección se piensa para explicar, convencer y facilitar el contacto." },
  { title: "Diseño responsive", text: "La experiencia se adapta a celular, tablet y escritorio desde el inicio." },
  { title: "Base editable", text: "Textos, precios, planes y demos quedan ordenados para crecer sin rehacer todo." }
];

export const dashboardRows = [
  { label: "Landing comercio", status: "Publicado", amount: "$250k" },
  { label: "Tienda simple", status: "En ajuste", amount: "$550k" },
  { label: "Sistema turnos", status: "Diseño", amount: "$950k" }
];

export const trustBadges = [
  { label: "Vercel ready", icon: BadgeCheck },
  { label: "React + Next.js", icon: MonitorSmartphone },
  { label: "SEO base", icon: UsersRound }
];
