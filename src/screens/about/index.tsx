import React, { FC } from "react";
import HeroAbout from "./hero";

interface Props {}

const ScreenAbout: FC = () => {
  return (
    <React.Fragment>
      <HeroAbout />
    </React.Fragment>
  );
};

export default ScreenAbout;
