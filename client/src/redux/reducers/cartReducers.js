import { cartTypes } from '../types/cartTypes';

export const cartReducers = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case cartTypes.cartAddItem:
      const existItem = state.cartItems.find(
        (x) => x.product === action.payload.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? action.payload : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case cartTypes.cartRemoveItem:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product !== action.payload
        ),
      };
    case cartTypes.cartSaveShippingAddress:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case cartTypes.cartSavePaymentMethod:
      return {
        ...state,
        paymentMethod: action.payload,
      };

    default:
      return state;
  }
};
