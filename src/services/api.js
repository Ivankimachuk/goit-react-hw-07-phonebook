import axios from 'axios';

axios.defaults.baseURL = 'https://64f9abd54098a7f2fc14ccd2.mockapi.io/api/v1';


const fetchContacts = async () => {
    const response = await axios.get('/contacts');

    return response.data;
}

const addContact = async (contact) => { 
  const response = await axios.post('/contacts', contact);

  return response.data;
}

const deleteContact = async (contactId) => {
    const response = await axios.delete(`/contacts/${contactId}`);

    return response.data;
}



const api = { fetchContacts, addContact, deleteContact };

export default api;