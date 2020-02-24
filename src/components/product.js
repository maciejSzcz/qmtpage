import React from "react"
import {Link} from "gatsby"
import "./product.css"

const Product = (props) => {
    return (
        <div className="Product">
            <img src={props.image} className="Product-Photo" alt="product"/>
            <h3>{props.title}</h3>
            <p className="Product-Description">{props.description}</p>
            <div>
                <p className="Product-Price">{props.price}</p>
                <Link 
                    activeClass="active"
                    to={props.path}
                    className="Product-Link"
                >
                    Szczegóły >
                </Link>
            </div>
        </div>
    )
}

export default Product