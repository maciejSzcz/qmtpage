import React from "react";
import { Link } from "gatsby";
import "./product_page.css";

const ProductPage = (props) => {
    return (
        <div className="Product-Page">
            <img src={props.image} className="Product-Photo" alt="product" />
            <div className="Description-Wrapper">
                <h3>{props.title}</h3>
                <p className="Product-Description">{props.description}</p>
                <div>
                    <p className="Product-Price">{props.price}</p>
                    <a
                        href={props.path}
                        className="Product-Link"
                    >
                        Strona producenta >
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;