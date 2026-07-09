import Link from "next/link";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-10 text-center text-4xl font-bold">
          Featured Products
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl border p-6 shadow transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-center text-7xl">
                {product.image}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {product.name}
              </h3>

              <p className="mt-3 text-3xl font-bold text-blue-700">
                ${product.price}
              </p>

              <p className="mt-2 text-yellow-500">
                {"⭐".repeat(product.rating)}
              </p>

              <Link
                href={`/products/${product.id}`}
                className="mt-6 block rounded-lg bg-blue-700 py-3 text-center text-white hover:bg-blue-800"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}