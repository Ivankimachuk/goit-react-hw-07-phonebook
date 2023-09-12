import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilterTerm, setFilterTerm } from "redux/appReducer";
import { Label, Input } from "components/Emotion.styled";

export const Filter = () => {
const dispatch = useDispatch;
const filter = useSelector(selectFilterTerm);

const hendleInput = (e) => {
  const newContact = e.target.value;
  dispatch(setFilterTerm(newContact));
};

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={hendleInput} />
    </Label>
  );
};



