// src/context/CartReducer.js

const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      const existingItem = state.items[existingItemIndex];

      let updatedItems;
      if (existingItem) {
        const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      const updatedTotalAmount = state.totalAmount + action.payload.price;

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case 'REMOVE_ITEM': {
      const itemToRemove = state.items.find(item => item.id === action.payload);
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      const reducedTotalAmount = itemToRemove ? state.totalAmount - itemToRemove.price * itemToRemove.quantity : state.totalAmount;
      return {
        ...state,
        items: filteredItems,
        totalAmount: reducedTotalAmount,
      };
    }
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);
      const existingItem = state.items[existingItemIndex];

      if (!existingItem || quantity <= 0) return state;

      const updatedItem = { ...existingItem, quantity };
      const updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;

      const updatedTotalAmount = state.items.reduce((sum, item) => sum + item.price * (item.id === id ? quantity : item.quantity), 0);

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
