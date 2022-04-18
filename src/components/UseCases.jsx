import React from "react";
import Link from "next/link";
import cardMouseEffect from "../common/cardMouseEffect";

const UseCases = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
  }, []);
  return (
    <section className="feat sub-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-10">
            
              <div className="s-head text-center mb-80">
                <h6 className="stit mb-30">
                  <span className="left"></span>
                  Use Cases
                  <span className="right"></span>
                </h6>
                <h2> Features to Customize your Application Easy</h2>
              </div>
            
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 items md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-monitor"></i>
              </span>
              <h5>vinTRAK</h5>
              <p>
                Citopia vinTRAK will securely verify vehicle location using decentralized identities and zero-knowledge proofs, without manual verification.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items active md-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-ios-bolt-outline"></i>
              </span>
              <h5>MaaS</h5>
              <p>
                Citopia MaaS acts as the trust anchor for identity management using blockchain, DIDs,  Zero Knowledge Proof technology  to ensure that the sovereign identities.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 items sm-mb30">
            <div className="item wow fadeIn" data-wow-delay=".3s">
              <span className="icon">
                <i className="ion-cube"></i>
              </span>
              <h5>partsTRAK</h5>
              <p>
                Citopia partsTRAK will act as the platform for participants to issue vehicle identity, battery identity, and location-related VCs.
              </p>
              <Link href="/about/about-dark">
                <a className="more-stroke">
                  <span></span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
