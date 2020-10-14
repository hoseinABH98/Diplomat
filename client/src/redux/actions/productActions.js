import axios from 'axios';
import { actionTypes } from '../types/productTypes';
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.productListRequest });
    const { data } = await axios.get('/api/products');

    dispatch({ type: actionTypes.productListSuccess, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.productListFailure,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};