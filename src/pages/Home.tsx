import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const addToCartHandler = () => {};
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
        <ProductCard
          productId="asfjdl"
          price={45}
          stock={20}
          name="computer"
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/81CFOwoLVlL._AC_SX466_.jpg"
        />
      </main>
    </div>
  );
};

export default Home;
