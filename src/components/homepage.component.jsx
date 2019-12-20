import React from "react";
import "./homepage.styles.css";
// import Pads from "./pads.component";
import Header from "./header.component";
import Directory from "./directory.component";

const HomePage = () => (
  <div className="homepage">
    <Header />
    <Directory />
  </div>
);

export default HomePage;
// <Pads />;
