import { useCart } from "./UseCart";

export function ProductCart({ product }) {
  const { addItem } = useCart();

  return <button onClick={() => addItem(product)}>IN CART</button>
}