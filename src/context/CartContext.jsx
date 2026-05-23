import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  function addToCart(product) {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find(
        (item) => item.title === product.title,
      );

      if (existingProduct) {
        return prevItems.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevItems, { ...product, quantity: 1 }];
    });
  }

  console.log(cartItems);

  function removeFromCart(indexToRemove) {
    setCartItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove),
    );
  }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
