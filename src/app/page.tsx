import NewWishButton from "@/components/home/new-wish-button";
import WishList from "@/components/home/wish-list";
import RootLayout from "@/components/root-layout";
import { getAllWishes } from "@/services/wishes";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default async function Home() {
  const wishList = await getAllWishes();

  return (
    <RootLayout className="flex flex-col gap-2">
      <NewWishButton className="self-end" />
      <WishList wishList={wishList} />
    </RootLayout>
  );
}
