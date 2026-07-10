"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="bg-blue-700 text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold">
          GlobalDropshipping
        </Link>

        <nav className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="flex gap-4 items-center">
          <button>Login</button>

          <Link
            href="/cart"
            className="rounded-lg bg-white px-4 py-2 text-blue-700 font-semibold hover:bg-gray-100"
          >
            🛒 Cart ({totalItems})
          </Link>
        </div>
      </div>
    </header>
  );
}