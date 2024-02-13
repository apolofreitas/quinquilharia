import { Header } from "@/components/root-layout/header";
import { ComponentProps } from "react";

export default function RootLayout({
  children,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={"flex-grow w-full p-4 max-w-screen-lg mx-auto"}>
        <div {...props}>{children}</div>
      </main>
    </div>
  );
}
