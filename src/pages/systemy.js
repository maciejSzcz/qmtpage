import React from "react";
import Layout from "../components/layout";
import Product from "../components/product";
import HeroPicture from "../images/ergo.jpg";

const Systemy = () => (
  <Layout>
    <div className="Hero">
      <img className="Hero-Image" src={HeroPicture} alt="cash register"/>
      <h1 className="Hero-Text">Systemy sprzedaży</h1>
    </div>

    <h1 className="Products-Name" name="kasy">Systemy sprzedaży</h1>

    <div className="Products-Wrapper">
      <Product 
        image={HeroPicture} 
        title="Posnet ERGO" 
        description="Jedna z najbardziej popularnych kas fiskalnych na rynku Posnet ERGO teraz dostępna w wersji ONLINE. Urządzenie, dzięki modułowej konstrukcji, zapewnia użytkownikowi swobodę wyboru między przewodowym lub bezprzewodowym połączeniem z Centralnym Repozytorium Kas (CRK)." 
        price="1199zł"
        path="/kasy/ergo"
      />

      <Product 
        image={HeroPicture} 
        title="Posnet Mobile" 
        description="Wrzuć ją do teczki lub wsadź do kieszeni. To najmniejsza kasa fiskalna ONLINE na rynku, z którą udasz się w dowolne miejsce, by sprzedać swoje usługi lub produkty.
        Teraz dodatkowo została wyposażona w bezprzewodowe interfejsy komunikacyjne.  Do wyboru użytkownika jest moduł WiFi/Bluetooth lub modem GPRS." 
        price="1199zł"
        path="/kasy/mobile"
      />

      <Product 
        image={HeroPicture} 
        title="Posnet Bingo" 
        description="Bingo ONLINE to kolejne urządzenie z niezwykle popularnej linii kas Bingo, często wybieranych przez właścicieli małych punktów handlowych i usługowych. Doceniane jest za niezawodność i intuicyjną obsługę. Bingo ONLINE powstało na bazie sprawdzonej konstrukcji BINGO XL i w standardzie zostało wyposażone m.in. w złącze LAN/Ethernet, które można wykorzystać do komunikacji z CRK." 
        price="1199zł"
        path="/kasy/bingo"
      />
    </div>
  </Layout>
);

export default Systemy;
