import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterIsChanged } from "redux/appReducer";
import { Label, Input } from "components/Emotion.styled";

export const Filter = () => {
  const filter = useSelector((state) => state.appState.filter);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch(filterIsChanged(evt.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={handleChange} />
    </Label>
  );
};



