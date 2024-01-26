import { ChangeEvent, useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { CartReducerInitialState } from "../types/reducerTypes";
import { useSelector } from "react-redux";

const Shipping = () => {
  const { cartItems } = useSelector(
    (state: { cartReducer: CartReducerInitialState }) => state.cartReducer
  );

  const [shippingInfo, setSippingInfo] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const changeHandle = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setSippingInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) return navigate("/cart");
  }, []);
  return (
    <div className="shipping">
      <button className="back-btn" onClick={() => navigate("/cart")}>
        <BiArrowBack />
      </button>

      <form action="">
        <h1>Shipping Address</h1>

        <input
          required
          type="text"
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={changeHandle}
        />
        <input
          required
          type="text"
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={changeHandle}
        />
        <input
          required
          type="text"
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          onChange={changeHandle}
        />

        <select
          name="country"
          id="country"
          required
          value={shippingInfo.country}>
          <option value="bangladesh">Bangladesh</option>
          <option value="india">India</option>
        </select>

        <input
          required
          type="number"
          placeholder="Pin Code"
          name="pinCode"
          value={shippingInfo.pinCode}
          onChange={changeHandle}
        />

        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default Shipping;
