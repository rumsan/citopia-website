/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import DarkTheme from "../layouts/Dark";
import Navbar from "../components/navbar";
import PageBanner from "../components/PageBanner";
import GetStarted from "../components/GetStarted";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import UseCases from "../components/UseCases";
import Blogs from "../components/Blogs";
import News from "../components/News";
import OurStories from "../components/OurStories";
import ContactForm from "../components/ContactUs";
import Footer from "../components/Footer";


const MobileAppDark = () => {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DarkTheme mobileappstyle>
        <Navbar nr={navbarRef} />
        <PageBanner/>
        < GetStarted />
        < HowItWorks />
        < UseCases />
        < Features />
        < Blogs />
        < News />
        < OurStories />
        < ContactForm/>
        < Footer/>
      </DarkTheme>
    </>
  );
};

export default MobileAppDark;
