import React from "react";

const Button = ({ children, type, onClick, shadow, size }) => {
  const typeOptions = [
    "btn",
    "btn-primary",
    "btn-secondary",
    "btn-ternary",
    "btn-primary-ghost",
    "btn-secondary-ghost",
    "btn-tab",
  ];

  const checkType = typeOptions.includes(type) ? type : typeOptions[0];

  return (
    <div className="relative flex flex-col justify-center items-center">
      <div
        className={`w-56 h-12 absolute z-0 ${
          shadow ? "colorful-shadow" : ""
        } z-10`}
      ></div>
      <button
        className={`btn ${checkType} z-10 ${size ? "btn-big" : ""}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
