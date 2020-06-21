import React from "react";
import PropTypes from "prop-types";
import classes from "./Contact.module.css";

const Contact = ({ name, number, onDelete, id }) => {
  return (
    <li className={classes.item} key={id}>
      <div className={classes.form}>
        <div className={classes.name}>{name}</div>
        <span className={classes.number}>{number}</span>
      </div>
      <button className={classes.btn} onClick={onDelete}>
        Х
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
