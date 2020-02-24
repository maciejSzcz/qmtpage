import React from "react"
import Layout from "../components/layout"
import HeroPicture from "../images/ergo.jpg"

const Kontakt = () => (
  <Layout>
    <div className="Hero">
      <img className="Hero-Image" src={HeroPicture} alt="cash register"/>
      <h1 className="Hero-Text">Kontakt</h1>
    </div>

    <h1 className="Products-Name" name="kasy">Systemy sprzedaży</h1>
  </Layout>
)

export default Kontakt