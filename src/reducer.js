export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) => {
  let result = basket?.reduce(
    (amount, item) => parseInt(item.price) + parseInt(amount),
    0
  );
  return result;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product(id: ${action.item.id}) as its not available in the basket `
        );
      }

      return { ...state, basket: newBasket };
    case "SET_USER":
      return { ...state, user: action.item.user };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
