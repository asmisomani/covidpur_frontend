const initialState = {
  cart: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CART':
      state.cart[action.payload[0]]=action.payload[1]
      console.log("CART NAYAN",state.cart)
      return {cart:state.cart}
      break;
    case "DECREMENT":
      return { counter: state.counter - 1 };
      break;
    default:
      return state;
  }
}
