import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "./Redux/Actions/Filter";
import { deleteContacts } from "./Redux/Actions/Contacts";

import Contacts from "./Components/Contacts/Contacts";
import ContactsFilter from "./Components/Filter/Filter";
import Phonebook from "./Components/Phonebook/Phonebook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./App.module.css";
import { CSSTransition } from "react-transition-group";
import pop from "./Transitions/pop.module.css";
import Error from "./Helpers/Error";
import {
  contactsSelector,
  filterSelector,
  errorSelector,
  getVisibleContacts,
} from "./Redux/Selectors/contactsSelectors.js";
toast.configure();

const App = () => {
  const dispatch = useDispatch();
  const contactsArr = useSelector((state) => contactsSelector(state));
  const filtered = useSelector((state) => filterSelector(state));
  const error = useSelector((state) => errorSelector(state));
  const filteredContacts = useSelector((state) => getVisibleContacts(state));

  const changeHandler = (e) => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };

  const deleteContact = (id) => {
    dispatch(deleteContacts(id));
  };

  return (
    <>
      {error ? (
        <Error />
      ) : (
        <div className={classes.container}>
          <CSSTransition in classNames="title" timeout={500} appear>
            <h2 className={classes.title}>Phonebook</h2>
          </CSSTransition>
          <Phonebook />
          <ToastContainer autoClose={5000} />
          {contactsArr.length >= 2 && (
            <CSSTransition timeout={250} classNames={pop}>
              <ContactsFilter filter={filtered} changeFilter={changeHandler} />
            </CSSTransition>
          )}
          <Contacts
            filteredContacts={filteredContacts}
            onDelete={deleteContact}
          />
        </div>
      )}
    </>
  );
};

export default App;
