import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="background">
      <div className="wrapper">
        {children}
      </div>
    </div>
  );
};

export default Layout;
