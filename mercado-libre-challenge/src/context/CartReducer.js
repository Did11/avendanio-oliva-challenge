// src/context/CartReducer.js

const CartReducer = (state, action) => {
  console.log('Dispatching action:', action); // Log de la acción que se está despachando

  switch (action.type) {
    case 'ADD_ITEM': {
      console.log('Current items:', state.items); // Log de los items actuales
      console.log('Item to add:', action.payload); // Log del ítem que se va a agregar

      // Busca si el producto ya está en el carrito
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      const existingItem = state.items[existingItemIndex];

      let updatedItems;
      if (existingItem) {
        // Si el producto ya está, incrementa la cantidad
        const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = updatedItem;
        console.log('Item exists, updating quantity:', updatedItem); // Log de la actualización
      } else {
        // Si el producto no está, agrégalo con cantidad inicial de 1
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
        console.log('Item does not exist, adding new item:', action.payload); // Log del nuevo item
      }

      // Calcula el nuevo monto total
      const updatedTotalAmount = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      console.log('Updated total amount:', updatedTotalAmount); // Log del nuevo monto total

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    case 'REMOVE_ITEM': {
      console.log('Item to remove:', action.payload); // Log del item que se va a eliminar

      // Encuentra el producto a eliminar
      const itemToRemove = state.items.find(item => item.id === action.payload);
      const filteredItems = state.items.filter(item => item.id !== action.payload);

      // Calcula el nuevo monto total después de eliminar el producto
      const reducedTotalAmount = state.totalAmount - (itemToRemove ? itemToRemove.price * itemToRemove.quantity : 0);
      console.log('Updated items after removal:', filteredItems); // Log de los items actualizados
      console.log('Reduced total amount:', reducedTotalAmount); // Log del monto total reducido

      return {
        ...state,
        items: filteredItems,
        totalAmount: reducedTotalAmount,
      };
    }
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload;
      console.log('Updating quantity for item:', id, 'to:', quantity); // Log de la actualización de cantidad

      const existingItemIndex = state.items.findIndex(item => item.id === id);
      const existingItem = state.items[existingItemIndex];

      // Si el producto no existe o la cantidad es menor o igual a cero, no cambia nada
      if (!existingItem || quantity <= 0) {
        console.log('No update performed: item not found or invalid quantity'); // Log de no actualización
        return state;
      }

      // Actualiza la cantidad del producto
      const updatedItem = { ...existingItem, quantity };
      const updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
      console.log('Updated item:', updatedItem); // Log del item actualizado

      // Calcula el nuevo monto total después de actualizar la cantidad
      const updatedTotalAmount = updatedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      console.log('Updated total amount after quantity change:', updatedTotalAmount); // Log del monto total actualizado

      return {
        ...state,
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    default:
      console.log('No matching action type'); // Log cuando no hay acción coincidente
      return state;
  }
};

export default CartReducer;
