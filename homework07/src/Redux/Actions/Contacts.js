import { ADD_CONTACT, DELETE_CONTACT } from "../Types/Types";
import axios from "axios";
import { setLoader } from "./Loader";
import { setError, resetError, setDeleteError } from "./Error";

export const addContact = (data) => ({
  type: ADD_CONTACT,
  payload: data,
});

export const deleteContacts = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

const options = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const asyncAddContact = (contact) => async (dispatch) => {
  dispatch(setLoader(true));
  const newContact = { ...contact };
  try {
    dispatch(resetError());
    const result = await axios.post(
      "http://localhost:5001/contacts",
      newContact,
      options
    );
    dispatch(addContact(result.data));
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(setLoader(false));
  }
};

export const asyncDeleteContact = (id) => async (dispatch) => {
  dispatch(setLoader(true));
  try {
    dispatch(resetError());
    await axios.delete(`http://localhost:5001/contacts/${id}`);
    dispatch(deleteContacts(id));
  } catch (error) {
    dispatch(setDeleteError());
  } finally {
    dispatch(setLoader(false));
  }
};
