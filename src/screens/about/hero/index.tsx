import React from "react";

//!COMPONENTS
import Intro from "../intro";
import Conatiner from "@ui/container";
import BigTitle from "@components/titleOfPage/bigTitle";

//!STYLE
import s from "./assets/style.module.css";

type Props = {};

const HeroAbout = (props: Props) => {
  return (
    <div className={s.about__hero}>
      <BigTitle>À propos de moi</BigTitle>
      <Conatiner>
        <Intro />
      </Conatiner>
    </div>
  );
};

export default HeroAbout;
