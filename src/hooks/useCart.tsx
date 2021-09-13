import { createContext, useState, useContext, ReactNode } from "react";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: number;
  addCart: () => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }:CartProviderProps) {
  const [cart, setCart] = useState(0);

  function addCart() {
    setCart(cart + 1);
  }

  return (
    <CartContext.Provider value={{ cart, addCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  return useContext(CartContext);
}