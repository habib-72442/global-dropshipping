"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

/* ============================================================
   Header — Global Drop Shipping
   Uses the shared design system (globals.css): .container-x,
   .btn-light, .btn-primary, .btn-ghost, .badge, .input
   ============================================================ */

export default function Header() {
  const { cart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/orders", label: "Orders" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* ---------- Announcement bar ---------- */}
      <div className="bg-brand-950 text-center text-xs font-medium text-brand-100 sm:text-sm">
        <div className="container-x py-2">
          🚚 Free worldwide shipping on orders over <strong>$50</strong> —
          Shop now!
        </div>
      </div>

      {/* ---------- Main bar ---------- */}
      <div className="border-b border-gray-100 bg-white/90 shadow-[var(--shadow-card)] backdrop-blur-md">
        <div className="container-x flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5 transition hover:opacity-80"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm">
              <GlobeIcon className="h-5 w-5" />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-gray-900 sm:text-xl">
              Global{" "}
              <span className="text-brand-600">Drop Shipping</span>
            </span>
          </Link>

          {/* Desktop search */}
          <div className="hidden flex-1 max-w-md lg:block">
            <div className="relative">
              <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="input pl-10"
              />
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive(link.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-brand-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              className="btn-ghost hidden sm:inline-flex"
              aria-label="Account"
            >
              <UserIcon className="h-5 w-5" />
            </button>

            <Link
              href="/cart"
              className="btn-ghost relative"
              aria-label="Cart"
            >
              <CartIcon className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="badge absolute -right-1 -top-1 h-5 min-w-5 bg-brand-600 px-1 text-white animate-fade-down">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="btn-ghost md:hidden"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <CloseIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* ---------- Mobile menu ---------- */}
        {mobileOpen && (
          <div className="border-t border-gray-100 bg-white md:hidden animate-fade-down">
            <div className="container-x space-y-4 py-4">
              {/* Mobile search */}
              <div className="relative lg:hidden">
                <SearchIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="input pl-10"
                />
              </div>

              {/* Mobile nav links */}
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                      isActive(link.href)
                        ? "bg-brand-50 text-brand-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="/cart"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary w-full"
              >
                <CartIcon className="h-5 w-5" />
                Cart ({totalItems})
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ============================================================
   Icons (inline SVG — no external dependency, crisp at any size)
   ============================================================ */
type IconProps = { className?: string };

function GlobeIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function SearchIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function CartIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UserIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function MenuIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12h16M4 6h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
