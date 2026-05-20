import { contactEmail } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/58 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">MC-Sis</p>
          <p className="mt-1">Desarrollo de páginas web, tiendas online y apps web</p>
        </div>
        <div className="flex flex-col gap-2 md:items-end">
          <a href={`mailto:${contactEmail}`} className="transition hover:text-amber">
            {contactEmail}
          </a>
          <p>{currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
