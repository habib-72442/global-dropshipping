"use client";

import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-10 text-4xl font-extrabold">
          Checkout
        </h1>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Billing Form */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-xl font-bold">
              Billing Details
            </h2>

            <div className="space-y-4">
              <input className="input" placeholder="Full Name" />
              <input className="input" placeholder="Email Address" />
              <input className="input" placeholder="Address" />
              <input className="input" placeholder="City" />
              <input className="input" placeholder="Postal Code" />
            </div>
          </div>

          {/* Order Summary */}
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-xl font-bold">
              Order Summary
            </h2>

            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-gray-600"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>
                    ${item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-6 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total}</span>
            </div>

            <button className="mt-6 w-full rounded-xl bg-black py-4 text-white font-semibold hover:bg-gray-800">
              Pay Now 💳
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}