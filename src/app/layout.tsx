import "@/styles/globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Gringo Media",
  description: "Crafting visual stories that captivate and connect.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-primary text-accent min-h-screen">
        {children}
      </body>
    </html>
  );
}