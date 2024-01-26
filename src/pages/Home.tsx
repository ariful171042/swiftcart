import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SkeletonLoader from "../components/SkeletonLoader";
import { useLatestProductQuery } from "../redux/api/productAPI";
import { addToCart } from "../redux/reducer/cartReducer";
import { CartItem } from "../types/types";

const Home = () => {
  const { data, isLoading, isError } = useLatestProductQuery("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = (cartItem: CartItem) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");

    dispatch(addToCart(cartItem));
    navigate("/cart");
    toast.success("Added to cart");
  };

  if (isError) toast.error("Cannot Fetch the Products");
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to={"/search"} className="findmore">
          More{" "}
        </Link>
      </h1>

      <main>
        {isLoading ? (
          <SkeletonLoader width="80vw" />
        ) : (
          data?.products.map((product) => (
            <ProductCard
              key={product._id}
              productId={product._id}
              price={product.price}
              stock={product.stock}
              name={product.category}
              handler={addToCartHandler}
              photo={product.photo}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default Home;
