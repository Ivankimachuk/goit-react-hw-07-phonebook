import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts, selectContacts, selectFilterTerm, selectIsLoading } from "redux/appReducer";
import { ContainerList, ContactItem, Btn } from "components/Emotion.styled";


export const ContactsList = () => {
 
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilterTerm);
  const dispatch = useDispatch();

  const filtderContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact?.name?.toLowerCase().includes(normalizedFilter));
  }


  return (
    <ContainerList>
      {isLoading && <p>Loading data...</p>}
      {filtderContacts().length > 0 && !isLoading && filtderContacts().map(contact => 
       <ContactItem key={contact.id}>
       {contact.name}: {contact.phone}
       <Btn onClick={() => dispatch(deleteContacts(contact.id))}>Delete</Btn>
     </ContactItem>
     )}
    </ContainerList>
  );
};




