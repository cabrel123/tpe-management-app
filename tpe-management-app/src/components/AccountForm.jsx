import { Component } from 'react';

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountName: '',
      accountPhone: '',
      accountEmail: '',
      categoryId: ''
    };
  }

  // Méthode pour gérer les changements dans les champs de saisie
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Méthode pour soumettre le formulaire
  handleSubmit = (e) => {
    e.preventDefault();
    const { accountName, accountPhone, accountEmail, categoryId } = this.state;

    // Appeler l'API pour créer un nouveau compte TPE
    // Remplacez la fonction fetch par votre logique d'appel API

    fetch('http://localhost:3000/tpeAccounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: accountName, balance: 10, phone: accountPhone, email: accountEmail, categoryId: categoryId })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Nouveau compte TPE créé :', data);
      // Réinitialiser les champs de saisie après la création
      this.setState({ accountName: '', accountPhone: '', accountEmail: '', categoryId: '' });
    })
    .catch(error => console.error('Erreur lors de la création du compte TPE :', error));
  }

  render() {
    const { accountName, accountPhone, accountEmail, categoryId } = this.state;

    return (
      <div>
        <h2>Formulaire de Compte TPE</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="accountName"
            placeholder="Nom du compte"
            value={accountName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="accountPhone"
            placeholder="N° de téléphone"
            value={accountPhone}
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="accountEmail"
            placeholder="E-mail client"
            value={accountEmail}
            onChange={this.handleInputChange}
          />
          <select name="categoryId" value={categoryId} onChange={this.handleInputChange}>
            <option value="">Choisis la catégorie du client</option>
            <option value="1">TPE LMT</option>
            <option value="2">TPE Express</option>
          </select>
          
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }
}

export default AccountForm;
