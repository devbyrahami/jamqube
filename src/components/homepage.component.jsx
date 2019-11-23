import React from "react";
import "./homepage.styles.css";
import Pads from "./pads.component";

const HomePage = () => (
  <div className="homepage">
    <div className="title-wrapper">
      <header className="title">JAMQUBE</header>
      <p className="subtitle">Don't think, just jam.</p>
    </div>
    <Pads />
  </div>
);

export default HomePage;
