import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [product]);

  // one product delivered
  const handleDelivered = () => {
    const currentQuantity = product.quantity - 1;
    const quantity = { quantity: currentQuantity };
    const url = `http://localhost:5000/product?id=${product._id}`;
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
