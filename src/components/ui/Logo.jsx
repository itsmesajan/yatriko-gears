import React from "react";
import logo from "../../assets/logo.png"; // adjust path if needed

const Logo = ({ width = 100, height = 100, alt = "Logo", className = "" }) => {
  return (
    <img
      src={logo}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Logo;