import { Component } from 'react';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    // Appeler l'API pour récupérer la liste des catégories

    fetch('http://localhost:3000/categories')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ categories: data });
      })
      .catch(error => console.error('Erreur lors de la récupération des catégories :', error));
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <h2>Liste des Catégories</h2>
        <ul>
          {categories.map(category => (
            <li key={category.name}>{category.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
