import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: ''
  }

  handleInputChange = (event) => {
    const { name, value, number } = event.target;
    this.setState({ [name]: value, [number]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { contacts, name, number } = this.state;
    const id = nanoid();
    const newContact = { id, name, number };
    const updatedContacts = [newContact, ...contacts];
    this.setState({ contacts: updatedContacts, name: '', number: '' });
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
    const { name, number, filter } = this.state;
    const filtredContact = this.getFilteredContasts()
    return (
      <div>
        <h1>Phone Book</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number:
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add Contact</button>
        </form>
        <h2>Contacts</h2>
        <label htmlFor="">

          <input type="text" name="filter" value={filter} onChange={this.handleChangeFilter} />
        </label>
        <ul>
          {filtredContact.map(({ id, name, number }) => (
            <li key={id}>{name}: {number}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;