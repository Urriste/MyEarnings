import React from "react";
import ArrowIcon from "../img/left-arrow.png";
import "../styles/menu.css";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <div>
      <div className="menu">
        <button
          className="arrow-button"
          onClick={() => {
            props.handleMenu(false);
          }}
        >
          <img src={ArrowIcon} alt="arrow-icon" className="arrow-icon" />
        </button>

        {/* Aprovechamos el "LINK" de react-router-dom para hacer la navegacion entre pestañas */}
        <Link to="/" className="menu-item">
          Inicio
        </Link>
        <Link to="/history" className="menu-item">
          Historial
        </Link>
      </div>
    </div>
  );
};

export default Menu;
