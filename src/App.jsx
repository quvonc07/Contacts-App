import React, { useState } from 'react';
import Contacts from './components/Contacts';
import ContactForm from './components/ContactForm';
import { Container, Typography } from '@mui/material';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  ]);

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: contacts.length + 1 }]);
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Contacts App
      </Typography>
      <ContactForm addContact={addContact} />
      <Contacts contacts={contacts} />
    </Container>
  );
};

export default App;
