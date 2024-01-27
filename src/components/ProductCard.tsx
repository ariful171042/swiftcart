import { FaPlus } from "react-icons/fa";
import { server } from "../redux/store";
import { CartItem } from "../types/types";

type ProductCardProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};

const ProductCard = ({
  productId,
  price,
  photo,
  name,
  stock,
  handler,
}: ProductCardProps) => {
  return (
    <div className="productcard">
      <img src={`${server}/${photo}`} alt={name} />

      <p>{name.substring(0, 20)}...</p>
      <span>{price}</span>

      <div className="">
        <button
          onClick={() =>
            handler({ productId, price, photo, name, stock, quantity: 1 })
          }>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
