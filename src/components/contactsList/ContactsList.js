import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsAction";
import { ContactsListStyled } from "./ContactsListStyled";

const ContactsList = ({ contacts, filter = "", deleteContact }) => {
  return (
    <ContactsListStyled>
      <ul>
        {contacts.map(
          (contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase()) && (
              <li key={contact.id}>
                {contact.name}: {contact.number}
                <button
                  className="contactBtn"
                  type="button"
                  onClick={() => deleteContact(contact.id)}
                >
                  Delete
                </button>
              </li>
            )
        )}
      </ul>
    </ContactsListStyled>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

//Вариант как ниже описан используется в файле ContactsForm.js

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteContact: (id) => {
//       dispatch(deleteContact(id));
//     },
//   };
// };

export default connect(mapStateToProps, { deleteContact })(ContactsList);
