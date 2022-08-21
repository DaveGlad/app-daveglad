import React, { FC } from "react";

//!STYLE
import s from "./assets/style.module.css";

export const ScrollAnotation: FC = () => {
  return (
    <div className={s.container}>
      <div className={s.text}>SCROLL</div>
      <div className={s.bar} />
    </div>
  );
};
