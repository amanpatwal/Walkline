"use client";

import { createContext, useContext, useReducer, useEffect, useCallback } from "react";

/**
 * Walkline Footwear — Cart Context
 * Centralized cart state with localStorage persistence.
 * Cart identity: productId + size (same product, different size = separate item)
 */

const CartContext = createContext(null);

const STORAGE_KEY = "walkline_cart_v1";

// ── Reducer ──────────────────────────────────────────────────────────────────

function cartReducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return action.payload;

    case "ADD_ITEM": {
      const { item } = action; // { productId, slug, name, image, size, quantity }
      const existingIdx = state.findIndex(
        (i) => i.productId === item.productId && i.size === item.size
      );
      if (existingIdx >= 0) {
        // Increment quantity of existing variant
        return state.map((i, idx) =>
          idx === existingIdx ? { ...i, quantity: i.quantity + (item.quantity || 1) } : i
        );
      }
      return [...state, { ...item, quantity: item.quantity || 1 }];
    }

    case "REMOVE_ITEM": {
      return state.filter(
        (i) => !(i.productId === action.productId && i.size === action.size)
      );
    }

    case "UPDATE_QTY": {
      const { productId, size, quantity } = action;
      if (quantity < 1) {
        return state.filter((i) => !(i.productId === productId && i.size === size));
      }
      return state.map((i) =>
        i.productId === productId && i.size === size ? { ...i, quantity } : i
      );
    }

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

// ── Persistence helpers ───────────────────────────────────────────────────────

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function saveToStorage(cart) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch {
    // Storage quota or private browsing — fail silently
  }
}

// ── Provider ─────────────────────────────────────────────────────────────────

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = loadFromStorage();
    if (stored.length > 0) {
      dispatch({ type: "HYDRATE", payload: stored });
    }
  }, []);

  // Persist every change
  useEffect(() => {
    saveToStorage(cart);
  }, [cart]);

  const addItem = useCallback((item) => {
    dispatch({ type: "ADD_ITEM", item });
  }, []);

  const removeItem = useCallback((productId, size) => {
    dispatch({ type: "REMOVE_ITEM", productId, size });
  }, []);

  const updateQty = useCallback((productId, size, quantity) => {
    dispatch({ type: "UPDATE_QTY", productId, size, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR" });
  }, []);

  const itemCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQty, clearCart, itemCount }}>
      {children}
    </CartContext.Provider>
  );
}

// ── Hook ─────────────────────────────────────────────────────────────────────

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
