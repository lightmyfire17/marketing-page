/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

import { useState, useEffect } from "react";

import GhostContentAPI from "@tryghost/content-api";

export default function Home() {
  const api = new GhostContentAPI({
    url: process.env.NEXT_PUBLIC_BLOG_API_URL,
    key: process.env.NEXT_PUBLIC_GHOST_API_KEY,
    version: "v5.0",
  });

  const [menuOpen, setMenu] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);

  const getBlogPosts = () => {
    api.posts
      .browse({ limit: 3 })
      .then((posts) => {
        setBlogPosts(posts);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
      subtitle: "Buy NFTs Now, Pay for Them Later",
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

  useEffect(() => {
    getBlogPosts();
  }, []);

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
        <div className="header__menu">
          <a
            href="https://niftyapes.readme.io/docs/buy-now-pay-later"
            target="_blank"
            className="header__menu-link"
          >
            Examples
          </a>
          <a
            href="https://niftyapes.readme.io/docs/introduction"
            target="_blank"
            className="header__menu-link"
          >
            Docs
          </a>
          <a
            href="https://niftyapes.readme.io/docs/faq"
            target="_blank"
            className="header__menu-link"
          >
            Faq
          </a>
          <a
            href="https://app.niftyapes.money"
            target="_blank"
            className="header__menu-link"
          >
            Lending
          </a>
        </div>
        <div className="header__right">
          <Link
            href="https://marketplace.niftyapes.money"
            className="button button_theme_secondary"
            target="_blank"
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
          <a className="mobile-menu__nav-link" href="#products">
            Products
          </a>
          <a className="mobile-menu__nav-link" href="#usecases">
            Use cases
          </a>
          <a className="mobile-menu__nav-link" href="#howitworks">
            How it works
          </a>
          <a
            className="mobile-menu__nav-link"
            href="https://blog.niftyapes.money/"
            target="_blank"
          >
            Blog
          </a>
          <a
            className="mobile-menu__nav-link"
            href="https://calendly.com/mark-niftyapes/30min"
            target="_blank"
          >
            Schedule a call
          </a>
        </nav>
      </div>
      <main className="main">
        <img className="box box-1" src="/box-1.svg" alt="decor" />
        <img className="box box-2" src="/box-2.svg" alt="decor" />
        <img className="box box-3" src="/box-3.svg" alt="decor" />
        <img className="box box-4" src="/box-4.png" alt="decor" />
        <img className="box box-5" src="/box-5.png" alt="decor" />
        <img className="box box-6" src="/box-6.webp" alt="decor" />
        <img className="box box-7" src="/box-7.webp" alt="decor" />
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
              href="https://marketplace.niftyapes.money"
              target="_blank"
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
              href="https://niftyapes.readme.io/docs/introduction"
              target="_blank"
              className="intro__button button button_theme_text"
            >
              Get Early Access to SDK
              <Image
                className="button-icon"
                src="./icons/arrow-up-right.svg"
                alt="angle"
                width={14}
                height={14}
              />
            </Link>
          </div>
        </section>

        <section className="section products" id="products">
          <h2 className="section__title">products</h2>
          <Tilt
            className="products__wrapper"
            tiltMaxAngleX="10"
            tiltMaxAngleY="10"
            transitionEasing="ease"
          >
            <div className="products__img" />
          </Tilt>
          <div className="products__gradient"></div>
        </section>

        <section className="section cases" id="cases">
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

        <section className="section how" id="howitworks">
          <h2 className="section__title">how it works</h2>
          <p className="section__descr how__descr">
            Seller financing for NFTs allows buyers to purchase NFTs on credit,
            with the seller providing financing and the buyer making installment
            payments over time.
          </p>

          <div className="how__explain">
            <div className="how__explain-top">
              <div className="how__explain-button how__explain-button_2">2</div>
            </div>
            <div className="how__explain-center">
              <div className="how__explain-button how__explain-button_1">1</div>
              <Tilt className="how__explain-wrapper" transitionEasing="ease">
                <div className="how__explain-card">
                  <div className="how__explain-heading">CloneX #3997</div>
                </div>
              </Tilt>

              <div className="how__explain-button how__explain-button_3">3</div>
              <Image
                className="how__explain-ellipse how__explain-ellipse_sm"
                src="./icons/howto-ellipse.svg"
                alt="ellipse"
                width={259}
                height={12}
              />

              <Image
                className="how__explain-ellipse how__explain-ellipse_md"
                src="./icons/howto-ellipse-md.svg"
                alt="ellipse"
                width={485}
                height={12}
              />
            </div>
            <div className="how__explain-bottom">
              <Image
                className="how__explain-arrow how__explain-arrow_sm"
                src="./icons/howto-arrow.svg"
                alt="arrow"
                width={193}
                height={12}
              />

              <Image
                className="how__explain-arrow how__explain-arrow_md"
                src="./icons/howto-arrow-md.svg"
                alt="arrow"
                width={386}
                height={12}
              />
              <div className="how__explain-buyer">Buyer</div>
              <div className="how__explain-part how__explain-part-1">
                <Image
                  className="how__explain-part-icon"
                  src="./icons/clock.svg"
                  alt="clock"
                  width={14}
                  height={14}
                />
                <div className="how__explain-part-tooltip">
                  <Image
                    className="how__explain-part-tooltip-icon"
                    src="./icons/howto-tooltip.svg"
                    alt="tooltip"
                    width={120}
                    height={40}
                  />
                  <div className="how__explain-part-tooltip-text">
                    Down Payment
                  </div>
                </div>
              </div>
              <div className="how__explain-part how__explain-part-4">
                <Image
                  className="how__explain-part-icon"
                  src="./icons/clock.svg"
                  alt="clock"
                  width={14}
                  height={14}
                />
              </div>
              <div className="how__explain-part how__explain-part-2">
                <Image
                  className="how__explain-part-icon"
                  src="./icons/clock.svg"
                  alt="clock"
                  width={14}
                  height={14}
                />
              </div>
              <div className="how__explain-part how__explain-part-3">
                <Image
                  className="how__explain-part-icon"
                  src="./icons/eth.svg"
                  alt="eth"
                  width={14}
                  height={14}
                />
              </div>
              <div className="how__explain-seller">Seller</div>
            </div>
            <div className="how__explain-installments">
              Monthly Installments
            </div>
          </div>

          <Image
            className="how__grid"
            src={"./icons/grid.svg"}
            alt="grid"
            width={600}
            height={600}
          />
        </section>

        <section className="section try">
          <Tilt tiltMaxAngleX="5" tiltMaxAngleY="5" transitionEasing="ease">
            <div className="try__card">
              <div className="try__content">
                <div className="try__title">
                  Try it today, Build On it tomorrow
                </div>
                <div className="try__descr">
                  If you`re interested in bringing BNPL to your NFT project,{" "}
                  <a
                    href="https://calendly.com/mark-niftyapes/30min"
                    target="_blank"
                    className="try__link"
                  >
                    schedule a call!
                  </a>
                </div>
                <img
                  className="try__char"
                  src="/try-char.png"
                  alt="character"
                />
                <div className="try__gradient" />
              </div>

              <div className="try__blur"></div>
            </div>
          </Tilt>
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
                  alt="arrow-right"
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

        <section className="section blog">
          <h3 className="section__subtitle">NiftyApes Blog</h3>
          <div className="blog__top">
            <p className="section__descr blog__descr">
              Financing works for every asset, every user, in every use-case.
            </p>
            <a
              href="https://blog.niftyapes.money/"
              target="_blank"
              className="link"
            >
              Read more{" "}
              <Image
                className="button-icon"
                src="./icons/arrow-up-right.svg"
                alt="arrow"
                width={14}
                height={14}
              />
            </a>
          </div>

          <div className="blog__grid">
            {blogPosts.map((x, i) => (
              <a className="blog__item" key={i} href={x.url} target="_blank">
                <div className="blog__card">
                  <div
                    className="blog__card-img"
                    style={{ backgroundImage: `url(${x.feature_image})` }}
                  ></div>
                  {x.featured && (
                    <div className="blog__card-featured">
                      <Image
                        src="./icons/lightning.svg"
                        alt="feature-icon"
                        width={14}
                        height={14}
                      />
                      featured
                    </div>
                  )}
                </div>
                <div className="blog__title">{x.title}</div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__top">
          <Image
            className="footer__logo"
            src="./icons/logo.svg"
            alt="logo"
            width={72}
            height={19}
          />
          <div className="footer__descr">The Future is Bananas 💛</div>
        </div>

        <div className="footer__grid">
          <div className="footer__column">
            <div className="footer__title">products</div>
            <a
              href="https://niftyapes.readme.io/docs/introduction"
              target="_blank"
              className="footer__link"
            >
              SDK
            </a>
            <a
              href="https://app.niftyapes.money"
              target="_blank"
              className="footer__link"
            >
              Lending dApp
            </a>
          </div>

          <div className="footer__column">
            <div className="footer__title">NiftyApes</div>
            <a
              href="https://niftyapes.readme.io/docs/introduction"
              target="_blank"
              className="footer__link"
            >
              docs
            </a>
            <a
              href="https://blog.niftyapes.money/"
              target="_blank"
              className="footer__link"
            >
              blog
            </a>
            <a
              href="https://whitepaper.niftyapes.money/"
              target="_blank"
              className="footer__link"
            >
              HSLA Whitepaper
            </a>
            <a
              href="https://jobs.niftyapes.money"
              target="_blank"
              className="footer__link"
            >
              Careers
            </a>
          </div>

          <div className="footer__column">
            <div className="footer__title">community</div>
            <a
              href="https://twitter.com/NiftyApes"
              target="_blank"
              className="footer__link"
            >
              twitter
            </a>
            <a
              href="https://discord.gg/niftyapes"
              target="_blank"
              className="footer__link"
            >
              discord
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
