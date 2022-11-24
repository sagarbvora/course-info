import { LOADER_START, LOADER_STOP } from "../types";

export const loadingStart = () => (dispatch) => {
  return dispatch({
    type: LOADER_START,
    payload: true,
  });
};
export const loadingStop = () => (dispatch) => {
  return dispatch({
    type: LOADER_STOP,
    payload: false,
  });
};
