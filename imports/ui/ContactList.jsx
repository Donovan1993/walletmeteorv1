import React from 'react';
import { ContactsCollection } from '../api/ContactsCollection';
import {useTracker} from 'meteor/react-meteor-data';

export const ContactList = () => {
    const contacts = useTracker(() => {
      return ContactsCollection.find({}).fetch(); // Tracker
    });
  
    return (
        <div class="container p-3 my-3 bg-dark text-white">
            <h2>Contact List</h2>
            {contacts.map(contact => (
               <li key={contact.email}>{contact.name} - {contact.email}</li>
            ))}
        </div>

    )
}
