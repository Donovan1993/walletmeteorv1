import React from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Navbar } from './Navbar';

// contact; name, email, imageurl
export const App = () => (
  <div>
    <Navbar/>
    <div className="min-h-full">
      <div className="max-w-4xl mx-auto p-2">
  <ContactForm/> 
  <div><ContactList/></div>
  </div>
 
  </div>
 
   </div>
);

