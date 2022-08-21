import React, { FC } from "react";

//!STYLE
import s from "./style/container.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
};
const Conatiner: FC<Props> = ({ children, className }) => {
  return <div className={`${s.container} ${className}`}>{children}</div>;
};

export default Conatiner;
