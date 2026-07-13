import Link from "next/link";
import { products } from "@/data/products";
import AddToCartButton from "@/components/cart/AddToCartButton";

/* ============================================================
   FeaturedProducts — Global Drop Shipping
   - Real product images (Unsplash)
   - Shared design system: .section .container-x .card .badge
   - Direct "Add to Cart" on each card (uses AddToCartButton toast)
   - Fully responsive: 1 / 2 / 3 / 4 columns
   ============================================================ */

export default function FeaturedProducts() {
  return (
    <section className="section bg-gray-50">
      <div className="container-x">
        {/* ---------- Section header ---------- */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="badge bg-brand-50 text-brand-700">
            ⭐ Trending Now
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Products
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Handpicked best-sellers loved by customers worldwide.
          </p>
        </div>

        {/* ---------- Product grid ---------- */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="card group flex flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-[var(--shadow-card-hover)]"
            >
              {/* Image */}
              <Link
                href={`/products/${product.id}`}
                className="relative block aspect-square overflow-hidden bg-brand-50"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category badge */}
                <span className="badge absolute left-3 top-3 bg-white/90 text-brand-700 backdrop-blur">
                  {product.category}
                </span>
              </Link>

              {/* Body */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-gray-900">
                  <Link
                    href={`/products/${product.id}`}
                    className="transition hover:text-brand-700"
                  >
                    {product.name}
                  </Link>
                </h3>

                {/* Rating */}
                <div className="mt-1.5 flex items-center gap-1.5">
                  <span className="text-sm text-accent-500">
                    {"★".repeat(product.rating)}
                    <span className="text-gray-300">
                      {"★".repeat(5 - product.rating)}
                    </span>
                  </span>
                  <span className="text-xs text-gray-400">
                    ({product.rating}.0)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-brand-600">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ${Math.round(product.price * 1.4)}
                  </span>
                </div>

                {/* Actions */}
                <div className="mt-auto pt-5">
                  <AddToCartButton product={product} fullWidth />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
