import { Component } from 'react';
import '../../assets/styles/login.css';

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
    //const history = useHistory();

    // Envoyer les informations de connexion au serveur d'authentification
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', token);
        console.log('token:'+token);
        setTimeout(function () { window.location.replace("/dashboard") }, 1000);
        // Stocker le token JWT dans l'état local ou dans un cookie sécurisé
        this.setState({ token, error: 'Connexion réussie !' });

        // Rediriger l'utilisateur vers le tableau de bord de l'administrateur
        //history.push('/dashboard');
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
        <h2 className='text-center color-white'>Connexion</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="login-page">
          <div className="form">
            <form className="login-form" onSubmit={this.handleLogin}>
            <input type="text" name="username" placeholder='Nom utilisateur:' value={username} onChange={this.handleInputChange} />
            <input type="password" name="password" placeholder='Mot de passe' value={password} onChange={this.handleInputChange} />
              <button type="submit">Se Connecter</button>
            </form>
          </div>
        </div>
        <br/>
        {/* <p>Vous n&lsquo;avez pas de compte ? <Link className='btn' to={'/register'}>Créer un compte</Link></p> */}
      </div>
    );
  }
}

export default AdminLogin;
