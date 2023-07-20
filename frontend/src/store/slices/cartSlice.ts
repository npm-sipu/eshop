import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../../hooks/useTypes';
import { AppThunk } from '../store';
import { Address } from '../../hooks/useTypes';

const CART_LOCAL_STORAGE_KEY = 'cart';
const SHIPPING_ADDRESS_LOCAL_STORAGE_KEY = 'shippingAddress';

// Try to get the cart state from local storage
const getSavedCartState = (): CartItem[] | null => {
  const cartStateJSON = localStorage.getItem(CART_LOCAL_STORAGE_KEY);
  if (cartStateJSON) {
    try {
      const cartState = JSON.parse(cartStateJSON) as CartItem[];
      return cartState;
    } catch {
      localStorage.removeItem(CART_LOCAL_STORAGE_KEY);
    }
  }
  return null;
};

const getSavedShippingAddress = (): Address | {} => {
  const shippingAddressJSON = localStorage.getItem(SHIPPING_ADDRESS_LOCAL_STORAGE_KEY);
  if (shippingAddressJSON) {
    try {
      const shippingAddress = JSON.parse(shippingAddressJSON) as Address;
      return shippingAddress;
    } catch {
      localStorage.removeItem(SHIPPING_ADDRESS_LOCAL_STORAGE_KEY);
    }
  }
  return {};
};



const initialState: {
  cartItems: CartItem[];
  shippingAddress: Address | {};
} = {
  cartItems: getSavedCartState() ?? [],
  shippingAddress: getSavedShippingAddress(),
};

// const initialState: CartItem[] = getSavedCartState() ?? [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: getSavedCartState() ?? [],
    shippingAddress: getSavedShippingAddress(),
  },
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === newItem.id);
      if (existingItem) {
        // If the item already exists in the cart, update its quantity
        existingItem.qty += newItem.qty;
      } else {
        // Otherwise, add the new item to the cart
        state.cartItems.push(newItem);
      }
      localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(state.cartItems));
    },
    updateItemQuantity: (state, action: PayloadAction<{ itemId: string; quantity: number }>) => {
      const { itemId, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item) {
        item.qty = quantity;
        localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(state.cartItems));
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem(CART_LOCAL_STORAGE_KEY);
    },
    saveShippingAddress: (state, action: PayloadAction<Address>) => {
      state.shippingAddress = action.payload;
      localStorage.setItem(SHIPPING_ADDRESS_LOCAL_STORAGE_KEY, JSON.stringify(state.shippingAddress));
    },
  },
});

// When the user logs in, check if there are any items in local storage
// and add them to the cart state
export const syncCartState = (): AppThunk => (dispatch) => {
  const savedCartState = getSavedCartState();
  if (savedCartState) {
    dispatch({ type: 'cart/clearCart' });
    savedCartState.forEach((item) => dispatch({ type: 'cart/addItem', payload: item }));
  }
};

export const { addItem, removeItem, updateItemQuantity, clearCart, saveShippingAddress } = cartSlice.actions;
export default cartSlice.reducer;
