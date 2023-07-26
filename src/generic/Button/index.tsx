import React, { FC } from "react";

type ButtonType = {
  children: React.ReactNode | string;
  className?: string;
  type?: "submit" | "reset";
};

const Button: FC<ButtonType> = ({ children, className = "", type }) => {
  return (
    <button
      type={type}
      className={`bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
