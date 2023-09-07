import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contacts: [],
    filter: "",
}


const appSlice = createSlice({
  
  name: "contacts",
  
  initialState: initialState,
  
  reducers: {
  
      addContacts(state, action) {
          state.contacts = [action.payload, ...state.contacts];
        
    },
      deleteContacts(state, action) { 
          const deletedContactIndex = state.contacts.findIndex(post => post.id === action.payload);
          state.contacts.splice(deletedContactIndex, 1);
      
    },
      filterIsChanged(state, action) {
          state.filter = action.payload;
        
    },
  },
});


export const { addLocalStorageContacts, addContacts, deleteContacts, filterIsChanged, } = appSlice.actions;


export const selectContacts = state => state.appState.contacts;
export const selectFilter = state => state.appState.filter;


export const appReducer = appSlice.reducer;