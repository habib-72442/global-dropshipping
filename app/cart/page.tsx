"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  console.log("Cart Page:", cart);

  return (
    <main className="min-h-screen bg-gray-100 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="mb-8 text-4xl font-bold">
          Shopping Cart
        </h1>

        <div className="rounded-2xl bg-white p-10 shadow">
          {cart.length === 0 ? (
            <p className="text-center text-lg text-gray-500">
              🛒 Your cart is empty.
            </p>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">
                      {item.image}
                    </div>

                    <div>
                      <h2 className="text-xl font-bold">
                        {item.name}
                      </h2>

                      <p className="text-gray-600">
                        ${item.price}
                      </p>

                      <p className="text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}