import { Component } from 'react';

class AccountList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tpeaccounts: []
    };
  }

  componentDidMount() {
    // Appeler l'API pour récupérer la liste des contacts
    const token = localStorage.getItem('token');

    const requestOptions = {
        method: 'GET', // Méthode de la requête (GET, POST, PUT, etc.)
        headers: {
          'Authorization': `${token}`, // Ajoutez le token JWT dans l'en-tête "Authorization"
          // Vous pouvez également spécifier d'autres en-têtes si nécessaire
        },
      };

    fetch('http://127.0.0.1:3000/tpeaccounts', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.tpeAccounts.length === 0) {
            return null;
          }else{
            this.setState({ tpeaccounts: data.tpeAccounts });
          }
        
      })
      .catch(error => console.error('Erreur lors de la récupération des contacts :', error));
  }

  render() {
    const { tpeaccounts } = this.state;

    return (
      <div>
        <h2>Liste des Clients</h2>
        <ul>
          {tpeaccounts.map(tpeaccounts => (
            <li key={tpeaccounts._id}>
              <strong>Nom:</strong> {tpeaccounts.name}<br />
              <strong>Numéro de Téléphone:</strong> {tpeaccounts.phone}<br />
              <strong>E-mail:</strong> {tpeaccounts.email}<br />
              <strong>Catégorie de client:</strong> {tpeaccounts.categoryId}<br />
              <strong>Crédit SMS du client:</strong> {tpeaccounts.balance}<br />
            </li>
          ))}
        </ul>
       
      </div>
    );
  }
}

export default AccountList;
