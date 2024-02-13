import { Wish } from "@/services/wishes";
import { formatDate } from "@/utils/date";
import Link from "next/link";

interface WishListProps {
  wishList: Wish[];
}

export default function WishList({ wishList: wishList }: WishListProps) {
  return (
    <div className="flex flex-col gap-2">
      {wishList.map((wish) => (
        <div
          key={wish.id}
          className="bg-card flex flex-col border rounded-lg px-3 py-2"
        >
          <div>
            <p className="font-medium">{wish.title}</p>
            <p className="text-secondary-foreground pl-4 text-sm">
              {wish.description}
            </p>
            <p className="text-secondary-foreground pl-4 text-sm">
              {formatDate(wish.createdAt)}
            </p>
          </div>
          <Link href={wish.uri}>{wish.uri}</Link>
        </div>
      ))}
    </div>
  );
}
