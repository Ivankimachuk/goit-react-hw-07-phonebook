import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContacts, selectContacts } from "redux/appReducer";
import { nanoid } from "nanoid";
import { Button, FormContainer, Label, Input } from "components/Emotion.styled";

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleName = e => {
    setName(e.target.value)
  };
  const handleNumber = e => {
    setPhone(e.target.value)
  };

  const duplicating = (newContactName) => {
    return contacts.some((existingContact) => existingContact.name === newContactName);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newContactItem = {
      id: nanoid(),
      name,
      phone,
    };

    if (!duplicating(newContactItem.name)) {
      dispatch(addContacts(newContactItem)); 
      setName("");
      setPhone("");
    } else {
      alert(`${newContactItem.name} already exists. Please use a different name.`);
      setName("");
      setPhone("");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          onChange={handleName}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number
        <Input
          onChange={handleNumber}
          type="tel"
          value={phone}
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};

