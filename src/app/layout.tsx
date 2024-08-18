import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    
    default: "Next. Js Tutorial",
    template: "%s | ditoaryap",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-2 font-bold text-xl">
        <header className="bg-slate-400 p-[1rem]">
          <p>Header</p>
        </header>
        {children}
        <footer className="bg-red-100 p-4">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
