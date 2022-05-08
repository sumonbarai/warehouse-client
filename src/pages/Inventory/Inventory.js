import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://evening-spire-35623.herokuapp.com/product`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  const handleUpdate = (_id) => {
    navigate(`/productDetails/${_id}`);
  };
  const handleDelete = (_id) => {
    const confirm = window.confirm("Do you want to delete?");
    if (confirm) {
      fetch(`https://evening-spire-35623.herokuapp.com/product/${_id}`, {
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
    <div className="inventory-area">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="section-title mt-3">All inventory display</h2>
            <Table striped bordered hover responsive size="sm">
              <thead>
                <tr className="text-center">
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Supplier</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id} className="align-middle">
                    <td>{product.name}</td>
                    <td className="text-center">{product.price}</td>
                    <td className="text-center">{product.quantity}</td>
                    <td className="text-center">{product.Supplier}</td>
                    <td className="text-center">
                      <button
                        onClick={() => handleUpdate(product._id)}
                        className="table-btn"
                      >
                        Update
                      </button>
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => handleDelete(product._id)}
                        style={{ backgroundColor: "red" }}
                        className="table-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Link className="text-decoration-none" to="/additems">
              <button className="custom-btn mx-auto d-block">
                add new item
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
