import { createSlice } from "@reduxjs/toolkit";

// Cargar carrito desde localStorage
let initialState = {
  items: [],
  total: 0,
};

try {
  const stored = localStorage.getItem("cart");
  if (stored) {
    initialState = JSON.parse(stored);
    if (!initialState.items || !Array.isArray(initialState.items)) {
      initialState = { items: [], total: 0 };
    }
  }
} catch (error) {
  console.error("Error al leer el carrito del localStorage:", error);
  initialState = { items: [], total: 0 };
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.items.find((i) => i.id === item.id);
      if (existing) {
        existing.cantidad += 1;
      } else {
        state.items.push({ ...item, cantidad: 1 });
      }
      state.total = state.items.reduce(
        (acc, i) => acc + i.precio * i.cantidad,
        0
      );
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.cantidad > 1) {
          item.cantidad -= 1;
        } else {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
        state.total = state.items.reduce(
          (acc, i) => acc + i.precio * i.cantidad,
          0
        );
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      state.total = state.items.reduce(
        (acc, i) => acc + i.precio * i.cantidad,
        0
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, decreaseQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

//Guardar carrito en localStorage
export const persistCart = (store) => {
  store.subscribe(() => {
    const state = store.getState().cart;
    try {
      localStorage.setItem("cart", JSON.stringify(state));
    } catch (error) {
      console.error("Error al guardar el carrito:", error);
    }
  });
};
