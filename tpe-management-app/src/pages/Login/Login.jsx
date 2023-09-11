import { Component } from 'react';

class AdminLogin extends Component {

   
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      token: null,
      error: null
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLogin = async (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    // Envoyer les informations de connexion au serveur d'authentification
    try {
      const response = await fetch('http://localhost:8000/authentication', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Stocker le token JWT dans l'état local ou dans un cookie sécurisé
        this.setState({ token, error: null });

        // Rediriger l'utilisateur vers le tableau de bord de l'administrateur
        history.push('/Admin/');
      } else {
        const errorData = await response.json();
        this.setState({ token: null, error: errorData.message });
      }
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      this.setState({ token: null, error: 'Une erreur s\'est produite lors de la connexion.' });
    }
  }

  render() {
    const { username, password, error } = this.state;

    return (
      <div>
        <h2>Connexion de l&lsquo;Administrateur</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={this.handleLogin}>
          <label>
            Nom d&lsquo;utilisateur:
            <input type="text" name="username" value={username} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Mot de passe:
            <input type="password" name="password" value={password} onChange={this.handleInputChange} />
          </label>
          <br />
          <button type="submit">Se Connecter</button>
        </form>
      </div>
    );
  }
}

export default AdminLogin;
