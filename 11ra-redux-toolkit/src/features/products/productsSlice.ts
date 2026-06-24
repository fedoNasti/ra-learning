import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction }  from "@reduxjs/toolkit";

// Тип для продукта
export interface Product {
  id: string;
  name: string;
  price: number;
}

// Тип для товара в корзине (расширяет Product количеством)
export interface CartItem extends Product {
  quantity: number;
}

// Тип состояния
export interface ProductsState {
  products: Product[];
  cart: CartItem[];
  total: number;
  loading: boolean;
}

// Начальное состояние
const initialState: ProductsState = {
  products: [
    { id: '1', name: 'Apple', price: 20 },
    { id: '2', name: 'Banana', price: 3 },
    { id: '3', name: 'Orange', price: 10 },
  ],
  cart: [],
  total: 0,
  loading: false,
}

// Создаём слайс
const productsSlice = createSlice({
  name: 'products', // уникальное имя для этого слайса
  initialState, // начальное состояние
  reducers: { // объект с редьюсерами

    // Добавление в корзину
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      state.total += action.payload.price;
    },

    // Удаление из корзины
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );

      if(itemIndex !== -1) {
        const item = state.cart[itemIndex];
        state.total -= item.price * item.quantity;
        state.cart.splice(itemIndex, 1);
      }
    },

    // Обновление количества
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.cart.find((item) => item.id === action.payload.id);

      if(item) {
        const priceDiff = (action.payload.quantity - item.quantity) * item.price;
        item.quantity = action.payload.quantity;
        state.total += priceDiff;
      }
    },

    // Очистка корзины
    clearCart: (state) => {
      state.cart = [];
      state.total = 0;
    },

    // Добавление нового продукта (для практики)
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
});

// Экспортируем action creators
export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  addProduct,
} = productsSlice.actions;

// Экспортируем редьюсер
export default productsSlice.reducer;