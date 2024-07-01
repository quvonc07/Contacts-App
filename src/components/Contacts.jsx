import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const Contacts = ({ contacts }) => {
  return (
    <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Contact List
      </Typography>
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id} divider>
            <ListItemText
              primary={contact.name}
              secondary={`${contact.email} - ${contact.phone}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Contacts;
