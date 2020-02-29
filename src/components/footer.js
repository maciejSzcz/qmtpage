import React from 'react';
import './footer.css';

const Footer = () => {
    const now = new Date();
    const currentYear = now.getFullYear();

    return (
        <footer className="Footer">
            <h2>Kontakt</h2>
            <p>Numer telefonu: 535310254</p>
            <p>Email: Nowakowska 15c</p>
            <p>Miasto: Wronki</p>
            <p>@QMT {currentYear}</p>
        </footer>
    );
};

export default Footer;