"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menuOpen);
  };

  return (
    <div className="content">
      <header className="header">
        <Link
          href={{
            pathname: "/",
          }}
        >
          <Image
            className="header__logo"
            src="./icons/logo.svg"
            alt="logo"
            width={33}
            height={18}
          />
        </Link>
        <div className="header__right">
          <Link
            href={{
              pathname: "/",
            }}
            className="header__button"
          >
            Marketplace
            <Image
              className="header__button-icon"
              src="./icons/angle-right.svg"
              alt="angle"
              width={12}
              height={12}
            />
          </Link>
          <div className="header__burger" onClick={toggleMenu}>
            <Image
              className="header__burger-icon"
              src={menuOpen ? "./icons/close.svg" : "./icons/burger.svg"}
              alt="burger"
              width={24}
              height={24}
            />
          </div>
        </div>
      </header>
      <div
        className={menuOpen ? "mobile-menu mobile-menu_open" : "mobile-menu"}
      >
        <nav className="mobile-menu__nav">
          <a className="mobile-menu__nav-link" href="#">
            Products
          </a>
          <a className="mobile-menu__nav-link" href="#">
            Use cases
          </a>
          <a className="mobile-menu__nav-link" href="#">
            How it works
          </a>
          <a className="mobile-menu__nav-link" href="#">
            Blog
          </a>
          <a className="mobile-menu__nav-link" href="#">
            Schedule a call
          </a>
        </nav>
      </div>
      <main className=""></main>
    </div>
  );
}
