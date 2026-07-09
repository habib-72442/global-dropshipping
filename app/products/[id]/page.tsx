import AddToCartButton from "@/components/cart/AddToCartButton";
import { products } from "@/data/products";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-lg">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex items-center justify-center rounded-xl bg-gray-100 p-10 text-9xl">
            {product.image}
          </div>

          <div>
            <h1 className="text-4xl font-bold">{product.name}</h1>

            <p className="mt-4 text-xl text-yellow-500">
              {"⭐".repeat(product.rating)}
            </p>

            <p className="mt-4 text-3xl font-bold text-blue-700">
              ${product.price}
            </p>

            <p className="mt-4 text-lg text-gray-600">
              Category: {product.category}
            </p>

            <p className="mt-6 text-gray-600">
              {product.description}
            </p>

            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}