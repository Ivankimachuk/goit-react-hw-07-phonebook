import React, { useEffect } from "react";

import { Form } from "./Form/Form"
import { Filter } from "./Filter/Filter"
import { ContactsList } from "./ContactsList/ContactsList"

import { useDispatch, useSelector } from "react-redux";
import { requestContacts, selectError } from "redux/appReducer";
import { Container } from "components/Emotion.styled";




export function App() {

  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      {!!error && <div>{error.message}</div>}
    </Container>
  );
};
