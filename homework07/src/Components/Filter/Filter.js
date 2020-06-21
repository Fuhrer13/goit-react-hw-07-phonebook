import React from "react";
import PropTypes from "prop-types";
import classes from "./Filter.module.css";
import { useSelector } from "react-redux";
import { filterSelector } from "../../Redux/Selectors/contactsSelectors";

const ContactsFilter = ({ changeFilter }) => {
  const filter = useSelector((state) => filterSelector(state));
  return (
    <div className={classes.container}>
      <label htmlFor="filter" className={classes.label}>
        Find contacts by name
        <input
          className={classes.input}
          type="text"
          name="filter"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

ContactsFilter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};

export default ContactsFilter;
