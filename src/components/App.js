import React, { Component } from "react";
import Filter from "./admin/Filter";
import ContactsForm from "./contacts/ContactsForm";
import ContactsList from "./contacts/ContactsList";
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
