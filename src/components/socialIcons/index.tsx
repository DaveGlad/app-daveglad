import React, { FC } from "react";
import { motion } from "framer-motion";

//
import { Facebook, Github, Twitter, YouTube } from "@components/AllSvg";

//!STYLE
import s from "./assets/style.module.css";

type Props = {};

const SocialIcons: FC<Props> = () => {
  const scale = { scale: [0, 1, 1.5, 1] };

  return (
    <div className={s.socialIcons}>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={scale}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <Github width={25} height={25} fill={"#000000"} />
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={scale}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <Twitter width={25} height={25} fill={"#000000"} />
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={scale}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <Facebook width={25} height={25} fill={"#000000"} />
      </motion.div>

      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={scale}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <YouTube width={25} height={25} fill={"#000000"} />
      </motion.div>

      <motion.div
        className={s.line}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      ></motion.div>
    </div>
  );
};

export default SocialIcons;
