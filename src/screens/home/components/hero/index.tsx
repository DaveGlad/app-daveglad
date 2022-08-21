import React from "react";

//!COMPONENTS
import Button from "@ui/button";
import Title from "@ui/title/title";
import Conatiner from "@ui/container";
import SocialIcons from "@components/socialIcons";

//!STYLE
import s from "./assets/hero.module.css";
import { ScrollAnotation } from "@components/indicatorScroll";

const Hero = () => {
  return (
    <div className={s.hero}>
      <Conatiner>
        <div className={s.hero__content}>
          <div className={s.infos}>
            <Title className={s.title}>
              We build top-notch custom web and mobile solutions !
            </Title>
            <p className={s.description}>
              Hire a dedicated skilled team to design and develop your custom{" "}
              software, website, or mobile application software, website, or
              mobile application
            </p>

            <Button>Contactez-moi</Button>
          </div>
        </div>
      </Conatiner>

      <SocialIcons />

      <ScrollAnotation />
    </div>
  );
};

export default Hero;
