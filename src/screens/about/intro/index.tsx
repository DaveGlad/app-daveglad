import React from "react";

//!NEXT
import Image from "next/image";

//!STYLE
import s from "./assets/intro.module.css";

import Glad from "../../../assets/images/about/dave.jpg";

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className={s.intro}>
      <div className={s.intro__content}>
        <div className={s.title}>
          <div className={s.title_inner}>
            <div className={s.first__text}>
              <div className={s.cafe_inner}>
                <span>Software</span>
              </div>
            </div>
            <div className={s.second__text}>
              <div className={s.mozart_inner}>
                <span>Engineer</span>
              </div>
            </div>
          </div>
        </div>

        <div className={s.image}>
          <Image src={Glad} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
