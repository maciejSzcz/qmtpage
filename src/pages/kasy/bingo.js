import React from "react";
import Layout from "../../components/layout";
import HeroPicture from "../../images/ergo.jpg";


const Bingo = () => {
    return (
        <Layout>
            <div className="Hero">
                <img className="Hero-Image" src={HeroPicture} alt="cash register" />
                <h1 className="Hero-Text">Kasy Fiskalne</h1>
            </div>
        </Layout>
    );
};

export default Bingo;