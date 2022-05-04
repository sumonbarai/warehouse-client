import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();

  return (
    <footer className="footer-area">
      <p>
        &copy; {currentYear} Inventory | All Right Reserved By Inventory
        Management Team
      </p>
    </footer>
  );
};

export default Footer;
