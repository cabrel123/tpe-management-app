import { Component } from 'react';

class CategoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: ''
    };
  }

  // Méthode pour gérer les changements dans le champ de saisie
  handleInputChange = (e) => {
    this.setState({ categoryName: e.target.value });
  }

  // Méthode pour soumettre le formulaire
  handleSubmit = (e) => {
    e.preventDefault();
    const { categoryName } = this.state;

    // Appeler l'API pour créer une nouvelle catégorie
    // Remplacez la fonction fetch par votre logique d'appel API

    fetch('http://localhost:3000/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: categoryName })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Nouvelle catégorie créée :', data);
      // Réinitialiser le champ de saisie après la création
      this.setState({ categoryName: '' });
    })
    .catch(error => console.error('Erreur lors de la création de la catégorie :', error));
  }

  render() {
    const { categoryName } = this.state;

    return (
      <div>
        <h2>Formulaire de Catégorie</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Nom de la catégorie"
            value={categoryName}
            onChange={this.handleInputChange}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
    );
  }
}

export default CategoryForm;
