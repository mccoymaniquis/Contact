import React, { Component } from 'react';
import Header from './layout/header';
import Contact from './components/Contact';
import ContactTable from './components/ContactTable';
import { v4 as uuidv4 } from 'uuid';
import './App.css';


class App extends Component {
  state = {
    contact: [],
  };

  AddContact = (firstname, middlename, lastname, contact_no, email) => {
    const newContact = {
      id: uuidv4(),
      firstname,
      middlename,
      lastname,
      contact_no,
      email,
      active: true,
    };
    this.setState({
      contact: [...this.state.contact, newContact],
    });
  };

  delContact = (id) => {
    this.setState({
      contact: [
        ...this.state.contact.filter((contact_id) => contact_id.id !== id),
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <Contact AddContact={this.AddContact} />
        <ContactTable
          delContact={this.delContact}
          key={this.state.contact.id}
          contact={this.state.contact}
        />
      </div>
    );
  }
}


export default App;
