import React, { useEffect, useRef, FC } from "react";
const THREE = require("three");

//!STYLE
import s from "./assets/style.module.css";

export const MouseTracker: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const animeID = useRef<number>();

  useEffect(() => {
    const tracker = new THREE.Vector2();
    const target = new THREE.Vector2();

    const handleMouseMove = (e: MouseEvent) => {
      target.set(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    const anime = () => {
      tracker.lerp(target, 0.1);
      ref.current!.style.setProperty("--x", tracker.x + "px");
      ref.current!.style.setProperty("--y", tracker.y + "px");

      // if (!appState.enabledScroll) {
      //   // During scrolling animation
      //   ref.current!.classList.remove("active");
      // } else if (appState.hoveredLink) {
      //   ref.current!.classList.add("active");
      // } else {
      //   ref.current!.classList.remove("active");
      // }

      animeID.current = requestAnimationFrame(anime);
    };
    anime();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      animeID.current && cancelAnimationFrame(animeID.current);
    };
  }, []);

  return (
    <div ref={ref} className={s.cursor}>
      {/* <ThumbImage /> */}
    </div>
  );
};

// const ThumbImage: VFC = () => {
//   const ref = useRef<HTMLImageElement>(null);
//   const animeID = useRef<number>();

//   const images = works.map((work) => {
//     const image = new Image();
//     image.src = `${process.env.PUBLIC_URL}/assets/images/${work.image}`;
//     return image;
//   });

//   useEffect(() => {
//     const anime = () => {
//       if (appState.enabledScroll) {
//         ref.current!.src = images[appState.workIndex].src;
//       }
//       animeID.current = requestAnimationFrame(anime);
//     };
//     anime();

//     return () => {
//       animeID.current && cancelAnimationFrame(animeID.current);
//     };
//   }, [images]);

//   return <img ref={ref} className={styles.image} alt="" />;
// };

// const styles = {
//   container: css`

//   `,
//   image: css`
//     position: relative;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   `,
// };
