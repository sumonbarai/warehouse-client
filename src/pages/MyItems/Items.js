import React from "react";
import { useNavigate } from "react-router-dom";

const Items = ({ product, handleDelete }) => {
  const { _id, name, img, description, price, quantity, Supplier } = product;
  const navigate = useNavigate();

  // handle update api
  const handleUpdate = () => {
    navigate(`/productDetails/${_id}`);
  };
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 g-3">
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
          <button
            onClick={() => handleDelete(product._id)}
            className="custom-btn mx-auto d-block"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Items;
