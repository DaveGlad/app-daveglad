import React, { FC } from "react";

//!STYLE
import s from "./assets/style.module.css";

interface Props {
  children: React.ReactNode;
}

const PagesTransition: FC<Props> = ({ children }) => {
  return <div className={s.transition}>{children}</div>;
};

export default PagesTransition;
