import { useContext, useState, useEffect } from "react";
import "../styles/history.css";
import Menu from "./Menu";
import MenuIcon from "../img/menu.png";
import Fade from "react-reveal/Fade";
import { StoreContext } from "../store/StoreProvider";

const History = () => {
  //aca tambien me traigo los datos del conjtexto
  const [store, dispatch] = useContext(StoreContext);

  //uso el object destructuring para obtener el valor que quiero usar especificamente
  const { ganancia } = store;

  const [menu, setMenu] = useState(false);

  return (
    <div>
      {menu ? (
        <Fade>
          {" "}
          <Menu handleMenu={setMenu}></Menu>{" "}
        </Fade>
      ) : null}
      <div className="container">
        <nav className="navbar">
          <button
            onClick={() => {
              setMenu(true);
            }}
          >
            <img className="menu-icon" src={MenuIcon} alt="burger-icon" />
          </button>
        </nav>
        <h1>Historial</h1>
        <table>
          <thead>
            <tr className="table-items">
              <th className="table-items">Total $</th>
              <th className="table-items">Comentario</th>
              <th className="table-items">Fecha</th>
            </tr>
          </thead>
          <tbody>
            {/* utilizamos el array de objetos que tenemos en el estado global para mapearlo en una tabla */}
            {ganancia
              ? ganancia?.map((item, index) => {
                  return (
                    <tr key={index} className="table-items">
                      <td className="table-items">${item.total}</td>
                      <td className="table-items">{item.comentario}</td>
                      <td className="table-items">{item.fecha}</td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
