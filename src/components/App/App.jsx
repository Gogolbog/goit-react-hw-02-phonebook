import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { PageWrapper } from './AppStyled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) {
      this.setState({ contacts });
    }
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

  handleChangeFilter = event => {
    this.setState({ filter: event.target.value })
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