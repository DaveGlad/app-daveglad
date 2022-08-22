import React, { FC } from "react";

//!NEXT
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

//!COMPONENTS
import Conatiner from "@ui/container";

//!ASSETS
import Logo from "@assets/images/header/logoDG.svg";

//!ICONS
import { FiSearch } from "react-icons/fi";

//!STYLE
import s from "./assets/header.module.css";

import { Suspense } from "react";

// import SoundBar from "@components/soundBar";

const SoundBar = dynamic(() => import("@components/soundBar"), {
  suspense: true,
  ssr: false,
});

const Header: FC = () => {
  return (
    <header className={s.header}>
      <div className={s.menu}>
        <div className={s.box__left}>
          <div className={s.logo}>
            <Image src={Logo} width={40} height={40} alt="logo Dave Glad" />
          </div>

          <div className={s.search}>
            <FiSearch className={s.icon__search} size={17} />
          </div>

          <Suspense fallback={`Loading...`}>
            <SoundBar />
          </Suspense>
        </div>

        <nav className={s.nav}>
          <ul className={s.nav__list}>
            <li className={s.nav__item}>
              <Link href="" passHref>
                <a>Accueil</a>
              </Link>
            </li>
            <li className={s.nav__item}>
              <Link href="">
                <a>About</a>
              </Link>
            </li>
            <li className={s.nav__item}>
              <Link href="">
                <a>Services</a>
              </Link>
            </li>
            <li className={s.nav__item}>
              <Link href="">
                <a>Community</a>
              </Link>
            </li>
            <li className={s.nav__item}>
              <Link href="">
                <a>Blog</a>
              </Link>
            </li>
            <li className={s.nav__item}>
              <Link href="">
                <a>Tutoriels</a>
              </Link>
            </li>
            <li className={s.nav__item}>
              <Link href="">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>

        <div className={s.right__box}>
          <ul className={s.nav__list}>
            <li className={s.nav__item}>
              <Link href="">Register</Link>
            </li>
            <li className={s.nav__item}>
              <Link href="" aria-disabled>
                <a>|</a>
              </Link>
            </li>
            <li className={s.nav__item}>
              <Link href="">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
