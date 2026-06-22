import { useState, useContext, createContext } from 'react';
import { CardContext } from './Context';

export function useCart() {
  return useContext(CardContext);
}