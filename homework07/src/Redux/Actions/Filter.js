import { CHANGE_FILTER } from "../Types/Types";

export const changeFilter = (value) => ({
  type: CHANGE_FILTER,
  payload: value,
});
