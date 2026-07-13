"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

/* ============================================================
   AddToCartButton — Global Drop Shipping
   - alert() hata kar premium toast + button feedback
   - Shared design system: .btn .btn-primary
   - icon cart → checkmark morph with green success state
   - Fixed-position toast (bottom-right) with "Go to cart" link
   - Fully accessible (aria-live, keyboard friendly)
   ============================================================ */

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
  /** "full" = stretch to parent width (e.g. product cards) */
  fullWidth?: boolean;
  /** Extra classes from parent if needed */
  className?: string;
};

export default function AddToCartButton({
  product,
  fullWidth = false,
  className = "",
}: Props) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    // Cart mein add (context handles quantity merge)
    addToCart({ ...product, quantity: 1 });

    // Visual feedback
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      {/* ---------------- Button ---------------- */}
      <button
        onClick={handleClick}
        aria-label={`Add ${product.name} to cart`}
        className={`btn btn-primary relative overflow-hidden transition-colors duration-300
          ${fullWidth ? "w-full" : ""}
          ${
            added
              ? "!bg-green-600 hover:!bg-green-700 focus-visible:!ring-green-500"
              : ""
          }
          ${className}`}
      >
        {/* shine sweep on click */}
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

        {added ? (
          <span className="flex items-center gap-2">
            <CheckIcon className="h-5 w-5" />
            Added to Cart
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <CartIcon className="h-5 w-5" />
            Add to Cart
          </span>
        )}
      </button>

      {/* ---------------- Toast ---------------- */}
      {added && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-[60] max-w-[calc(100vw-2.5rem)] animate-fade-down sm:bottom-6 sm:right-6"
        >
          <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 pr-4 shadow-[var(--shadow-float)]">
            {/* Product thumb */}
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-2xl">
              {product.image}
            </span>

            <div className="min-w-0">
              <p className="text-xs font-medium text-green-600">
                ✓ Added to cart
              </p>
              <p className="truncate text-sm font-semibold text-gray-900">
                {product.name}
              </p>
            </div>

            <Link
              href="/cart"
              className="ml-1 shrink-0 rounded-lg bg-brand-50 px-3 py-2 text-xs font-bold text-brand-700 transition hover:bg-brand-100"
            >
              View
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

/* ============================================================
   Icons (inline SVG — no external dependency)
   ============================================================ */
type IconProps = { className?: string };

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

function CheckIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
