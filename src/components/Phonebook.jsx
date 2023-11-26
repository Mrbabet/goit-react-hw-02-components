import React, { useState } from "react";
import Section from "./Section";
import ContactForm from "./ContactForm";
import Contacts from "./ContactList";
import Filter from "./Filter";

const Phonebook = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  const handleSubmit = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  const filteredOuput = () => {};

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={handleSubmit} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} setFilter={setFilter} />
        <Contacts contacts={contacts} setContacts={setContacts} />
      </Section>
    </>
  );
};
export default Phonebook;
