import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import AddToCartButton from "@/components/cart/AddToCartButton";

export default function ProductsPage() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container-x">
        <h1 className="mb-10 text-center text-3xl font-extrabold text-gray-900">
          All Products
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* ✅ Optimized Image */}
              <Link
                href={`/products/${product.id}`}
                className="relative block aspect-square overflow-hidden bg-gray-100"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </Link>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-gray-900">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1">
                    <span className="text-sm font-bold text-yellow-500">
                      {"★".repeat(product.rating)}
                    </span>
                    <span className="text-sm text-gray-300">
                      {"★".repeat(5 - product.rating)}
                    </span>
                  </div>

                  <span className="text-xs text-gray-600">
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