import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";
import "./Product.css";

const Product = (props) => {
  const { name, img, price, seller, stock, star } = props.product;
  //   console.log(props);
  return (
    <>
      <div className="product">
        <div>
          <img src={img} alt="" />
        </div>
        <div>
          <h4 className="product-name">{name}</h4>
          <p>
            <small>by: {seller}</small>
          </p>
          <p>Price: {price}</p>
          <p>
            <small>only {stock} left in stock - order soon</small>
          </p>
          <Rating
            emptySymbol="fa-regular fa-star icon-color"
            fullSymbol="fa-solid fa-star icon-color"
            readonly
            initialRating={star}
          />
          <br />
          <button
            className="purchase-btn"
            onClick={() => props.handleAddToCart(props.product)}
          >
            <FontAwesomeIcon icon={faPlus} /> Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
