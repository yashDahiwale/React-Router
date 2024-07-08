import React from "react";
import Header from "../sections/Header.jsx";
import Heros from "../sections/Heros.jsx";
import Footer from "../sections/Footer.jsx";
import BlogGrid from "../sections/BlogGrid.jsx";

function Home() {
  return (
    <>
      <Header />
      <Heros />
      <BlogGrid/>
      <Footer />
    </>
  );
}

export default Home;
