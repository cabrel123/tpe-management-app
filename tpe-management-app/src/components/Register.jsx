import { Component } from 'react';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accounttype: '',
      username: '',
      password: ''
    };
  }

  // Méthode pour gérer les changements dans les champs de saisie
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Méthode pour soumettre le formulaire
  handleSubmit = (e) => {
    e.preventDefault();
    const { accounttype, username, password } = this.state;

    // Appeler l'API pour créer un nouveau contact client
    // Remplacez la fonction fetch par votre logique d'appel API

    fetch('http://127.0.0.1:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ accounttype, username, password })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Nouveau compte créé :', data);
      // Réinitialiser les champs de saisie après la création
      this.setState({ accounttype: '', username: '', password: '' });
      setTimeout(function () { window.location.reload() }, 1000);
    })
    .catch(error => console.error('Erreur lors de la création du compte :', error));
  }

  render() {
    const { accounttype, username, password } = this.state;

    return (
      <div>
        <h2>Formulaire de Création de compte utilisateurs</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={this.handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={password}
            onChange={this.handleInputChange}
          />
          <select name="accounttype" value={accounttype} onChange={this.handleInputChange}>
            <option value="">Profil utilisateur</option>
            <option value="adm">Admin</option>
            <option value="cli">Client</option>
          </select>
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
