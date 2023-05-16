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
            className="button button_theme_secondary"
          >
            Marketplace
            <Image
              className="button-icon"
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
      <main className="main">
        <section className="section intro">
          <h1 className="intro__title">
            <span>Buy now,</span>
            <br />
            <span>Use now,</span>
            <br />
            <span>Pay later</span>
          </h1>
          <div className="intro__descr">
            A new primitive enabling easy <br /> financing for every NFT
            purchase.
          </div>
          <div className="intro__actions">
            <Link
              href={{
                pathname: "/",
              }}
              className="intro__button button button_theme_primary"
            >
              Try Demo App
              <Image
                className="button-icon"
                src="./icons/angle-right.svg"
                alt="angle"
                width={12}
                height={12}
              />
            </Link>

            <Link
              href={{
                pathname: "/",
              }}
              className="intro__button button button_theme_text"
            >
              Get Early Access to SDK
              <Image
                className="button-icon"
                src="./icons/angle-right.svg"
                alt="angle"
                width={12}
                height={12}
              />
            </Link>
          </div>
        </section>

        <section className="section products">
          <h2 className="section__title">products</h2>
          <img className="products__img" src="/products.png" alt="product" />
          <div className="products__gradient"></div>
        </section>
      </main>
    </div>
  );
}
