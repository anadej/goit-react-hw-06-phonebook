import React, { Component } from "react";
import Filter from "./filter/Filter";
import ContactsForm from "./contactsForm/ContactsForm";
import ContactsList from "./contactsList/ContactsList";
import Section from "./Section";

class App extends Component {
  render() {
    return (
      <>
        <Section title={"Phonebook Redux and Toolkit version"}>
          <ContactsForm />
        </Section>
        <Section title={"Contacts"}>
          <Filter />
          <ContactsList />
        </Section>
      </>
    );
  }
}

export default App;
