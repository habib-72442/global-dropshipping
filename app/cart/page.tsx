"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-10 text-4xl font-extrabold text-gray-900">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="rounded-2xl bg-white p-16 text-center shadow">
            <p className="text-lg text-gray-500">
              🛒 Your cart is empty.
            </p>
            <Link
              href="/products"
              className="mt-6 inline-block rounded-xl bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-3">
            {/* ✅ Cart Items */}
            <div className="space-y-6 lg:col-span-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 rounded-2xl bg-white p-6 shadow-sm"
                >
                  {/* ✅ Product Image */}
                  <div className="relative h-28 w-28 overflow-hidden rounded-xl bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* ✅ Product Info */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.name}
                      </h2>
                      <p className="mt-1 text-gray-600">
                        ${item.price} each
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="mt-4 flex items-center gap-4">
                      <div className="flex items-center overflow-hidden rounded-lg border">
                        <button
                          onClick={() =>
                            decreaseQuantity(item.id)
                          }
                          className="px-3 py-1 text-lg hover:bg-gray-100"
                        >
                          −
                        </button>

                        <span className="px-4 font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(item.id)
                          }
                          className="px-3 py-1 text-lg hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() =>
                          removeFromCart(item.id)
                        }
                        className="text-sm font-medium text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* ✅ Item Total */}
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Order Summary */}
            <div className="h-fit rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>

              <div className="mt-2 flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <div className="mt-6 border-t pt-6 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>

              <Link
                href="/checkout"
                className="mt-6 block rounded-xl bg-black py-4 text-center font-semibold text-white hover:bg-gray-800"
              >
                Proceed to Checkout →
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}