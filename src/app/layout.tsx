import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Landing Page Model 1",
  description: "Landing page model 1 sample",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="flex flex-col w-screen h-screen">
        {children}
      </body>
    </html>
  );
}
