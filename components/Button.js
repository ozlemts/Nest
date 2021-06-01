import React from "react";

const Button = ({ children, type, onClick }) => {
  const typeOptions = [
    "btn",
    "btn-primary",
    "btn-secondary",
    "btn-primary-ghost",
    "btn-secondary-ghost",
  ];

  const checkType = typeOptions.includes(type) ? type : typeOptions[0];

  return (
    <div className="relative w-full flex flex-col justify-center items-center">
      <div className="colorful-shadow w-56 h-12 absolute z-0"></div>
      <button className={`btn ${checkType} z-10`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
