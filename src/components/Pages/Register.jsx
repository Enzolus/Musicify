import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  // Importez Link depuis 'react-router-dom'
import './css/Register.scss';
import Container from "../fragment/Container";

function Register() {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('https://projet.lusardi.fr/register.php', { name, mail, password });

      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage('Registration failed: ' + error.response.data.message);
      } else {
        setErrorMessage('Registration failed: An unexpected error occurred');
      }
      setSuccessMessage('');
    }
  };

  return (
    <Container>    
    <div className="register">
      <h2>Registration Page</h2>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={mail} onChange={(e) => setMail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleRegister}>Register</button>
      <div>
        <p>You have an account? <Link to="/home/connexion">Login here</Link>.</p>
      </div>
    </div>
    </Container>    
  );
}

export default Register;
