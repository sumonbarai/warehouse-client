import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-area section-padding ">
      <div className="container">
        <h2 className="section-title">contact us</h2>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 g-5">
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="email" required />
              <textarea placeholder="Message" cols="30" rows="5"></textarea>
              <button>submit</button>
            </form>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 g-5">
            <div className="contact-details">
              <div className="contact-info">
                <h5>address</h5>
                <p>
                  10800 West Pico Boulevard Infinity Loop <br /> Cupertino, Los{" "}
                  <br />
                  Angeles, USA
                </p>
              </div>
              <div className="contact-info">
                <h5>CONTACT</h5>
                <p>
                  email: office@en-co.com <br />
                  mob: 555-3587 347
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
