import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  // Remove Handler in Remove Button
  const handleRemove = (key) => {
    // console.log(key);
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
    removeFromDb(key);
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
          <Cart cart={cart} />
        </div>
      </div>
    </>
  );
};
export default OrderReview;
