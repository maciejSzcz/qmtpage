import React from "react";
import Layout from "../components/layout";
import HeroPicture from "../images/mapka.jpg";

const Lokalizacja = () => (
  <Layout>
    <div className="Hero">
      <img className="Hero-Image" src={HeroPicture} alt="cash register"/>
      <h1 className="Hero-Text">Lokalizacja</h1>
    </div>

    <h1 className="Products-Name" name="kasy">Lokalizacja</h1>
    <div className="Map-Wrapper">
        <iframe 
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9371.732427626004!2d21.767624123191272!3d54.03945424608764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e187d93b071add%3A0x31a1bd8452225308!2sQMT!5e0!3m2!1spl!2spl!4v1582625833222!5m2!1spl!2spl"
            width="800"
            height="600"
            frameborder="0"
            style={{border: 0}}
            allowfullscreen="">
        </iframe>
    </div>
  </Layout>
);

export default Lokalizacja;