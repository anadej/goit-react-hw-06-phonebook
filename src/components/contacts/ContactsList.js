import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsAction";
import { ContactsListStyled } from "./ContactsListStyled";

const initialStateContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const ContactsList = ({
  contacts = initialStateContacts,
  filter = "",
  deleteContact,
}) => {
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deleteContact: (id) => {
//       dispatch(deleteContact(id));
//     },
//   };
// };

export default connect(mapStateToProps, { deleteContact })(ContactsList);
