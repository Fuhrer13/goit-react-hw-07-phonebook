import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import classes from "./Phonebook.module.css";
import "../../Transitions/title.module.css";

import { addContact } from "../../Redux/Actions/Contacts";
import { contactsSelector } from "../../Redux/Selectors/contactsSelectors";

const formState = {
  name: "",
  number: "",
};

const Phonebook = () => {
  const [form, setForm] = useState(formState);
  const contacts = useSelector((state) => contactsSelector(state));
  const dispatch = useDispatch();

  const changeHandler = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = form;
    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    const isExist = contacts.some(
      (savedContact) =>
        savedContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExist) {
      toast.error("This name is already in use!");
      return;
    } else if (contact.name.length > 2 && contact.number.length > 5) {
      dispatch(addContact(contact));
    }
    reset();
  };

  const reset = () => {
    setForm({ name: "", number: "" });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="name" className={classes.lebel}>
        <p className={classes.name}>Name</p>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={changeHandler}
          className={classes.input}
        />
      </label>

      <label htmlFor="number" className={classes.lebel}>
        <p className={classes.name}>Number</p>
        <input
          type="text"
          name="number"
          value={form.number}
          onChange={changeHandler}
          className={classes.input}
        />
      </label>
      <button type="submit" className={classes.btn}>
        Add contact
      </button>
    </form>
  );
};
export default Phonebook;
