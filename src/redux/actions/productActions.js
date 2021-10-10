import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../types/action-types";

const {
  SET_PRODUCTS,
  SELECTED_PRODUCT,
  REMOVE_SELECTED_PRODUCT,
  FETCH_PRODUCTS,
} = ActionTypes;

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");

  dispatch({
    type: FETCH_PRODUCTS,
    payload: response.data,
  });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`/products/${id}`);

  dispatch({
    type: SELECTED_PRODUCT,
    payload: response.data,
  });
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (products) => {
  return {
    type: SELECTED_PRODUCT,
    payload: products,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
  };
};
