import { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      name: '',
      profession: '',
      region: ''
    };
  }

  // Méthode pour gérer les changements dans les champs de saisie
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Méthode pour soumettre le formulaire
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, profession, region } = this.state;

    // Appeler l'API pour créer un nouveau contact client
    // Remplacez la fonction fetch par votre logique d'appel API

    fetch('http://127.0.0.1:3000/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, phone, profession, region })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Nouveau contact client créé :', data);
      // Réinitialiser les champs de saisie après la création
      this.setState({ phone: '', name: '', profession: '', region: '' });
    })
    .catch(error => console.error('Erreur lors de la création du contact client :', error));
  }

  render() {
    const { phone, name, profession, region } = this.state;

    return (
      <div>
        <h2>Formulaire de Contact Client</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="phone"
            placeholder="Numéro de téléphone"
            value={phone}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={name}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="profession"
            placeholder="Profession"
            value={profession}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="region"
            placeholder="Région"
            value={region}
            onChange={this.handleInputChange}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
