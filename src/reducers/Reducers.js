import Actions from "../actions/Actions";

export function reducer(state, action) {
  switch (action.type) {
    case Actions.FETCH_PRODUCTS:
      return {
        ...state,
        category: action.payload.category,
        products: action.payload.products
      };
    case Actions.ADD_TO_PURCHASE_HISTORY:
      return {
        ...state,
        purchaseHistory: action.payload
      };
    case Actions.LOGIN:
      return {
        ...state,
        isLogged: action.payload
      };
    default:
      return state;
  }
}
