import { ArrowUpRight, CircleDollarSign, LineChart, ShoppingCart, UsersRound } from "lucide-react";
import { dashboardRows, heroMetrics, trustBadges } from "@/lib/data";

export function HeroMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -left-4 top-14 h-28 w-28 rounded-full bg-mint/18 blur-3xl" />
      <div className="absolute -right-8 bottom-16 h-36 w-36 rounded-full bg-violet/22 blur-3xl" />

      <div className="relative overflow-hidden rounded-lg border border-white/14 bg-white/8 p-4 shadow-soft backdrop-blur-2xl">
        <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="text-sm font-medium text-white/60">Panel MC-Sis</p>
            <h3 className="mt-1 text-xl font-semibold text-white">Proyectos activos</h3>
          </div>
          <div className="rounded-lg border border-aqua/30 bg-aqua/12 p-3 text-aqua">
            <LineChart className="h-5 w-5" />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: "Ventas", value: "$1.28M", icon: CircleDollarSign, color: "text-mint" },
            { label: "Pedidos", value: "38", icon: ShoppingCart, color: "text-aqua" },
            { label: "Clientes", value: "214", icon: UsersRound, color: "text-coral" }
          ].map((metric) => (
            <div key={metric.label} className="rounded-lg border border-white/10 bg-ink/55 p-4">
              <metric.icon className={`mb-4 h-5 w-5 ${metric.color}`} />
              <p className="text-2xl font-semibold text-white">{metric.value}</p>
              <p className="mt-1 text-xs text-white/52">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-lg border border-white/10 bg-ink/55 p-4">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-medium text-white">Embudo comercial</p>
            <span className="rounded-lg bg-mint/12 px-2.5 py-1 text-xs font-semibold text-mint">+24%</span>
          </div>
          <div className="flex h-28 items-end gap-2">
            {[38, 54, 42, 78, 68, 92, 84, 100].map((height, index) => (
              <span
                key={height + index}
                className="flex-1 rounded-t-md bg-gradient-to-t from-aqua/35 via-aqua/75 to-mint"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {dashboardRows.map((row) => (
            <div key={row.label} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/6 px-4 py-3">
              <div>
                <p className="font-medium text-white">{row.label}</p>
                <p className="text-xs text-white/50">{row.status}</p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-aqua">
                {row.amount}
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {heroMetrics.map((metric) => (
          <div key={metric.label} className="rounded-lg border border-white/10 bg-white/7 p-3 text-center backdrop-blur">
            <p className="text-lg font-semibold text-white">{metric.value}</p>
            <p className="mt-1 text-xs text-white/48">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {trustBadges.map((badge) => (
          <span key={badge.label} className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/7 px-3 py-2 text-xs text-white/70">
            <badge.icon className="h-4 w-4 text-mint" />
            {badge.label}
          </span>
        ))}
      </div>
    </div>
  );
}
