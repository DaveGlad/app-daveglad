import React, { FC } from "react";

//!STYLE
import s from "./style/container.module.css";

type Props = {
  children: React.ReactNode;
};
const Conatiner: FC<Props> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Conatiner;
