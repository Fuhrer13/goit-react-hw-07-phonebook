import { SET_LOADER } from "../Types/Types";

export const setLoader = (boolean) => ({ type: SET_LOADER, payload: boolean });

const initialState = false;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return action.payload;

    default:
      return state;
  }
};
