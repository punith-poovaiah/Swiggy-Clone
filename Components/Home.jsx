import React from "react";
import Navbar from "./NavbarPage";
import Footer from "./Footer";
import Content from "./Contents";
// import Status from "./StatusDisplay";

function Home() {
  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
      {/* <Status /> */}
    </div>
  );
}

export default Home;
