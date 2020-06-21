import React from "react";
import Contact from "../Contact/Contact";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import slide from "../../Transitions/slide.module.css";
import classes from "./Contacts.module.css";
import { useSelector } from "react-redux";
import Loader from "../../Helpers/Loader";
import { loaderSelector } from "../../Redux/Selectors/contactsSelectors";

const Contacts = ({ filteredContacts, onDelete }) => {
  const loader = useSelector((state) => loaderSelector(state));
  return (
    <>
      {loader && <Loader />}

      {filteredContacts.length > 0 && (
        <TransitionGroup component="ul" className={classes.list}>
          {filteredContacts.map((contact) => (
            <CSSTransition
              timeout={250}
              unmountOnExit
              classNames={slide}
              key={contact.id}
            >
              <Contact {...contact} onDelete={() => onDelete(contact.id)} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      )}
    </>
  );
};

Contacts.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
