import React from 'react';
import './App.css';

import Header from './components/Header';
import Contact from './components/Contact';

import contactsJSON from './data/contacts.json';
import { useState } from 'react';
import ContactForm from './components/ContactForm';

const App = () => {

  const [contacts, setContacts] = useState([]);
 
  const submitHandler = (contact) =>{
    setContacts([...contacts, {name: contact.name, email: contact.email, phone: contact.phone, photo: contact.photo}]);
  }

  return (
    <div className="App">
      <Header />
      <ContactForm clickHandler={submitHandler}/>
      <Contact contacts={contacts} />
      <Contact contacts={contactsJSON} />
    </div>
  );
};

export default App;
