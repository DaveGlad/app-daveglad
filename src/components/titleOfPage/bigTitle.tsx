import React, { FC } from "react";

//!STYLE
import s from "./assets/title.module.css";

type BigTitleProps = {
  children: React.ReactNode;
  className?: string;
};
const BigTitle: FC<BigTitleProps> = ({ className, children }) => {
  return <h1 className={`${s.title} ${className}`}>{children}</h1>;
};

export default BigTitle;
