import { ThemeToggle } from "@/components/root-layout/header/theme-toggle";
import { cn } from "@/utils/classes";
import { ComponentProps } from "react";

export function Header({ className, ...props }: ComponentProps<"header">) {
  return (
    <header
      className={cn(
        "h-14 px-4 sticky top-0 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
      {...props}
    >
      <div className="flex items-center h-full max-w-screen-lg mx-auto">
        <p>quinquilharia</p>
        <div className="flex-1" />
        <ThemeToggle />
      </div>
    </header>
  );
}
