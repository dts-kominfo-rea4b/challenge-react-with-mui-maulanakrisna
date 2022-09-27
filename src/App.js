import React from 'react';
import './App.css';

import Header from './components/Header';
import Contact from './components/Contact';

import contactsJSON from './data/contacts.json';
import { useState } from 'react';
import ContactForm from './components/ContactForm';

const App = () => {

  // const contacts = [...contactsJSON];
  const [inputedContacts, setInputedContacts] = useState([...contactsJSON]);
 
  const submitHandler = (contact) =>{
    setInputedContacts([...inputedContacts, {name: contact.name, email: contact.email, phone: contact.phone, photo: contact.photo}]);
  }

  return (
    <div className="App">
      <Header />
      <ContactForm clickHandler={submitHandler}/>
      {inputedContacts.map((contact, i) => <Contact key={i} data={contact} />)}
    </div>
  );
};

export default App;
