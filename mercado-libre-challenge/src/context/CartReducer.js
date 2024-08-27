const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      let updatedItems;

      if (existingItemIndex >= 0) {
        const updatedItem = {
          ...state.items[existingItemIndex],
          quantity: state.items[existingItemIndex].quantity + 1
        };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      };
    }

    case 'REMOVE_ITEM': {
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: filteredItems,
        totalAmount: filteredItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
      };
    }

    case 'UPDATE_QUANTITY': {
      const updatedItemsQuantity = state.items.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );

      return {
        ...state,
        items: updatedItemsQuantity,
        totalAmount: updatedItemsQuantity.reduce((sum, item) => sum + item.price * item.quantity, 0)
      };
    }

    // Nuevo caso para vaciar el carrito
    case 'CLEAR_CART': {
      return {
        ...state,
        items: [],
        totalAmount: 0
      };
    }

    default:
      return state;
  }
};

export default CartReducer;
