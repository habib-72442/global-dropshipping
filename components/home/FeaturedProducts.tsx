import Link from "next/link";
import { products } from "@/data/products";
import AddToCartButton from "@/components/cart/AddToCartButton";

export default function FeaturedProducts() {
  return (
    <section className="section bg-gray-50 py-16">
      <div className="container-x">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-block rounded-full bg-brand-50 px-4 py-1 text-sm font-semibold text-brand-700">
            ⭐ Trending Now
          </span>

          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Products
          </h2>

          <p className="mt-3 text-base text-gray-500">
            Handpicked best-sellers loved by customers worldwide.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <Link
                href={`/products/${product.id}`}
                className="relative block aspect-square overflow-hidden bg-gray-100"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand-700 shadow">
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

                {/* ⭐ Improved Rating */}
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 shadow-sm">
                    <span className="text-sm font-bold text-yellow-500">
                      {"★".repeat(product.rating)}
                    </span>
                    <span className="text-sm text-gray-300">
                      {"★".repeat(5 - product.rating)}
                    </span>
                  </div>

                  <span className="text-xs font-medium text-gray-600">
                    ({product.rating}.0)
                  </span>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-2xl font-extrabold text-brand-600">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ${Math.round(product.price * 1.4)}
                  </span>
                </div>

                {/* Button */}
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