import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useLatestProductQuery } from "../redux/api/productAPI";
import toast from "react-hot-toast";
import SkeletonLoader from "../components/SkeletonLoader";

const Home = () => {
const {data,isLoading,isError} = useLatestProductQuery("")


  const addToCartHandler = () => {};

  if(isError) toast.error("Cannot Fetch the Products")
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
       { isLoading ? (<SkeletonLoader width="80vw"/>) :
        data?.products.map((product)=>(
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
       }
      </main>
    </div>
  );
};

export default Home;
