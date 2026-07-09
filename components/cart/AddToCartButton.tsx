"use client";

import { useCart } from "@/context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
};

export default function AddToCartButton({ product }: Props) {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart({
      ...product,
      quantity: 1,
    });

    alert(`${product.name} added to cart!`);
  };

  return (
    <button
      onClick={handleClick}
      className="mt-8 rounded-lg bg-blue-700 px-8 py-3 text-white hover:bg-blue-800"
    >
      Add to Cart
    </button>
  );
}