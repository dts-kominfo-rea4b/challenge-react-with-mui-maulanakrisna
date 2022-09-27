import React from 'react';
import './App.css';

import Header from './components/Header';
import Contact from './components/Contact';

import contactsJSON from './data/contacts.json';
import { useState } from 'react';

const App = () => {

  // const [contacts, setContacs] = useState([]);
  const data = [...contactsJSON];

  return (
    <div className="App">
      <Header />
      <Contact data={data} />
    </div>
  );
};

export default App;
