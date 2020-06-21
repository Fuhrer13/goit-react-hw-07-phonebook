import {
  CONTACT_REQUEST_ERROR,
  ERROR_RESET,
  DELETE_ERROR,
} from "../Types/Types";

const initialState = false;

export default (state = initialState, { type }) => {
  switch (type) {
    case CONTACT_REQUEST_ERROR:
    case DELETE_ERROR:
      return true;

    case ERROR_RESET:
      return false;

    default:
      return state;
  }
};
