import React from "react";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/web";
import { OrbitControls } from "@react-three/drei";

//!COMPONENTS
import Button from "@ui/button";
import Title from "@ui/title/title";
import Conatiner from "@ui/container";
import SocialIcons from "@components/socialIcons";
import Scene from "@components/sphere";

//!STYLE
import s from "./assets/hero.module.css";
import { ScrollAnotation } from "@components/indicatorScroll";
import { Canvas } from "@react-three/fiber";

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
                We build top-notch custom web and mobile solutions !
              </Title>
              <p className={s.description}>
                Hire a dedicated skilled team to design and develop your custom{" "}
                software, website,
                <br /> or mobile application software, website, or mobile
                application
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
      </Conatiner>
      {/* <a.main style={{ background }}>

      </a.main> */}

      <SocialIcons />

      <ScrollAnotation />
    </div>
  );
};

export default Hero;