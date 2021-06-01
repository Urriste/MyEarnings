import "./App.css";
import Main from "./components/Main.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import History from "./components/History";
import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    /* 
     Decidi poner el provider en el nivel mas alto para que cualquier nodo hijo pueda acceder */
    <StoreProvider>
      <Router>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/history">
          <History></History>
        </Route>
      </Router>
    </StoreProvider>
  );
}

export default App;
