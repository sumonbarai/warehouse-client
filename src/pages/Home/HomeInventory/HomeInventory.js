import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

import "./HomeInventory.css";

const HomeInventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/product?total=10`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="home-inventory-area section-padding">
      <div className="container">
        <h2 className="section-title">Inventory</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
        {
          <Link className="text-decoration-none" to="/inventory">
            <button className="custom-btn mx-auto d-block my-3">
              all inventory
            </button>
          </Link>
        }
      </div>
    </div>
  );
};

export default HomeInventory;
