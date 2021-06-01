import { useContext, useState } from "react";
import "../styles/main.css";
import MenuIcon from "../img/menu.png";
import Menu from "./Menu";
import Fade from "react-reveal/Fade";
import { StoreContext } from "../store/StoreProvider";
import { types } from "../store/StoreReducer";

const Main = () => {
  const [menu, setMenu] = useState(false);

  //me traigo los datos del contexto
  const [store, dispatch] = useContext(StoreContext);

  const [entrada, setEntrada] = useState(0);
  const [comentario, setComentario] = useState("");

  let inputGanancia = document.getElementById("input-ganancia");
  let inputComentario = document.getElementById("input-comentario");

  const handleGanancia = (e) => {
    //tomamos los valores del input para setear el estado
    setEntrada(e.target.value);
  };

  const handleComentario = (e) => {
    //tomamos los valores del input para setear el estado
    setComentario(e.target.value);
  };

  const handleDispatch = () => {
    //creamos el objeto que va a ser insertado dentro del nuevo estado global
    const newGanancia = { total: entrada, comentario: comentario };
    //con la funcion dispatch le paso al reducer que funcion ejecutar, y con el payload le paso el dato a agregar
    dispatch({
      type: types.AGREGAR_GANANCIA,
      payload: newGanancia,
    });

    //reinicio los input para que quede mas facherito el efecto :)

    inputGanancia.value = "";
    inputComentario.value = "";
  };

  return (
    <div>
      {" "}
      {/*    La logica del menu, basicamente si es true el estado "menu" , nos muestra el menu, y si no, lo oculta. Le agrego el efecto FADE de la libreria "react-reveal" para darle un poco mas de estilo */}
      {menu ? (
        <Fade>
          {" "}
          <Menu handleMenu={setMenu}></Menu>{" "}
        </Fade>
      ) : null}
      <div className="main-container">
        <nav className="navbar">
          <button
            onClick={() => {
              setMenu(true);
            }}
          >
            <img className="menu-icon" src={MenuIcon} alt="burger-icon" />
          </button>
        </nav>
        <h1 className="title">Ingresá tu ganancia</h1>
        <input
          type="number"
          className="input-ganancia"
          placeholder="Ganancia"
          autoComplete="off"
          id="input-ganancia"
          onChange={handleGanancia}
        />
        <textarea
          name="comentario"
          placeholder="Comentario"
          className="input-comentario"
          autoComplete="off"
          id="input-comentario"
          onChange={handleComentario}
        ></textarea>

        {/* Al boton le doy la funcion donde esta el metodo dispatch y la creacion del objeto a insertar con los estados de los input */}
        <button className="btn-agregar" onClick={handleDispatch}>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Main;
