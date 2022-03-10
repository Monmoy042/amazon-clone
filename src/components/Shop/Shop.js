import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, getStoredCart } from "./../../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  // Data Load from JSON file/API
  useEffect(() => {
    // console.log("product api called");
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
        // console.log("products received");
      });
  }, []);

  useEffect(() => {
    // console.log("local storage called");
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      // console.log(savedCart);
      for (const key in savedCart) {
        //   console.log(key);
        //   console.log(products);
        console.log(key, savedCart[key]);
        const addedProduct = products.find((product) => product.key === key);
        // console.log(key, addedProduct);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          console.log(addedProduct);
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    // console.log(product.name);
    const newCart = [...cart, product];
    setCart(newCart);
    // Save to local storage
    addToDb(product.key);
  };

  // Search Handler
  const handleSearch = (event) => {
    const searchText = event.target.value;
    console.log(searchText);
    const matchedProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchedProduct);
    console.log(matchedProduct.length);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Product"
          onChange={handleSearch}
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          {/* {products.map((product) => (
            <Product
              product={product}
              key={product.key}
              handleAddToCart={handleAddToCart}
            />
          ))} */}

          {/* Display Products by Search */}
          {displayProducts.map((product) => (
            <Product
              product={product}
              key={product.key}
              handleAddToCart={handleAddToCart}
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

export default Shop;
