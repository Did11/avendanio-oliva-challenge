const CartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_ITEM': {
        const updatedItems = [...state.items, action.payload];
        const updatedTotalAmount = state.totalAmount + action.payload.price;
        return {
          ...state,
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }
      case 'REMOVE_ITEM': {
        const filteredItems = state.items.filter((item) => item.id !== action.payload);
        // Calculamos el nuevo total sólo si el producto existe
        const itemToRemove = state.items.find((item) => item.id === action.payload);
        const reducedTotalAmount = itemToRemove ? state.totalAmount - itemToRemove.price : state.totalAmount;
        return {
          ...state,
          items: filteredItems,
          totalAmount: reducedTotalAmount,
        };
      }
      default:
        return state;
    }
  };
  
  export default CartReducer;
  