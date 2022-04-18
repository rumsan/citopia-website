/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from "./Split";
import Link from "next/link";
import { thumparallaxDown } from "../common/thumparallax";

const MinimalArea2 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <div className="s-head mb-80">
                <h6 className="stit mb-30">
                  <span className="left"></span>
                  Get Started
                  <span className="right"></span>
                </h6>
                <h2> Seamless Movement with Citopia</h2>
              </div>
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.
                  Are you a service provider or user looking for an easier and safer way to travel?
                </p>
              </Split>
              <ul>
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  We provide free initial consultation and support.
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  We work with some of the most successful businesses.
                </li>
              </ul>
              <Link href={`/about/about-dark`}>
                <a
                  className="butn bord curve mt-40 wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  <span>Get Started</span>
                </a>
              </Link>

              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea2;
