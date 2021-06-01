import { createContext, useEffect, useReducer } from "react";
import storeReducer, { initialStore } from "./StoreReducer";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore, () => {
    //utilizamos el tercer parametro del useReducer para controlar el estado inicial. Si existe data en el local storage, lo retornamos para que ese sea el nuevo estado. Si no existe nada, nos devuelve el estado inicial ya definido
    const localData = localStorage.getItem("historial");
    return localData ? JSON.parse(localData) : initialStore;
  });

  useEffect(() => {
    //la magia del localStorage:
    // Con el useEffect y el parametro [store], estamos a la espera de que el estado global se actualice.
    //cuando lo hace, nos agrega el nuevo elemento al localStorage
    localStorage.setItem("historial", JSON.stringify(store));
  }, [store]);

  return (
    //al provider le pasamos los valores que van a ser poder utilizados en los componentes hijos, osea el store y el dispatch
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext };
export default StoreProvider;
