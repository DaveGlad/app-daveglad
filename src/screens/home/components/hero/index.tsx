import React from "react";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/web";
import { OrbitControls } from "@react-three/drei";

//!COMPONENTS
import Button from "@ui/button";
import Title from "@ui/title/title";
import Conatiner from "@ui/container";
import SocialIcons from "@components/socialIcons";
import Scene from "@components/sphere/sphere";

//!STYLE
import s from "./assets/hero.module.css";
import { ScrollAnotation } from "@components/indicatorScroll";
import { Canvas } from "@react-three/fiber";
import IntroTechnologies from "@components/introTechnos";

const Hero = () => {
  const [{ background, fill }, set] = useSpring(
    { background: "#f0f0f0", fill: "#202020" },
    []
  );
  return (
    <div className={s.hero}>
      <Conatiner>
        <div className={s.row}>
          <div className={s.hero__content}>
            <div className={s.infos}>
              <Title className={s.title}>
                <div className={s.content__span}>
                  <span>Developpeur web &</span>
                </div>
                <div className={s.content__span}>
                  <span>mobile chez Digital</span>{" "}
                </div>
                <div className={s.content__span}>
                  <span>
                    Brains Agency <strong>.</strong>
                  </span>
                </div>
              </Title>
              <p className={s.description}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                asperiores aliquid consequuntur, modi numquam esse libero
                veritatis quia beatae culpa, incidunt corporis eum obcaecati
                quisquam eligendi veniam et minima rem!
              </p>

              <Button>Contactez-moi</Button>
            </div>
          </div>

          <div className={s.__sphere}>
            <Canvas className={s.canvas} dpr={[1, 2]}>
              <Scene setBg={set} />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </div>
        </div>

        <IntroTechnologies />
      </Conatiner>

      <SocialIcons />

      <ScrollAnotation />
    </div>
  );
};

export default Hero;
