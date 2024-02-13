import { cn } from "@/utils/classes";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "Quinquilharia",
  description: "A wishlist social plataform.",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        vaul-drawer-wrapper=""
        className={cn("font-sans antialiased", inter.variable)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
