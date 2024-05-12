import React, { createContext, useState } from 'react';

// Create a context object
const Cart  = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Cart.Provider value={{ open, setOpen }}>
      {children}
    </Cart.Provider>
  );
};

export default Cart;