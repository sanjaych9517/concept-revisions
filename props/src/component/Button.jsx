import React from "react";

const Button = ({title, className}) => {
  return <button className={` px-4! py-2! text-white rounded-2xl ${className} `}>{title}</button>;
};

export default Button;
