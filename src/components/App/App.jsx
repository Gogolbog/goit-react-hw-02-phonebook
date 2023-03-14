import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { PageWrapper } from './AppStyled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  addContact = (newContact) => {
    const { contacts } = this.state;
    const updatedContact = [newContact, ...contacts];
    this.setState({ contacts: updatedContact })
  }

  deleteContact = (id) => {
    const { contacts } = this.state;
    const updatedContact = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatedContact });
  }

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value })
  }

  getFilteredContasts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter))
  }


  render() {
    const { filter } = this.state;
    const filtredContact = this.getFilteredContasts()
    return (
      <PageWrapper>
        <h1>Phone Book</h1>

        <ContactForm addContact={this.addContact} contacts={this.state.contacts} />

        <h2>Contacts</h2>

        <Filter onChange={this.handleChangeFilter} value={filter} />

        <ContactList filtredContact={filtredContact} onDeleteContact={this.deleteContact} />
      </PageWrapper>
    );
  }
}

export default App;