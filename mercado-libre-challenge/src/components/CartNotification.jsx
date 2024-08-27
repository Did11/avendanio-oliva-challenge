// src/components/CartNotification.jsx

import { useEffect, useState } from 'react';
import useCart from '../context/useCart';
import { toast } from 'react-toastify';

const CartNotification = () => {
  const { items } = useCart();
  const [prevItemsCount, setPrevItemsCount] = useState(items.length);

  useEffect(() => {
    if (items.length > prevItemsCount) {
      const newItem = items[items.length - 1]; // El último artículo agregado
      console.log('Nuevo artículo agregado:', newItem); // Añade un log para ver la estructura del objeto
      toast.success(`${newItem.name || 'Producto'} se agregó al carrito!`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setPrevItemsCount(items.length);
  }, [items, prevItemsCount]);

  return null;
};

export default CartNotification;
