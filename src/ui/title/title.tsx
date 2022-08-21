import React, { FC } from "react";

//!STYLE
import s from "./assets/title.module.css";

type TitleProps = {
  children: React.ReactNode;
  className?: string;
};
const Title: FC<TitleProps> = ({ className, children }) => {
  return <h1 className={`${s.title} ${className}`}>{children}</h1>;
};

export default Title;
