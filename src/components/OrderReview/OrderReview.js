import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const history = useNavigate();

  // Remove Handler in Remove Button
  const handleRemove = (key) => {
    // console.log(key);
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
  };

  // Handle Place Order Button
  const handlePlaceOrder = () => {
    history("/placeorder");
    setCart([]);
    clearTheCart();
  };
  return (
    <>
      <div className="shop-container">
        <div className="product-container">
          {cart.map((product) => (
            <ReviewItem
              product={product}
              key={product.key}
              handleRemove={handleRemove}
            />
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <button className="purchase-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </Cart>
        </div>
      </div>
    </>
  );
};
export default OrderReview;
