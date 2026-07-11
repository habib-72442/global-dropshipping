"use client";

import { useEffect, useState } from "react";
import Link from "next/link";


type OrderItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};


type Order = {
  id: number;
  customer: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  items: OrderItem[];
  total: number;
  status: string;
  date: string;
};



export default function OrdersPage() {

  const [orders, setOrders] = useState<Order[]>([]);



  useEffect(() => {

    const savedOrders = localStorage.getItem("orders");

    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }

  }, []);





  return (

    <main className="min-h-screen bg-gray-100 py-16">


      <div className="mx-auto max-w-6xl px-6">


        {/* Page Header */}

        <div className="mb-10 rounded-3xl bg-black p-10 text-white shadow-xl">


          <h1 className="text-4xl font-bold">
            My Orders 📦
          </h1>


          <p className="mt-3 text-gray-300">
            Track your purchases and order details.
          </p>


        </div>





        {orders.length === 0 ? (


          <div className="rounded-3xl bg-white p-10 text-center shadow-xl">


            <div className="text-6xl">
              📦
            </div>


            <h2 className="mt-5 text-2xl font-semibold">
              No Orders Found
            </h2>


            <Link
              href="/"
              className="mt-6 inline-block rounded-xl bg-black px-8 py-3 font-semibold text-white"
            >
              Start Shopping
            </Link>


          </div>



        ) : (



          <div className="space-y-8">



            {orders.map((order) => (



              <div
                key={order.id}
                className="rounded-3xl bg-white p-8 shadow-xl"
              >




                {/* Order Header */}


                <div className="flex flex-col justify-between gap-5 md:flex-row">


                  <div>


                    <h2 className="text-2xl font-bold text-gray-900">
                      Order #{order.id}
                    </h2>


                    <p className="mt-2 text-sm text-gray-500">
                      📅 {order.date}
                    </p>


                  </div>





                  <span className="w-fit rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">

                    🟡 {order.status}

                  </span>



                </div>







                <div className="mt-8 grid gap-6 md:grid-cols-2">





                  {/* Customer Details */}


                  <div className="rounded-2xl bg-gray-50 p-6">


                    <h3 className="mb-5 text-lg font-semibold text-gray-900">
                      Customer Details
                    </h3>


                    <div className="space-y-3 text-sm text-gray-700">


                      <p className="font-medium">
                        {order.customer.name}
                      </p>


                      <p>
                        📧 {order.customer.email}
                      </p>


                      <p>
                        📞 {order.customer.phone}
                      </p>


                      <p>
                        📍 {order.customer.address}
                      </p>


                    </div>


                  </div>









                  {/* Items */}


                  <div className="rounded-2xl bg-gray-50 p-6">


                    <h3 className="mb-5 text-lg font-semibold text-gray-900">
                      Items
                    </h3>




                    <div className="space-y-3">



                      {order.items.map((item) => (



                        <div
                          key={item.id}
                          className="flex items-center justify-between rounded-xl bg-gray-900 p-4"
                        >



                          <div>


                            <p className="text-base font-medium text-white">
                              {item.name} × {item.quantity}
                            </p>


                            <p className="mt-1 text-xs text-gray-300">
                              Quantity: {item.quantity}
                            </p>


                          </div>




                          <p className="text-lg font-semibold text-white">
                            ${item.price * item.quantity}
                          </p>




                        </div>



                      ))}



                    </div>



                  </div>





                </div>








                {/* Total */}


                <div className="mt-8 flex items-center justify-between rounded-2xl bg-black p-6 text-white">


                  <span className="text-lg font-medium">
                    Order Total
                  </span>



                  <span className="text-2xl font-bold">
                    ${order.total}
                  </span>



                </div>





              </div>



            ))}



          </div>



        )}



      </div>



    </main>

  );

}