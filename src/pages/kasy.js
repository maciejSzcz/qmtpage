import React from "react"
import Layout from "../components/layout"
import Product from "../components/product"
import HeroPicture from "../images/ergo.jpg"

const Kasy = () => (
  <Layout>
    <div className="Hero">
      <img className="Hero-Image" src={HeroPicture} alt="cash register"/>
      <h1 className="Hero-Text">Kasy Fiskalne</h1>
    </div>
    <p className="Products-Name" name="kasy">Kasy Fiskalne</p>

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

          <Product 
            image={HeroPicture} 
            title="FAWAG lite" 
            description="To pierwsza kasa produkowana przez spółkę Lubelskie Fabryki Wag FAWAG S.A. w wersji ONLINE. Jest mała, solidna i prosta w obsłudze, a także ergonomiczna i funkcjonalna. Można do niej podpiąć szufladę kasjerską, skaner kodów kreskowych, wagę, terminal płatniczy i komputer." 
            price="1199zł"
            path="/kasy/fawag"
          />


          <Product 
            image={HeroPicture} 
            title="Posnet REVO" 
            description="Kasę Posnet REVO zaprojektowaliśmy z myślą o punktach, w których istotna jest aranżacja miejsca sprzedaży. Nowoczesny wygląd i kilka wersji kolorystycznych kasy pozwalają tworzyć nietypowe stanowiska kasjerskie. Możliwość połączenia REVO z wagą oraz graficzne wyświetlacze nie tylko dobrze się prezentują, ale też pozwalają zaoszczędzić miejsce."
            price="1199zł"
            path="/kasy/revo"
          />

          <Product 
            image={HeroPicture} 
            title="Posnet NEO XL" 
            description="Posnet NEO XL to jedna z najbardziej zaawansowanych kas systemowych, która doskonale sprawdza się w średnich i dużych placówkach handlowych. Jej użytkownicy najbardziej cenią sobie w tym urządzeniu multifunkcyjność i wręcz legendarną odporność." 
            price="1199zł"
            path="/kasy/neoxl"
          />
        </div>

  </Layout>
)

export default Kasy
