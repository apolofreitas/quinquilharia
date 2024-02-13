import { Header } from "@/components/app-layout/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/utils/classes";
import { ComponentProps } from "react";

export default function AppLayout({
  children,
  className,
  ...props
}: ComponentProps<"main">) {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen w-screen overflow-hidden">
      <Header />
      <ScrollArea>
        <main
          className={cn("w-full h-full p-4 max-w-screen-lg mx-auto", className)}
          {...props}
        >
          {children}
        </main>
      </ScrollArea>
    </div>
  );
}
