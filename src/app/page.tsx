import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function Home() {
  const wishes = await db.query.wishes.findMany();

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center w-full max-w-screen-md">
        <ThemeToggle />
        <pre>{JSON.stringify(wishes, null, 2)}</pre>
      </div>
    </main>
  );
}
