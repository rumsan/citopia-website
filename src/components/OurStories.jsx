import React from "react";
import Link from "next/link";

const OurStories = () => {
  return (
    <section className="serv-arch section-padding ">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
          <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span>
                Our Stories
                <span className="right"></span>
              </h6>
              <h2>How Citopia Came To Be</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s2.jpg)" }}
          >
            <h6 className="numb">01</h6>
            <h5>Architecture</h5>
            <p>
              We provide all equipment and services, etc and ensure a safe and
              secure project site.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s1.jpg)" }}
          >
            <h6 className="numb">02</h6>
            <h5>Interior Design</h5>
            <p>
              We provide all equipment and services, etc and ensure a safe and
              secure project site.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>

          <div
            className="col-lg col-md-6 item bg-img"
            style={{ backgroundImage: "url(/img/arch/s3.jpg)" }}
          >
            <h6 className="numb">03</h6>
            <h5>3D Modeling</h5>
            <p>
              We provide all equipment and services, etc and ensure a safe and
              secure project site.
            </p>
            <Link href="/about/about-dark">
              <a className="custom-font more main-color">Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStories;
