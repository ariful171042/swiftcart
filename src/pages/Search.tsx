import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SkeletonLoader from "../components/SkeletonLoader";
import {
  useCategoryQuery,
  useSearchProductsQuery,
} from "../redux/api/productAPI";
import { addToCart } from "../redux/reducer/cartReducer";
import { CustomError } from "../types/api-types";
import { CartItem } from "../types/types";

const Search = () => {
  const { data, isLoading, isError, error } = useCategoryQuery("");

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(50000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const {
    isLoading: productLoading,
    data: searchData,
    isError: productIsError,
    error: productError,
  } = useSearchProductsQuery({
    search,
    sort,
    category,
    page,
    price: maxPrice,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = (cartItem: CartItem) => {
    if (cartItem.stock < 1) return toast.error("Out of Stock");

    dispatch(addToCart(cartItem));
    navigate("/cart");
    toast.success("Added to cart");
  };

  const isPrevPage = page > 1;
  const isNextPage = page < 4;

  if (isError) {
    const err = error as CustomError;
    toast.error(err.data.message);
  }
  if (productIsError) {
    const err = productError as CustomError;
    toast.error(err.data.message);
  }

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={100000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}></input>
        </div>
        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option value="">ALL</option>
            {!isLoading &&
              data?.categories?.map((i) => (
                <option key={i} value={i}>
                  {i.toLocaleUpperCase()}
                </option>
              ))}
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {productLoading ? (
          <SkeletonLoader length={10} />
        ) : (
          <div className="search-product-list">
            {searchData?.products?.map((product) => (
              <ProductCard
                key={product._id}
                productId={product._id}
                price={product.price}
                stock={product.price}
                name={product.name}
                handler={addToCartHandler}
                photo={product.photo}
              />
            ))}
          </div>
        )}

        {searchData && searchData?.totalPage > 1 && (
          <article>
            <button
              disabled={!isPrevPage}
              onClick={() => setPage((prev) => prev - 1)}>
              prev
            </button>
            <span>
              {page} of {searchData?.totalPage}
            </span>
            <button
              disabled={!isNextPage}
              onClick={() => setPage((prev) => prev + 1)}>
              next
            </button>
          </article>
        )}
      </main>
    </div>
  );
};

export default Search;
