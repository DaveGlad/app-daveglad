import React, { FC } from "react";

//!STYLE
import s from "./assets/button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button: FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={`${s.button__content} ${className}`}>
      <span className={`${s.btn} ${s.effect}`} data-sm-link-text="GO">
        <span>{children}</span>
      </span>
    </button>
  );
};

export default Button;
