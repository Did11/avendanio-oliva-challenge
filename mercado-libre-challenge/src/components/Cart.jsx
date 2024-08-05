// src/components/Cart.jsx
import { useCart } from '../context/CartContext'; // Asegúrate de que la ruta sea correcta

const Cart = () => {
  const { items, totalAmount, removeItem } = useCart(); // Usa el hook para acceder al estado y funciones

  if (!items) {
    return <div>Cargando...</div>; // Agregar un manejo de carga o error apropiado
  }

  return (
    <div>
      <h2>Tus compras</h2>
      {items.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <div>Monto Total: ${totalAmount.toFixed(2)}</div>
    </div>
  );
};

export default Cart;
