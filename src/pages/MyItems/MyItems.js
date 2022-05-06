import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Items from "./Items";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/productEmail?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  //  handle delete product api

  const handleDelete = (_id) => {
    const confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      fetch(`http://localhost:5000/product/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const rest = products.filter((product) => product._id !== _id);
          setProducts(rest);
        });
    }
  };
  return (
    <div className="my-item-area">
      <div className="container">
        <h2 className="section-title mt-3">My uploaded product</h2>
        <div className="row">
          {products.map((product) => (
            <Items
              key={product._id}
              product={product}
              handleDelete={handleDelete}
            ></Items>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyItems;
