import { ArrowUpRight, CircleDollarSign, LineChart, ShoppingCart, UsersRound } from "lucide-react";
import { dashboardRows, heroMetrics, trustBadges } from "@/lib/data";

export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="relative overflow-hidden rounded-lg border border-white/14 bg-white/8 p-4 shadow-soft backdrop-blur-2xl">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-sm font-medium text-white/60">Panel MC-Sis</p>
            <h3 className="mt-1 text-xl font-semibold text-white">Proyectos con identidad propia</h3>
          </div>
          <div className="rounded-lg border border-amber/30 bg-amber/12 p-3 text-amber">
            <LineChart className="h-5 w-5" />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: "Ventas", value: "$1.28M", icon: CircleDollarSign, color: "text-amber", bg: "bg-amber/9" },
            { label: "Pedidos", value: "38", icon: ShoppingCart, color: "text-coral", bg: "bg-coral/9" },
            { label: "Clientes", value: "214", icon: UsersRound, color: "text-lime", bg: "bg-lime/9" }
          ].map((metric) => (
            <div key={metric.label} className={`rounded-lg border border-white/10 ${metric.bg} p-4`}>
              <metric.icon className={`mb-4 h-5 w-5 ${metric.color}`} />
              <p className="text-2xl font-semibold text-white">{metric.value}</p>
              <p className="mt-1 text-xs text-white/52">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-white/10 bg-ink/55 p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-medium text-white">Rubros en producción</p>
            <span className="rounded-lg bg-rose/12 px-2.5 py-1 text-xs font-semibold text-rose">+24%</span>
          </div>
          <div className="flex h-28 items-end gap-2">
            {[
              { height: 38, color: "from-amber to-orange" },
              { height: 66, color: "from-coral to-rose" },
              { height: 48, color: "from-lime to-mint" },
              { height: 88, color: "from-orchid to-violet" },
              { height: 62, color: "from-steel to-aqua" },
              { height: 95, color: "from-orange to-amber" },
              { height: 76, color: "from-rose to-orchid" }
            ].map((bar, index) => (
              <span key={bar.height + index} className={`flex-1 rounded-t-md bg-gradient-to-t ${bar.color}`} style={{ height: `${bar.height}%` }} />
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {dashboardRows.map((row, index) => (
            <div key={row.label} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/6 px-4 py-3">
              <div>
                <p className="font-medium text-white">{row.label}</p>
                <p className="text-xs text-white/50">{row.status}</p>
              </div>
              <div className={["text-amber", "text-coral", "text-orchid"][index] + " flex items-center gap-2 text-sm font-semibold"}>
                {row.amount}
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {heroMetrics.map((metric, index) => (
          <div key={metric.label} className="rounded-lg border border-white/10 bg-white/7 p-3 text-center backdrop-blur">
            <p className={["text-amber", "text-lime", "text-coral"][index] + " text-lg font-semibold"}>{metric.value}</p>
            <p className="mt-1 text-xs text-white/48">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {trustBadges.map((badge, index) => (
          <span key={badge.label} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/7 px-3 py-2 text-xs text-white/70">
            <badge.icon className={["text-amber", "text-orchid", "text-lime"][index] + " h-4 w-4"} />
            {badge.label}
          </span>
        ))}
      </div>
    </div>
  );
}
