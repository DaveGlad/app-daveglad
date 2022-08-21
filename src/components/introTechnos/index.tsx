import React from "react";

//!ICONS
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3 } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";
import {
  SiNextdotjs,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";

//!STYLE
import s from "./style/style.module.css";

interface Props {}

const IntroTechnologies = (props: Props) => {
  return (
    <div className={s.technos}>
      <div>
        <ImHtmlFive2 />
      </div>
      <div>
        <FaCss3 />
      </div>
      <div>
        <SiJavascript />
      </div>
      <div>
        <SiReact />
      </div>
      <div>
        <SiTypescript />
      </div>
      <div>
        <SiRedux />
      </div>
      <div>
        <SiNextdotjs />
      </div>
      <div>
        <BiGitBranch />
      </div>
      <div>
        <SiNodedotjs />
      </div>
    </div>
  );
};

export default IntroTechnologies;
