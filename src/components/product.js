import React from "react"
import {Link} from "gatsby"

const Product = (props) => {
    return (
        <div className="Product">
            <img src={props.image} className="Product-Photo" alt="product"/>
            <h3>{props.title}</h3>
            <p className="Product-Description">{props.description}</p>
            <p className="Product-Price">{props.price}</p>
            <Link 
                activeClass="active"
                to={props.path}
            >
                Szczegóły >
            </Link>
        </div>
    )
}

export default Product