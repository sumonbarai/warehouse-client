import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="newsletter-text">
              <h3>Newsletter - Stay tune and get the latest update</h3>
            </div>
          </div>
          <div className="col-lg-6">
            <form>
              <input type="text" placeholder="Enter Your Email Address" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
