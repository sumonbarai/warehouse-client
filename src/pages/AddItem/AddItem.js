import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  // product upload on data base
  const handleProductUpload = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const price = event.target.price.value;
    const quantity = event.target.quantity.value;
    const Supplier = event.target.supplier.value;
    const img = event.target.img.value;
    const description = event.target.description.value;
    const data = { email, name, price, quantity, Supplier, img, description };
    fetch("https://evening-spire-35623.herokuapp.com/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success("Successfully product added!");
        event.target.reset();
      });
  };

  return (
    <div className="add-item-area">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="user">
              <div className="form-area">
                <h4>New product added</h4>
                <form onSubmit={handleProductUpload}>
                  <input
                    type="email"
                    name="email"
                    placeholder="user email "
                    value={user?.email}
                    readOnly
                    disabled
                    required
                  />
                  <input type="text" name="name" placeholder="Product Title " />
                  <input
                    type="text"
                    name="price"
                    placeholder="Product price"
                    required
                  />
                  <input
                    type="text"
                    name="quantity"
                    placeholder="Product quantity "
                    required
                  />
                  <input
                    type="text"
                    name="supplier"
                    placeholder="Supplier Name "
                    required
                  />
                  <input
                    type="text"
                    name="img"
                    placeholder="Product Image Url "
                    required
                  />
                  <textarea
                    name="description"
                    placeholder="Product Description"
                    cols="30"
                    rows="5"
                    required
                  ></textarea>

                  <input type="submit" value="Product Upload" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
