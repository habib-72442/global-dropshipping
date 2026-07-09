import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">

        <div>
          <h2 className="text-2xl font-bold">
            GlobalDropshipping
          </h2>

          <p className="mt-4 text-gray-400">
            Your trusted global eCommerce partner.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Quick Links
          </h3>

          <div className="flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Support
          </h3>

          <div className="flex flex-col gap-2">
            <p>Email: support@globaldropshipping.com</p>
            <p>Phone: +92 300 1234567</p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">
            Follow Us
          </h3>

          <div className="flex gap-4 text-2xl">
            <span>📘</span>
            <span>📷</span>
            <span>🐦</span>
            <span>▶️</span>
          </div>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400">
        © 2026 GlobalDropshipping. All rights reserved.
      </div>
    </footer>
  );
}