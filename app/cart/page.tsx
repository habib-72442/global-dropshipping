"use client";

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
    <main className="min-h-screen bg-gray-100 py-16">

      <div className="mx-auto max-w-6xl px-6">


        <h1 className="mb-10 text-4xl font-extrabold text-gray-900">
          Shopping Cart
        </h1>



        <div className="rounded-3xl bg-white p-8 shadow-xl">


          {cart.length === 0 ? (

            <p className="py-10 text-center text-lg text-gray-500">
              🛒 Your cart is empty.
            </p>


          ) : (

            <>


              <div className="space-y-5">


                {cart.map((item) => (


                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-2xl border bg-gray-50 p-5 shadow-sm"
                  >



                    <div className="flex items-center gap-5">



                      <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-white text-5xl shadow">
                        {item.image}
                      </div>




                      <div>


                        <h2 className="text-xl font-bold text-gray-900">
                          {item.name}
                        </h2>



                        <p className="mt-1 text-gray-600">
                          ${item.price} each
                        </p>




                        <div className="mt-4 flex items-center overflow-hidden rounded-xl border bg-white shadow-sm">


                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                            className="flex h-10 w-10 items-center justify-center text-xl font-bold text-gray-700 hover:bg-gray-100"
                          >
                            −
                          </button>




                          <span className="flex h-10 w-12 items-center justify-center border-x text-lg font-bold">
                            {item.quantity}
                          </span>




                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                            className="flex h-10 w-10 items-center justify-center bg-black text-xl font-bold text-white hover:bg-gray-800"
                          >
                            +
                          </button>



                        </div>



                      </div>



                    </div>





                    <button
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                      className="rounded-xl bg-red-500 px-5 py-3 font-semibold text-white shadow hover:bg-red-600"
                    >
                      Remove
                    </button>



                  </div>



                ))}



              </div>





              <div className="mt-8 rounded-2xl bg-black p-6 text-white">


                <div className="flex items-center justify-between">


                  <span className="text-xl font-semibold">
                    Total
                  </span>



                  <span className="text-3xl font-extrabold">
                    ${total}
                  </span>



                </div>




                <Link
                  href="/checkout"
                  className="mt-6 block rounded-xl bg-white py-4 text-center text-lg font-bold text-black hover:bg-gray-200"
                >
                  Proceed to Checkout →
                </Link>




              </div>




            </>


          )}



        </div>



      </div>



    </main>
  );
}