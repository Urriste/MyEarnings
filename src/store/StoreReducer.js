//el estado inicial lo dejamos en un campo ganancia , que es un array vacio. En este caso, ahi almacenamos los objetos con los datos de cada dia.
const initialStore = {
  ganancia: [],
};

//creamos este objeto para ir almacenando los action del reducer, que  seran pasados mediante el dispatch
const types = {
  AGREGAR_GANANCIA: "AGREGAR_GANANCIA",
};

const storeReducer = (state, action) => {
  switch (action.type) {
    //si el action.type que le pasamos mediante el dispatch coincide con este caso, entonces se agrega una ganancia
    case types.AGREGAR_GANANCIA:
      return { ...state, ganancia: [...state.ganancia, action.payload] };

    //agregamos un caso default por si se ejecuta una accion que no existe
    default:
      return state;
  }
};

export { initialStore, types };
export default storeReducer;
