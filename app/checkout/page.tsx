"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";


export default function CheckoutPage() {

  const router = useRouter();

  const {
    cart,
    clearCart,
  } = useCart();



  const [customer, setCustomer] = useState({

    name: "",
    email: "",
    phone: "",
    address: "",

  });





  const total = cart.reduce(

    (sum, item) =>
      sum + item.price * item.quantity,

    0

  );







  const handleChange = (

    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >

  ) => {


    setCustomer({

      ...customer,

      [e.target.name]: e.target.value,

    });


  };








  const handleSubmit = () => {


    if (
      !customer.name ||
      !customer.email ||
      !customer.phone ||
      !customer.address
    ) {

      alert("Please fill all details");

      return;

    }





    const order = {

      customer,

      items: cart,

      total,

      date: new Date().toISOString(),

    };





    console.log("Order Created:", order);





    clearCart();





    router.push("/order-success");


  };







  return (

    <main className="min-h-screen bg-gray-100 py-16">


      <div className="mx-auto max-w-6xl px-6">



        <h1 className="mb-10 text-4xl font-extrabold text-gray-900">

          Checkout

        </h1>





        <div className="grid gap-8 md:grid-cols-2">





          <div className="rounded-3xl bg-white p-8 shadow-lg">


            <h2 className="mb-6 text-2xl font-bold">

              Customer Information

            </h2>





            <div className="space-y-5">



              <input

                name="name"

                value={customer.name}

                onChange={handleChange}

                placeholder="Full Name"

                className="w-full rounded-xl border p-4 outline-none"

              />





              <input

                name="email"

                value={customer.email}

                onChange={handleChange}

                placeholder="Email Address"

                className="w-full rounded-xl border p-4 outline-none"

              />





              <input

                name="phone"

                value={customer.phone}

                onChange={handleChange}

                placeholder="Phone Number"

                className="w-full rounded-xl border p-4 outline-none"

              />





              <textarea

                name="address"

                value={customer.address}

                onChange={handleChange}

                placeholder="Shipping Address"

                className="h-32 w-full rounded-xl border p-4 outline-none"

              />



            </div>



          </div>








          <div className="rounded-3xl bg-white p-8 shadow-lg">



            <h2 className="mb-6 text-2xl font-bold">

              Order Summary

            </h2>





            {cart.map((item) => (


              <div

                key={item.id}

                className="mb-4 flex justify-between rounded-xl bg-gray-50 p-4"

              >

                <span>

                  {item.name} × {item.quantity}

                </span>



                <span className="font-bold">

                  ${item.price * item.quantity}

                </span>



              </div>



            ))}





            <div className="mt-6 flex justify-between rounded-xl bg-black p-5 text-white">


              <span className="text-xl">

                Total

              </span>



              <span className="text-2xl font-bold">

                ${total}

              </span>



            </div>







            <button

              onClick={handleSubmit}

              className="mt-6 w-full rounded-xl bg-black py-4 text-lg font-bold text-white hover:bg-gray-800"

            >

              Place Order

            </button>




          </div>





        </div>




      </div>



    </main>

  );

}