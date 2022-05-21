import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  const { _id, name, img, description, price, quantity, Supplier } = product;
  const navigate = useNavigate();
  const handleUpdate = () => {
    navigate(`/productDetails/${_id}`);
  };

  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top w-75 mx-auto" alt="images" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description.slice(0, 150)} ...</p>
          <p>Price: {price}</p>
          <p>quantity:{quantity}</p>
          <p>Suppler Name : {Supplier}</p>
          <button onClick={handleUpdate} className="custom-btn mx-auto d-block">
            update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
