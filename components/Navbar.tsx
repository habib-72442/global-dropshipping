"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";


export default function Navbar() {

  const { cart } = useCart();


  return (

    <nav className="bg-black text-white shadow-lg">


      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


        <Link
          href="/"
          className="text-2xl font-bold"
        >
          GlobalDropshipping
        </Link>



        <div className="flex items-center gap-6 text-sm font-medium">


          <Link
            href="/"
            className="hover:text-gray-300"
          >
            Home
          </Link>



          <Link
            href="/cart"
            className="hover:text-gray-300"
          >
            Cart ({cart.length})
          </Link>




          <Link
            href="/orders"
            className="hover:text-gray-300"
          >
            My Orders
          </Link>



        </div>


      </div>


    </nav>

  );

}