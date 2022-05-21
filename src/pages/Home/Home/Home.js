import React from "react";
import NewsLetter from "../../NewsLetter/NewsLetter";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import HomeInventory from "../HomeInventory/HomeInventory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeInventory></HomeInventory>
      <Contact></Contact>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
