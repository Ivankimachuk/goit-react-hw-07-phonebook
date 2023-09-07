import React from "react";
import { Form } from "./Form/Form"
import { Filter } from "./Filter/Filter"
import { ContactsList } from "./ContactsList/ContactsList"
import { Container } from "components/Emotion.styled";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "redux/store";

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
}

const AppWithPersist = () => (
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
);

export default AppWithPersist;

