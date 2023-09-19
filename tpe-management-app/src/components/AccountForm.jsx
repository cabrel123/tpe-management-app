import { Component } from 'react';


class AccountForm extends Component {
  constructor(props) {
    
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      categoryId: '',
      categories: []
    };
    
  }
 



  // Méthode pour gérer les changements dans les champs de saisie
  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  // Méthode pour soumettre le formulaire
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, categoryId } = this.state;

    // Appeler l'API pour créer un nouveau compte TPE
    // Remplacez la fonction fetch par votre logique d'appel API

    fetch('http://localhost:3000/tpeaccounts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, phone: phone, email: email, categoryId: categoryId, balance: 10 })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Nouveau compte TPE créé :', data);
      //start create customer account
      fetch('http://127.0.0.1:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ accounttype:'cli', username:email, password:'123456' })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Nouveau compte créé :', data);
    })
    .catch(error => console.error('Erreur lors de la création du compte :', error));
    //end create customer account

      // Réinitialiser les champs de saisie après la création
      this.setState({ name: '', phone: '', email: '', categoryId: '' });
      setTimeout(function () { window.location.reload() }, 1000);

    })
    .catch(error => console.error('Erreur lors de la création du compte TPE :', error));
  }

    componentDidMount() {
    // Appeler l'API pour récupérer la liste des catégories

    fetch('http://127.0.0.1:3000/categories')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.length === 0) {
          return null;
        }else{
          this.setState({ categories: data });
        }
        
      })
      .catch(error => console.error('Erreur lors de la récupération des catégories :', error));
  }

  render() {
    const { name, phone, email, categoryId } = this.state;
    const { categories } = this.state; 

    return (
      <div>
        <h2 className='text-center color-white'>Formulaire de Compte TPE</h2>
         <div className="form">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Nom du compte"
            value={name}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="N° de téléphone"
            value={phone}
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail client"
            value={email}
            onChange={this.handleInputChange}
          />
          <select name="categoryId" value={categoryId} onChange={this.handleInputChange}>
            <option value="">Choisis la catégorie du client</option>
            {categories.map(category => (
            <option value={category.name} key={category._id}>{category.name}</option>
            ))}
          </select>
          
          <button type="submit">Ajouter</button>
        </form>
      </div>
      </div>
    );
  }
}

export default AccountForm;
