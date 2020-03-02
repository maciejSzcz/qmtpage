import React from "react";
import Layout from "../../components/layout";
import HeroPicture from "../../images/ergo.jpg";
import ProductPage from "../../components/product_page";
import ErgoPic from "../../images/posnet_ergo.jpg";

const Ergo = () => {
    return (
        <Layout>
            <div className="Hero">
                <img className="Hero-Image" src={HeroPicture} alt="cash register"/>
                <h1 className="Hero-Text">Kasy Fiskalne</h1>
            </div>
            <ProductPage
                image={ErgoPic}
                title="Posnet Ergo"
                description="Jedna z najbardziej popularnych kas fiskalnych na rynku Posnet ERGO teraz dostępna w wersji ONLINE. Urządzenie, dzięki modułowej konstrukcji, zapewnia użytkownikowi swobodę wyboru między przewodowym lub bezprzewodowym połączeniem z Centralnym Repozytorium Kas (CRK)."
                price="1199zł"
                path="https://www.posnet.com.pl/produkty/product/356/ergo-online"
            />
        </Layout>
    );
};

export default Ergo;