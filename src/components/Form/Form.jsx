import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContacts } from "redux/appReducer";
import { nanoid } from "nanoid";
import { Button, FormContainer, Label, Input } from "components/Emotion.styled";

export const Form = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleNumberChange = (evt) => {
    setNumber(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const contact = { name, number, id: nanoid() };
    dispatch(addContacts(contact));

    setName("");
    setNumber("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          onChange={handleNameChange}
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
          onChange={handleNumberChange}
          type="tel"
          value={number}
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



