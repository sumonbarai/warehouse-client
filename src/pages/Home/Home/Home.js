import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import HomeInventory from "../HomeInventory/HomeInventory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HomeInventory></HomeInventory>
      <Contact></Contact>
    </div>
  );
};

export default Home;
