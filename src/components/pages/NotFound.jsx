import React from "react";
import Header from "../sections/Header.jsx";
import Footer from "../sections/Footer.jsx";

function NotFound() {
  return (
    <>
      <Header />
      <div className="container-fluid text-center">
        <h2>Page Not Found :(</h2>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;
