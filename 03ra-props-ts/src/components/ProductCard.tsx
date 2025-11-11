interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  onAddToCart: () => void;
}

const ProductCard = ({
  title,
  price,
  imageUrl,
  onAddToCart,
}: ProductCardProps) => (
  <div className="product-card">
    <img src={imageUrl} alt={title} />
    <h3>{title}</h3>
    <p>{price} ₽</p>
    <button onClick={onAddToCart}>В корзину</button>
  </div>
)

export default ProductCard;