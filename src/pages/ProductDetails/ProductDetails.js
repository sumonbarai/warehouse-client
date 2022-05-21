import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://evening-spire-35623.herokuapp.com/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);

  // one product delivered
  const handleDelivered = () => {
    const currentQuantity = product.quantity - 1;
    const quantity = { quantity: currentQuantity };
    const url = `https://evening-spire-35623.herokuapp.com/product?id=${product._id}`;
    fetch(url, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quantity),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        toast.success("Successfully delivered!");
      });
  };

  // handleUpdateQuantity increase
  const handleUpdateQuantity = (event) => {
    event.preventDefault();
    const newQuantity = event.target.quantity.value;
    const quantity = product.quantity + parseFloat(newQuantity);
    const updateQuantity = { quantity: quantity };
    if (quantity > 0) {
      const url = `https://evening-spire-35623.herokuapp.com/productIncrease?id=${product._id}`;
      fetch(url, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          toast.success("Successfully Updated!");
          event.target.reset();
        });
    }
  };
  return (
    <div className="product-details-area">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="section-title p-3">product details information</h2>
            <div className="card">
              <img
                src={product.img}
                className="card-img-top w-25 mx-auto"
                alt="images"
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p>Price: {product.price}</p>
                <p>quantity:{product.quantity}</p>
                <p>Suppler Name : {product.Supplier}</p>
                <button
                  onClick={handleDelivered}
                  className="custom-btn mx-auto d-block"
                >
                  delivered
                </button>
              </div>
            </div>
          </div>
          <div className="row quantity-area">
            <div className="col">
              <form onSubmit={handleUpdateQuantity}>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Enter quantity"
                />
                <input type="submit" value="Update Quantity" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
