/* ============================================================
   Product data — Global Drop Shipping
   image: ab real photo URLs (Unsplash) — emojis nahi
   ============================================================ */

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  rating: number;
  image: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89,
    category: "Electronics",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80&auto=format",
    description:
      "High-quality wireless headphones with active noise cancellation and 30-hour battery life.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 120,
    category: "Electronics",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&auto=format",
    description:
      "Track your fitness, heart rate and notifications — stay connected all day.",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 45,
    category: "Accessories",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80&auto=format",
    description:
      "Ergonomic gaming mouse with customizable RGB lighting and 7 programmable buttons.",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 75,
    category: "Electronics",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80&auto=format",
    description:
      "Portable waterproof speaker with powerful 360° bass and 20-hour playtime.",
  },
  {
    id: 5,
    name: "Laptop Backpack",
    price: 60,
    category: "Bags",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80&auto=format",
    description:
      "Water-resistant backpack with padded laptop sleeve and anti-theft pockets.",
  },
  {
    id: 6,
    name: "Running Shoes",
    price: 99,
    category: "Fashion",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format",
    description:
      "Lightweight, breathable running shoes with cushioned soles for everyday comfort.",
  },
];
