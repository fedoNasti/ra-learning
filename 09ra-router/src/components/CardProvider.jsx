import { useState, useContext, createContext } from 'react';
import { CardContext } from './Context';

export function CardProvider({ children }) {
  const [items, setItems] = useState([]);
  const addItem = (product) => setItems([...items, product]);
  const removeItem = (id) => setItems(items.filter(item => item.id !== id));

  return (
    <CardContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CardContext.Provider>
  );
}