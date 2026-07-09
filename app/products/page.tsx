import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-10 text-center text-5xl font-bold">
          Our Products
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-center text-7xl">
                {product.image}
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                {product.name}
              </h2>

              <p className="mt-2 text-gray-600">
                {product.category}
              </p>

              <p className="mt-3 text-yellow-500">
                {"⭐".repeat(product.rating)}
              </p>

              <p className="mt-3 text-3xl font-bold text-blue-700">
                ${product.price}
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
    </main>
  );
}