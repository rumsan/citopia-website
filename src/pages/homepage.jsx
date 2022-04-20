import React from "react";
import Navbar from "../components/navbar";
import IntroWithSlider from "../components/intro-with-slider";
import AboutUs from "../components/about-us";
import Services from "../components/services";
import VideoWithTestimonials from "../components/video-with-testimonials";
import Footer from "../components/footer";
import LightTheme from "../layouts/Light";
import Portfolio from "../components/portfolio";

const Homepage4 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current,
      logo = logoRef.current;
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
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs />
        <Services lines />
        <Portfolio grid={2} filterPosition="left" />
        <VideoWithTestimonials />
        <Footer hideBGCOLOR />
      </div>
    </LightTheme>
  );
};

export default Homepage4;
