import { Component } from 'react';
import ContactForm from './ContactForm';

class ContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    // Appeler l'API pour récupérer la liste des contacts

    fetch('http://localhost:3000/contacts')
      .then(response => response.json())
      .then(data => {
        this.setState({ contacts: data });
      })
      .catch(error => console.error('Erreur lors de la récupération des contacts :', error));
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <h2>Liste des Contacts Clients</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.name}>
              <strong>Nom:</strong> {contact.name}<br />
              <strong>Numéro de Téléphone:</strong> {contact.phoneNumber}<br />
              <strong>Profession:</strong> {contact.profession}<br />
              <strong>Région:</strong> {contact.region}<br />
            </li>
          ))}
        </ul>
        <h2>---------------------------------------------------------------------</h2>
        <ContactForm />
      </div>
    );
  }
}

export default ContactList;
