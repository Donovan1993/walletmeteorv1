import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Navbar } from './Navbar';

// contact; name, email, imageurl
export const App = () => (
  <div>
    <Navbar/>
   <h1>Meteor Wallet DONOBIGBIG</h1>
  <ContactForm/> 
  <div><ContactList/></div>
  
   </div>
);

