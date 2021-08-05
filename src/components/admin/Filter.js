import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../../redux/contacts/contactsAction";
import { FilterStyled } from "./FilterStyled";

const Filter = ({ setFilter }) => {
  const onFilterChange = (e) => {
    const inputFilter = e.target.value;
    setFilter(inputFilter);
  };

  return (
    <FilterStyled>
      Find contacts by name:
      <input
        className="inputFilter"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Начните вводить имя контакта, который хотите найти"
        required
        onChange={onFilterChange}
      />
    </FilterStyled>
  );
};

export default connect(null, { setFilter })(Filter);
