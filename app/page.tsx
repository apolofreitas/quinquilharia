import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function Home() {
  const wishes = [
    { name: "asefd 1", uri: "sdkfjsdkf" },
    { name: "asefd 2", uri: "sdkfjsdkf" },
    { name: "asefd 3", uri: "sdkfjsdkf" },
    { name: "asefd 4", uri: "sdkfjsdkf" },
  ];

  const wishesFromDb = await db.query.wishes.findMany();

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center w-full max-w-screen-md">
        <ThemeToggle />
        <pre>{JSON.stringify(wishesFromDb, null, 2)}</pre>
        {wishes.map((wish) => (
          <div className="bg-card border border-border">
            <p>{wish.name}</p>
            <Button>oiii</Button>
          </div>
        ))}
      </div>
    </main>
  );
}
