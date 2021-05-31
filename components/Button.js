import React from "react";

const Button = ({ children, type, onClick}) => {
  const typeOptions = [
    "btn",
    "btn-primary",
    "btn-secondary",
    "btn-primary-ghost",
    "btn-secondary-ghost",
  ];

  const checkType = typeOptions.includes(type) ? type : typeOptions[0];

  return (
    <div>

      <button
        className={`btn ${checkType} z-10 relative`}
        onClick={onClick}
      >
        {children}
      </button>
      <div className="colorful-shadow w-56 h-12 absolute z-0"></div>
    </div>
  );
};

export default Button;
