import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addContact } from "../../redux/contacts/contactsAction";
import { ContactsFormStyled } from "./ContactsFormStyled";

const groupContacts = ["all", "family", "friends", "work"];

const initialState = {
  name: "",
  number: "",
  group: groupContacts[0],
};

class ContactsForm extends Component {
  state = { ...initialState };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addContact({ ...this.state, id: uuidv4() });
    this.setState({ ...initialState });
  };

  render() {
    const { name, number } = this.state;
    return (
      <ContactsFormStyled>
        <form className="phoneForm" onSubmit={this.onHandleSubmit}>
          <label className="labelForm">
            Name:
            <input
              className="inputForm"
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.onHandleChange}
            />
          </label>
          <label className="labelForm">
            Number:
            <input
              className="inputForm"
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.onHandleChange}
            />
          </label>
          <label className="labelForm">
            Group:
            <select
              name="group"
              className="inputForm"
              onChange={this.onHandleChange}
            >
              {groupContacts.map((item) => (
                <option value={item} key={item}>
                  {item.toUpperCase()}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className="buttonForm">
            Add contact
          </button>
        </form>
      </ContactsFormStyled>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => {
      dispatch(addContact(contact));
    },
  };
};

export default connect(null, mapDispatchToProps)(ContactsForm);
