/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../common/navbar";

const NavbarMobileApp = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <h4>Citopia</h4>
              ) : (
                <h4>Citopia</h4>
              )
            ) : (
              <h4>Citopia</h4>
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          onClick={handleMobileDropdown}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About Us
              </span>
              <div className="dropdown-menu">
                <Link href="/#">
                  <a className="dropdown-item">About Citopia</a>
                </Link>
                <Link href="/#">
                  <a className="dropdown-item">Products</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/mobile-app/services-dark">
                <a className="nav-link">Partners</a>
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Resources
              </span>
              <div className="dropdown-menu">
                <Link href="/#">
                  <a className="dropdown-item">Blogs</a>
                </Link>
                <Link href="/#">
                  <a className="dropdown-item">Articles</a>
                </Link>
                <Link href="/#">
                  <a className="dropdown-item">Media Mentions</a>
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link href="/mobile-app/pricing-plan-dark">
                <a className="nav-link">Demo</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#contact-us">
              <a className="nav-link" >
                Contact Us
              </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobileApp;
