/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menuOpen);
  };

  const backers = [
    {
      name: "Cyrus Younessi",
      org: "MakerDAO",
    },
    {
      name: "VapeApe",
      org: "NounsDAO",
    },
    {
      name: "Alexander Salnikov",
      org: "Rarible",
    },
    {
      name: "James Duncan",
      org: "Maple Finance, SZNs",
    },
    {
      name: "Gregory Rocco",
      org: "Spruce ID",
    },
    {
      name: "Ryan Sean Adams",
      org: "Bankless",
    },
    {
      name: "Jake Chervinsky",
      org: "Blockchain Association",
    },
    {
      name: "Zack Yanger",
      org: "SuperRare",
    },
    {
      name: "David Hoffman",
      org: "Bankless",
    },
    {
      name: "DCInvestor.eth",
      org: "SuperRare",
    },
    {
      name: "Ben Lakoff",
      org: "Charged Particles",
    },
    {
      name: "Brendan Forster",
      org: "Dharma, OpenSea",
    },
    {
      name: "James Young",
      org: "Collab-Land",
    },
    {
      name: "Charles Crain",
      org: "SuperRare",
    },
    {
      name: "Fran Renzi",
      org: "SuperFluid",
    },
    {
      name: "QuickRider",
      org: "SquigglesDAO",
    },
    {
      name: "Eric Conner",
      org: "Into the Ether",
    },
    {
      name: "Anthony Sassano",
      org: "The Daily Gwei",
    },
    {
      name: "Nadav Hollander",
      org: "Dharma, OpenSea",
    },
    {
      name: "Nick Emmons",
      org: "Upshot",
    },
    {
      name: "Scott Moore",
      org: "PleasrDAO, GitCoin",
    },
    {
      name: "Lane Rettig",
      org: "Space Mesh",
    },
    {
      name: "John Crane",
      org: "SuperRare",
    },
  ];

  const cases = [
    {
      icon: "collectors",
      title: "For Collectors",
      subtitle: "Buy NFTs Now,Pay for Them Later",
      descr:
        "Access and use highly sought-after NFTs without paying the full price upfront",
    },
    {
      icon: "artists",
      title: "For ARTISTS",
      subtitle: "Increase access to your art without sacrificing its value",
      descr:
        "It’s common-place to finance art purchases at Sotheby's and Christies",
    },
    {
      icon: "marketplaces",
      title: "For Marketplaces",
      subtitle: "Boost Sales with Marketplace Fees Paid Up Front",
      descr:
        "Give your users options, increase sales, and get your marketplace fee paid at the time of sale.",
    },
  ];

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
        <img className="box box-1" src="/box-1.png" alt="decor" />
        <img className="box box-2" src="/box-2.png" alt="decor" />
        <img className="box box-3" src="/box-3.png" alt="decor" />
        <img className="box box-4" src="/box-4.png" alt="decor" />
        <img className="box box-5" src="/box-5.png" alt="decor" />
        <img className="box box-6" src="/box-6.png" alt="decor" />
        <img className="box box-7" src="/box-7.png" alt="decor" />
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

        <section className="section cases">
          <div className="cases__top">
            <h3 className="section__subtitle">Use Cases</h3>
            <p className="cases__descr section__descr">
              Financing works for every asset, every user, in every use-case.
            </p>
          </div>

          <div className="cases__grid">
            {cases.map((x, i) => (
              <div key={i} className="cases__card">
                <Image
                  className="cases__card-icon"
                  src={"./icons/" + x.icon + ".svg"}
                  alt="collectors"
                  width={24}
                  height={24}
                />
                <h5 className="cases__card-title">{x.title}</h5>
                <div className="cases__card-subtitle"> {x.subtitle}</div>
                <div className="cases__card-divider"></div>
                <div className="cases__card-descr">{x.descr}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section try">
          <div className="try__card">
            <div className="try__content">
              <div className="try__title">
                Try it today, Build On it tomorrow
              </div>
              <div className="try__descr">
                If you`re interested in bringing BNPL to your NFT project,{" "}
                <span className="try__link">schedule a call!</span>
              </div>
              <img className="try__char" src="/try-char.png" alt="character" />
              <img
                className="try__gradient"
                src="/try-gradient.png"
                alt="gradient"
              />
            </div>

            <div className="try__blur"></div>
          </div>
        </section>

        <section className="section backers">
          <h2 className="section__title">backed by</h2>

          <div className="backers__logos">
            <div className="backers__logos-top">
              <img
                className="backers__logo"
                src="./backers/backer-1.svg"
                alt="backer"
              />
              <img
                className="backers__logo"
                src="./backers/backer-2.svg"
                alt="backer"
              />
              <img
                className="backers__logo"
                src="./backers/backer-3.svg"
                alt="backer"
              />
            </div>

            <div className="backers__logos-bottom">
              <img
                className="backers__logo"
                src="./backers/backer-4.svg"
                alt="backer"
              />
              <img
                className="backers__logo"
                src="./backers/backer-5.svg"
                alt="backer"
              />
              <img
                className="backers__logo"
                src="./backers/backer-6.svg"
                alt="backer"
              />
              <img
                className="backers__logo"
                src="./backers/backer-7.svg"
                alt="backer"
              />
            </div>
          </div>

          <div className="backers__vces">
            {backers.map((x, i) => (
              <div className="backers__vc" key={i}>
                <div className="backers__vc-title">{x.name}</div>
                <div className="backers__vc-subtitle">{x.org}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section contact">
          <div className="contact__content">
            <Image
              className="contact__logo"
              src="./icons/logo.svg"
              alt="logo"
              width={44}
              height={24}
            />
            <div className="contact__descr">
              Be the first to get product updates from NiftyApes
            </div>
            <div className="input">
              <input
                type="text"
                className="input__controller"
                placeholder="Enter your email"
              />
              <div className="input__button">
                <Image
                  className="input__icon"
                  src="./icons/arrow-right.svg"
                  alt="logo"
                  width={16}
                  height={16}
                />
              </div>
            </div>
            <div className="contact__info">
              This signs you up to our Newsletter.We won’t spam you.
            </div>
          </div>
          <div className="contact__gradient"></div>
          <Image
            className="contact__img"
            src="./icons/banana-man.svg"
            alt="logo"
            width={108}
            height={118}
          />
        </section>
      </main>
    </div>
  );
}
