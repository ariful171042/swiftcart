import { FaPlus } from "react-icons/fa";
import { server } from "../redux/store";

type ProductCardProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const ProductCard = ({
  // productId,
  price,
  photo,
  name,
  // stock,
  handler,
}: ProductCardProps) => {
  return (
    <div className="productcard">
      <img src={`${server}/${photo}`} alt={name} />

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
