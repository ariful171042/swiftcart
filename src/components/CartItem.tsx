import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
  id: string;
  photo: string;
  name: string;
  price: number;
  quantity: number;
  stock: number;
};

const CartItem = ({ cartItem }: { cartItem: CartItemProps }) => {
  return (
    <div className="cart-item">
      <img src={cartItem.photo} alt={cartItem.name} />
      <article>
        <Link to={`/product/${cartItem.id}`}>{cartItem.name}</Link>
        <span>{cartItem.price}</span>
      </article>

      <div className="">
        <button>-</button>
        <p>{cartItem.quantity}</p>
        <button>+</button>
      </div>

      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
