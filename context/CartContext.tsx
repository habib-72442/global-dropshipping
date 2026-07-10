"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";


type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};



type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};



const CartContext = createContext<CartContextType | undefined>(
  undefined
);



export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {


  const [cart, setCart] = useState<CartItem[]>([]);



  // Load cart

  useEffect(() => {

    const savedCart = localStorage.getItem("cart");


    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

  }, []);





  // Save cart

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);







  const addToCart = (item: CartItem) => {


    setCart((prev) => {

      const existingItem = prev.find(
        (p) => p.id === item.id
      );


      if (existingItem) {

        return prev.map((p) =>
          p.id === item.id
            ? {
                ...p,
                quantity: p.quantity + 1,
              }
            : p
        );

      }


      return [
        ...prev,
        item
      ];

    });

  };







  const increaseQuantity = (id: number) => {


    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );


  };








  const decreaseQuantity = (id: number) => {


    setCart((prev) =>

      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )

        .filter(
          (item) => item.quantity > 0
        )

    );


  };








  const removeFromCart = (id: number) => {


    setCart((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );


  };







  const clearCart = () => {

    setCart([]);

    localStorage.removeItem("cart");

  };







  return (

    <CartContext.Provider

      value={{

        cart,

        addToCart,

        increaseQuantity,

        decreaseQuantity,

        removeFromCart,

        clearCart,

      }}

    >

      {children}

    </CartContext.Provider>

  );


}







export function useCart() {


  const context = useContext(CartContext);



  if (!context) {

    throw new Error(
      "useCart must be used inside CartProvider"
    );

  }



  return context;


}