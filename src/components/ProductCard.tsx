import { FaPlus } from "react-icons/fa";

type ProductCardProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

// const server = "dafa";
const ProductCard: React.FC<ProductCardProps> = ({
  // productId,
  price,
  photo,
  name,
  // stock,
  handler,
}) => {
  return (
    <div className="productcard">
      <img src={`${photo}`} alt={name} />
      <p>{name}</p>
      <span>{price}</span>

      <div className="">
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
