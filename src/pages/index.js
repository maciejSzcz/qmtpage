import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroPicture from "../images/ergo.jpg";
import SystemsPic from "../images/dtkck.png";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Hero">
      <img className="Hero-Image" src={HeroPicture} alt="cash register" />
      <h1 className="Hero-Text">Kasy Fiskalne</h1>
    </div>
    <div className="Offer-Wrapper">
      <img className="Offer-Image Offer-1" src={SystemsPic} alt="img" />
      <div className="Offer-Text">
        <h2>Kasy online</h2>
        <p>It is necessary to point out that either systolic approach or best practice patterns has proved to be reliable in the scope of The Position of Effective Control" (Myles Handley in The Book of the Continuing Support) There is no doubt, that Johnnie Marks is the firs person who formulated that with the exception of the skills enforces the overall effect of the positive influence of any continuing support.</p>
        <Link
          activeClass="active"
          to="/kasy"
          className="Offer-Button"
        >
          <p className="Offer-Link">Oferta</p>
        </Link>
      </div>
    </div>
    <div className="Offer-Wrapper">
      <img className="Offer-Image Offer-2" src={SystemsPic} alt="img" />
      <div className="Offer-Text">
        <h2>Systemy sprzedaży</h2>
        <p>It is necessary to point out that either systolic approach or best practice patterns has proved to be reliable in the scope of The Position of Effective Control" (Myles Handley in The Book of the Continuing Support) There is no doubt, that Johnnie Marks is the firs person who formulated that with the exception of the skills enforces the overall effect of the positive influence of any continuing support.</p>
        <Link
          activeClass="active"
          to="/systemy"
          className="Offer-Button"
        >
          <p className="Offer-Link">Oferta</p>
        </Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
