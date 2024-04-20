import { Heart, Search, ShoppingCart, UserRound } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="justify-between items-center flex p-5 mx-20 border-gray-950 border-b ">
      <Link href="/">
        <img src="/Logo.svg" alt="" />
      </Link>
      <ul className="flex gap-2">
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/men">Men</Link>
        </li>
        <li>
          <Link href="/women">Women</Link>
        </li>
        <li>
          <Link href="/combos">Combos</Link>
        </li>
        <li>
          <Link href="/joggers">Joggers</Link>
        </li>
      </ul>
      <div className="rounded-md flex bg-[#f6f6f6] p-2 gap-2">
        <Search />
        <input className="bg-[#f6f6f6]" type="text/" placeholder="Search" />
      </div>
      <div className="flex gap-4">
        <Link href="/layk">
          <Heart />
        </Link>
        <Link href="/contact">
          <UserRound />
        </Link>
        <Link href="/korzinka">
          <ShoppingCart />
        </Link>
      </div>
    </nav>
  );
}
