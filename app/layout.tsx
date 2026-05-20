import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MC-Sis | Páginas web, tiendas online y apps web",
  description: "Landing comercial de MC-Sis para servicios de creación de páginas web, tiendas online y aplicaciones web.",
  openGraph: {
    title: "MC-Sis | Desarrollo web moderno",
    description: "Creamos sitios modernos, rápidos y listos para usar para comercios, emprendedores, profesionales y marcas.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
