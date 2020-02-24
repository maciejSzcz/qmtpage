import React from "react"
import Layout from "../components/layout"
import HeroPicture from "../images/ergo.jpg"

const Lokalizacja = () => (
  <Layout>
    <div className="Hero">
      <img className="Hero-Image" src={HeroPicture} alt="cash register"/>
      <h1 className="Hero-Text">Lokalizacja</h1>
    </div>

    <h1 className="Products-Name" name="kasy">Lokalizacja</h1>
  </Layout>
)

export default Lokalizacja