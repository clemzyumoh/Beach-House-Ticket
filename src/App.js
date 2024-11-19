import "./App.css";
import Nav from "./Components/Nav";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";

import Section4 from "./Sections/Section4";
import Section5 from "./Sections/Section5";
import Section6 from "./Sections/Section6";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="wrapper    ">
      <main className="  h-screen pb-14 lg:pb-0 text-white relative ">
        <Nav />
        <Section1 />
        <Section2 />
        <Section5 />
        
        <Section6/>
        <Section4 />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
