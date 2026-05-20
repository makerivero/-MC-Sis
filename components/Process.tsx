import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/lib/data";

const stepStyles = [
  "bg-amber text-ink",
  "bg-coral text-white",
  "bg-orchid text-white",
  "bg-lime text-ink",
  "bg-steel text-white",
  "bg-rose text-white"
];

export function Process() {
  return (
    <section id="proceso" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Proceso de trabajo"
          title="De la idea publicada a una web lista para compartir"
          description="Un recorrido simple, ordenado y con entregables claros para que sepas en qué etapa está tu proyecto."
          align="center"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step} className="rounded-lg border border-white/10 bg-white/7 p-5 transition hover:-translate-y-1 hover:bg-white/10">
              <span className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold ${stepStyles[index]}`}>
                {index + 1}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
