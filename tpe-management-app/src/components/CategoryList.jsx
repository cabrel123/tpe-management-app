import { Component } from 'react';
import CategoryForm from './CategoryForm';

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
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
    const { categories } = this.state; 
    
   
    return (
      <div>
        <h2>Liste des Catégories</h2>
        <ul>
          {categories.map(category => (
            <li key={category._id}>{category.name}</li>
          ))}
        </ul>
        <h2>---------------------------------------------------------------------</h2>
        <CategoryForm />
      </div>
    );
  }
}

export default CategoryList;
