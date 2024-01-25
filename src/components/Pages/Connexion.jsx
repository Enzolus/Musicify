import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './css/Connexion.scss';
import Container from "../fragment/Container";

function Connexion() {
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [userName, setUserName] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://projet.lusardi.fr/login.php', { mail, password });

      setSuccessMessage(response.data.message);
      setErrorMessage('');
      setUserName(response.data.name);
      const userName = response.data.name;

      sessionStorage.setItem('userName', userName);
    } catch (error) {
      // ...
    }
  };

  return (
    <Container>
    <div className="login">
      <h2>Login Page</h2>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {userName && <div>Welcome, {userName}!</div>} {/* Affichez le nom de l'utilisateur ici */}
      <div>
        <label>Email:</label>
        <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      
      {/* Lien vers la page d'inscription s'il n'a pas de compte */}
      <div>
        <p>Don't have an account? <Link to="/home/register">Register here</Link>.</p>
      </div>
    </div>
    </Container>
  );
}

export default Connexion;
