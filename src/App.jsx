import React from "react";
import Header from "./component/header/Header.jsx";
import Hero from "./component/header/hero-section/Hero.jsx";
import { Dam, Import } from "lucide-react";
import "./App.css";
import Hero_buttom from "./component/hero-buttom/Hero_buttom.jsx";
import Service from "./component/service-section/Service.jsx";
import Work from "./component/Recent-work/Work.jsx";
import "./data.js";


const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Hero_buttom />
      <Service />
      {/* <Work /> */}
    </div>

  );
};

export default App;
