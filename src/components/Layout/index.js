import React from "react";
import Navbar from "../Navbar";
const Layout = ({ children, isNav }) => {
  return (
    <div className="background">
      {isNav && <Navbar />}
      <div className="wrapper">
        {children}
      </div>
    </div>
  );
};

export default Layout;
