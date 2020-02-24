import { Link } from "gatsby"
import React from "react"
import "./header.css"
import Logo from '../images/output-onlinepngtools.png'

const Header = () => (

  <div className="Navigation">
    <img className="Logo" src={Logo} alt="logo"/>
    <ul className="Navigation-Buttons">
      <li>
        <Link activeClass="active"
          to="/kasy"
        >
          <p className="Navigation-Button">
            Kasy fiskalne
          </p>
        </Link>
      </li>
      <li>
        <Link 
          activeClass="active"
          to="/systemy"
        >
          <p className="Navigation-Button">
            Systemy sprzedaży
          </p>
        </Link>
      </li>
      <li>
        <Link 
          activeClass="active"
          to="/lokalizacja"
        >
          <p className="Navigation-Button">
            Lokalizacja
          </p>
        </Link>
      </li>
      <li>
        <Link 
          activeClass="active"
          to="/about"
        >
          <p className="Navigation-Button">
            Kontakt
          </p>
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
