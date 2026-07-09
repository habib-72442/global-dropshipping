"use client";

import Link from "next/link";

export default function Header() {
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

        <div className="flex gap-4">
          <button>Login</button>
          <button>Cart 🛒</button>
        </div>
      </div>
    </header>
  );
}