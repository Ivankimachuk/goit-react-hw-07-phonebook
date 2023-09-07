import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from "redux/appReducer";
import { ContainerList, ContactItem, Btn } from "components/Emotion.styled";


export const ContactsList = () => {
  const filterContacts = useSelector((state) => {
    const filter = state.appState.filter.toLowerCase();
    return state.appState.contacts.filter(
      (contact) => contact.name.toLowerCase().includes(filter)
    );
  });

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContacts(id));
  };

  return (
    <ContainerList>
      {filterContacts.map((contact) => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
          <Btn onClick={() => handleDelete(contact.id)}>Delete</Btn>
        </ContactItem>
      ))}
    </ContainerList>
  );
};




